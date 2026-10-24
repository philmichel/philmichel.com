# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository. `CLAUDE.md` is a symlink to this file.

## Commands

```bash
yarn dev          # Development server with hot reload
yarn build        # Production build + post-build RSS/sitemap scripts
yarn serve        # Start production server
yarn lint         # ESLint with auto-fix
yarn analyze      # Bundle analysis
scripts/build-cv-pdf.sh  # Build the executive CV PDF (see below)
```

No test suite is configured.

## Architecture

Personal blog/portfolio built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS 4**, and **Contentlayer2** for MDX content processing.

### Content Pipeline

Blog posts are written in MDX under `data/blog/` and processed by Contentlayer (`contentlayer.config.ts`). At build time, Contentlayer compiles MDX and computes fields: `slug`, `path`, `readingTime`, `toc`, and `structuredData` (JSON-LD). A post-build script (`scripts/postbuild.mjs`) generates `public/feed.xml` and `public/search.json` (used by kbar local search). Tag data is written to `.contentlayer/` during the Contentlayer hook.

Remark plugins: GFM, math, code titles, image-to-JSX, GitHub alerts.
Rehype plugins: slug, autolink headings, KaTeX, citations (`.bib` file at `data/references-data.bib`), Prism syntax highlighting, HTML minification.

### Routing

- `/` → `app/page.tsx` — home (latest 5 posts via `Main.tsx`)
- `/blog` / `/blog/page/[page]` — paginated post list
- `/blog/[...slug]` — individual post
- `/tags` / `/tags/[tag]` / `/tags/[tag]/page/[page]` — tag browsing
- `/about`, `/projects` — static pages
- `/api/healthz`, `/api/newsletter` — API routes
- `app/sitemap.ts`, `app/robots.ts` — generated at build

### Key Directories

| Path                     | Purpose                                                            |
| ------------------------ | ------------------------------------------------------------------ |
| `app/`                   | Next.js App Router pages and API routes                            |
| `components/`            | Reusable UI components                                             |
| `layouts/`               | Page layout templates (PostLayout, ListLayout, AuthorLayout, etc.) |
| `data/`                  | Content (MDX posts/authors) and site configuration                 |
| `data/siteMetadata.js`   | Central site config: title, author, theme, analytics, social links |
| `data/headerNavLinks.ts` | Navigation menu items                                              |
| `data/projectsData.ts`   | Projects list for `/projects`                                      |
| `scripts/`               | Post-build RSS and search index generation; CV PDF build script    |
| `cv/`                    | Typst source and dated PDF builds of the executive CV              |
| `css/tailwind.css`       | Global styles and Tailwind directives                              |

### Path Aliases (tsconfig.json)

`@/` maps to the project root, so `@/components/`, `@/data/`, `@/layouts/`, etc. are valid imports.

### Deployment

Docker (`Dockerfile`) with Next.js standalone output mode. Trailing slashes enabled. Security headers (CSP, HSTS, X-Frame-Options) are set in `next.config.js`.

### Adding a Blog Post

Create a `.mdx` file in `data/blog/`. Frontmatter fields include `title`, `date`, `tags`, `summary`, `authors`, `layout` (defaults to `PostLayout`), and optional `images`.

## CV

The CV exists in two forms that are maintained **by hand, separately**:

- **Website** (`/cv`): rendered by `app/cv/page.tsx` from `data/cvData.ts`.
- **PDF** (for recruiters): `cv/cv.typ`, a [Typst](https://typst.app) document with the content written inline.

When CV content changes, update both. The PDF intentionally differs from the website in a few ways: it has a Profile paragraph, groups University of Tokyo / Partnership on AI / AIST under "Academic & Advisory Appointments", condenses internships into "Earlier Experience", and shows the website tagline as an "Expertise" line.

### Building the PDF

```bash
scripts/build-cv-pdf.sh             # writes cv/Philipp_Michel_CV_<today as YYYY-MM-DD>.pdf
scripts/build-cv-pdf.sh 2026-10-24  # or pass the date suffix explicitly
```

- Requires Nix only: the script fetches Typst (`nixpkgs#typst`) and the Source Sans 3 / Source Serif 4 fonts (`nixpkgs#source-sans`, `nixpkgs#source-serif`), copying only the static OTFs into a temp dir. Variable fonts are excluded because Typst picks the wrong weights from them.
- Output filenames always carry the build date. Keep old PDFs in `cv/` as a history and commit new ones alongside `cv.typ` changes.
- `cv/` is in `.dockerignore`, so the PDFs never ship in the site image.

### Design and content conventions

- US Letter, two pages. After any change, check the page count (`pdfinfo`) and render the pages to PNG (`pdftoppm -r 110 -png <pdf> page`, from `nixpkgs#poppler-utils`) to look for overflow onto a third page or overlapping text. To recover space, trim `section` / `org` spacing in `cv.typ` before cutting content.
- Accent colour is Yale Blue `#00356B`. Headings use Source Serif 4; body text uses Source Sans 3. Bullets are 9.5pt and padded `0.94in` from the right so they wrap before the date column. In-text year ranges are wrapped in `#box[...]` so they never split across lines.
- The LinkedIn link shows the text "LinkedIn" rather than the URL.
- Avoid em dashes (in the text and in the PDF title metadata) and stock phrases that read as AI-generated. Keep wording plain and factual, and don't state org size or headcount.
- Before sending a new version, check the PDF for anything that could get flagged: `exiftool` for metadata (should be only title, author, Typst creator, and dates), `pdftotext` to confirm the extracted text matches what's visible, and `pdfinfo` to confirm there is no JavaScript, forms, or attachments.
