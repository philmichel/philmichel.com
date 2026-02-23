import { genPageMetadata } from 'app/seo'
import SocialIcon from '@/components/social-icons'
import EmailButton from './EmailButton'
import { cvData, CVEntry, CVSidebarEntry, CVSubrole } from '@/data/cvData'

export const metadata = genPageMetadata({ title: 'CV' })

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-1 pb-3 text-xl font-bold tracking-wide text-gray-700 uppercase dark:text-gray-300">
      {children}
    </div>
  )
}

function SectionDivider({ visible = false }: { visible?: boolean }) {
  return (
    <div
      className={`pt-7 pb-1 md:col-span-2 ${visible ? 'border-t border-gray-200 dark:border-gray-700' : ''}`}
    />
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 space-y-0.5 pl-4 text-base text-gray-600 dark:text-gray-400">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-gray-400 dark:bg-gray-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Subrole({ subrole }: { subrole: CVSubrole }) {
  return (
    <div className="mt-3">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-base text-gray-700 dark:text-gray-300">{subrole.role}</span>
        <span className="text-primary-500 dark:text-primary-400 font-mono text-sm">
          {subrole.period}
        </span>
      </div>
      {subrole.bullets && subrole.bullets.length > 0 && <BulletList items={subrole.bullets} />}
    </div>
  )
}

function ExperienceEntry({ entry }: { entry: CVEntry }) {
  return (
    <div className="pb-8 md:col-start-2">
      <div className="flex flex-wrap items-baseline gap-x-3 text-xl">
        <span className="font-semibold text-gray-900 dark:text-gray-100">{entry.organization}</span>
        {entry.role && <span className="text-gray-700 dark:text-gray-300">{entry.role}</span>}
      </div>
      <div className="mt-0.5 mb-2 flex flex-wrap items-baseline gap-x-3">
        <span className="text-primary-500 dark:text-primary-400 font-mono text-sm">
          {entry.period}
        </span>
        <span className="text-sm text-gray-400 italic dark:text-gray-500">{entry.location}</span>
      </div>
      {entry.bullets && entry.bullets.length > 0 && <BulletList items={entry.bullets} />}
      {entry.subroles && entry.subroles.map((s, i) => <Subrole key={i} subrole={s} />)}
    </div>
  )
}

function EducationEntry({ entry }: { entry: CVSidebarEntry }) {
  return (
    <div className="pb-8 md:col-start-2">
      <div className="flex flex-wrap items-baseline gap-x-3 text-xl">
        <span className="font-semibold text-gray-900 dark:text-gray-100">{entry.organization}</span>
        <span className="text-gray-700 dark:text-gray-300">{entry.degree}</span>
      </div>
      <div className="mt-0.5 mb-2 flex flex-wrap items-baseline gap-x-3">
        <span className="text-primary-500 dark:text-primary-400 font-mono text-sm">
          {entry.period}
        </span>
        <span className="text-sm text-gray-400 italic dark:text-gray-500">{entry.location}</span>
      </div>
      {entry.bullets && entry.bullets.length > 0 && <BulletList items={entry.bullets} />}
    </div>
  )
}

export default function CVPage() {
  const { name, tagline, contact, experience, education, academic, honors, languages, athletics } =
    cvData

  return (
    <div>
      {/* Page heading */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9 md:text-5xl md:leading-[3.5rem] dark:text-gray-100">
          Curriculum Vitae
        </h1>
      </div>

      {/* CV content */}
      <div className="pt-8 pb-12">
        {/* Name / header card */}
        <div className="mb-8 p-6 md:pl-[14rem]">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {name}
          </h2>
          <p className="mt-1 text-xl text-gray-500 dark:text-gray-400">{tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <EmailButton />
            <SocialIcon kind="linkedin" href={contact.linkedin} size={7} />
            <SocialIcon kind="googlescholar" href={contact.scholar} size={7} />
            <SocialIcon kind="github" href={contact.github} size={7} />
          </div>
        </div>

        {/* Grid: section labels in col1, content in col2 — desktop only */}
        <div className="md:grid md:grid-cols-[11rem_1fr] md:gap-x-12">
          {/* ── Experience ── */}
          <SectionDivider visible />
          <SectionLabel>Experience</SectionLabel>
          {experience.map((entry, i) => (
            <ExperienceEntry key={i} entry={entry} />
          ))}

          {/* ── Education ── */}
          <SectionDivider />
          <SectionLabel>Education</SectionLabel>
          {education.map((entry, i) => (
            <EducationEntry key={i} entry={entry} />
          ))}

          {/* ── Academic ── */}
          <SectionDivider />
          <SectionLabel>Academic</SectionLabel>
          {academic.map((entry, i) => (
            <EducationEntry key={i} entry={entry} />
          ))}

          {/* ── Honors ── */}
          <SectionDivider />
          <SectionLabel>Honors</SectionLabel>
          <div className="pb-8 md:col-start-2">
            <BulletList items={honors} />
          </div>

          {/* ── Languages ── */}
          <SectionDivider />
          <SectionLabel>Languages</SectionLabel>
          <div className="pb-8 md:col-start-2">
            <BulletList items={languages} />
          </div>

          {/* ── Athletics ── */}
          <SectionDivider />
          <SectionLabel>Athletics</SectionLabel>
          <div className="pb-8 md:col-start-2">
            <BulletList items={athletics} />
          </div>
        </div>
      </div>
    </div>
  )
}
