// Executive CV (PDF) for Philipp Michel. Build with: scripts/build-cv-pdf.sh
#let accent = rgb("#00356B")
#let muted = rgb("#5B6573")
#let rule-color = rgb("#C9CFD8")

#set document(title: "Philipp Michel - CV", author: "Philipp Michel")
#set page(
  paper: "us-letter",
  margin: (x: 0.75in, top: 0.5in, bottom: 0.55in),
  footer: context {
    set text(size: 8pt, fill: muted)
    grid(
      columns: (1fr, 1fr),
      align(left)[Philipp Michel · Curriculum Vitae],
      align(right)[#counter(page).display() / #counter(page).final().first()],
    )
  },
)
#set text(font: "Source Sans 3", size: 10pt, fill: rgb("#1A1D23"), lang: "en")
#set par(leading: 0.55em, justify: false)
#show link: set text(fill: accent)

#let section(title, tight: false) = {
  v(8pt)
  block(below: 4pt, sticky: true)[
    #text(font: "Source Serif 4", size: 11.5pt, weight: "semibold", fill: accent, tracking: 0.04em, upper(title))
    #v(-6pt)
    #line(length: 100%, stroke: 0.6pt + rule-color)
  ]
  if tight { v(-9pt) }
}

#let bullets(items) = {
  set list(marker: text(fill: accent, size: 7pt, baseline: -0.6pt)[■], indent: 12pt, body-indent: 7pt, spacing: 4pt)
  set text(size: 9.5pt)
  set par(leading: 0.6em)
  pad(right: 0.94in, list(..items))
}

// Organization header: name + location on one line, optional period on the right
#let org(name, location, period: none) = block(above: 13pt, below: 6pt, sticky: true, grid(
  columns: (1fr, auto),
  [#text(weight: "bold", size: 10.5pt, name)#h(6pt)#text(fill: muted, size: 9.5pt, location)],
  if period != none { text(fill: muted, size: 9.5pt, period) },
))

#let role(title, period, items: ()) = block(above: 10pt, below: 2pt, breakable: true)[
  #block(sticky: true, below: 5pt, grid(
    columns: (1fr, auto),
    text(style: "italic", weight: "semibold", fill: accent, title),
    text(fill: muted, size: 9.5pt, period),
  ))
  #if items.len() > 0 { bullets(items) }
]

#let entry(name, title, location, period, items: ()) = {
  org(name, location, period: period)
  if title != none {
    block(above: 6pt, below: 5pt, text(style: "italic", weight: "semibold", fill: accent, title))
  }
  if items.len() > 0 { bullets(items) }
}

// ── Header ─────────────────────────────────────────────
#align(left)[
  #text(font: "Source Serif 4", size: 26pt, weight: "semibold", fill: accent)[Philipp Michel]
  #v(-14pt)
  #text(size: 11.5pt, weight: "semibold")[SVP of Autonomy & AI, Motional]
  #v(-6pt)
  #text(size: 9.5pt, fill: muted)[
    Seattle, WA #h(4pt)·#h(4pt)
    #link("mailto:pmichel@gmail.com")[pmichel\@gmail.com] #h(4pt)·#h(4pt)
    #link("https://www.linkedin.com/in/phlip")[LinkedIn] #h(4pt)·#h(4pt)
    #link("https://scholar.google.com/citations?user=0PUtrrgAAAAJ")[Google Scholar] #h(4pt)·#h(4pt)
    #link("https://philmichel.com")[philmichel.com]
  ]
]
#v(2pt)
#line(length: 100%, stroke: 1.2pt + accent)

// ── Profile ────────────────────────────────────────────
#section("Profile")
Technology executive leading machine learning at scale in the physical world. Leads the science, engineering, and strategic direction behind Motional's autonomous driving technology. Previously held senior AI and autonomy leadership roles at Cruise / GM, Amazon, Toyota, and Google / X. Scaled Amazon's autonomous delivery to tens of thousands of packages and built Toyota Research Institute's machine learning team from scratch. Former Vice President and Head of Asia Quantitative Volatility Trading at Goldman Sachs in Tokyo. Ph.D. / M.S. in Robotics, Carnegie Mellon; M.A. / B.A. in Computer Science, Cambridge.

#v(3pt)
#text(size: 9.5pt, fill: muted)[*Expertise:* #h(3pt) AI & ML · Data & Infrastructure · Autonomy · Robotics · Product & Strategy · Derivatives Trading]

// ── Experience ─────────────────────────────────────────
#section("Experience", tight: true)

#entry("Motional", "SVP of Autonomy & AI", "Seattle, WA", "2026 – present", items: (
  [Lead the science, engineering, and strategic direction behind Motional's autonomous driving technology, across ML, autonomy, data, and infrastructure],
))

#org("Cruise / General Motors", "Seattle, WA", period: "2023 – 2026")
#role("Distinguished Engineer (General Motors)", "2025 – 2026", items: (
  [Drove technical strategy across Embodied AI],
))
#role("Principal AI / ML Engineer · Principal Applied Scientist", "2024 – 2025", items: (
  [Drove technical strategy across Simulation, Data, and Testing],
))
#role("Technical Advisor to the CTO / SVP of AI", "2023 – 2024", items: (
  [Shaped AI / ML technical strategy, identified key investment areas, drove execution],
))

#org("Amazon", "Seattle, WA", period: "2019 – 2023")
#role("Head of Perception & Planning", "2020 – 2023", items: (
  [Led autonomy science / engineering teams across perception and planning],
  [Scaled autonomous delivery to tens of thousands of packages across four US states],
))
#role("Principal Product Manager – Technical", "2019 – 2020", items: (
  [Amazon Scout: Amazon's robotic last-mile delivery solution],
  [Managed autonomy technology roadmap & execution],
  [Led autonomy product / program management teams],
))

#entry("Toyota Motor Corporation", "Global AI Strategy Advisor", "Worldwide", "2017 – 2019", items: (
  [Strategic / technical advisor to TMC's global artificial intelligence initiatives],
  [Coordinated investment and research / commercial partnerships],
  [Technical leadership for TMC's AI efforts in Japan],
))

#entry("Toyota Research Institute", "Senior Manager, Machine Intelligence", "Palo Alto, CA", "2016 – 2017", items: (
  [Devised and executed TRI's machine learning strategy],
  [Built world-class ML team from scratch],
  [Led ML algorithms, infrastructure, model / data management and on-platform deployment efforts],
  [Focused on perception for autonomous vehicles and robotics],
  [Led business development, investment evaluation, and research partnerships],
))

#entry("Google, Inc. / Alphabet, Inc.", "Senior Roboticist / Software Engineer", "Mountain View, CA", "2015 – 2016", items: (
  [Advanced perception / computer vision deployed on multiple confidential robotic platforms],
  [Object detection & real-time tracking (monocular and depth-based) for manipulation and navigation (wheeled and legged)],
  [High frame-rate localization / pose estimation],
))

#entry("Goldman Sachs Japan, Co. Ltd.", "Vice President, Equity Derivatives Trading", "Tokyo, Japan", "2008 – 2015", items: (
  [Head, Asia Quantitative Volatility Trading. Low latency, high Sharpe ratio algorithmic options trading in Japan, Korea, and India (#box[2013 – 2014])],
  [Traded the firm's index derivatives book in Japan (Nikkei, TOPIX, etc.). Consistently high yearly P&L (#box[2008 – 2013])],
  [Specialized in pricing / hedging / market making volatility and delta-one products including options, light exotics, var / vol swaps, div swaps, forwards, rolls, etc.],
  [Actively traded cross-country positions in S&P, Euro Stoxx and Asian underlying assets],
  [Trading lead for several automation projects in pricing, market making, systematic trading / hedging],
))

#block(above: 15pt, below: 8pt, sticky: true, text(weight: "bold", size: 10.5pt)[Earlier Experience])
#set par(leading: 0.5em)
#grid(
  columns: (1fr, auto),
  row-gutter: 7pt,
  [*UBS*, Summer Associate, Equities Trading #h(4pt) #text(fill: muted, size: 9.5pt)[Stamford, CT / New York, NY]], text(fill: muted, size: 9.5pt)[2007],
  [*Wolfram Research*, Developer, Special Projects Office #h(4pt) #text(fill: muted, size: 9.5pt)[Waltham, MA]], text(fill: muted, size: 9.5pt)[2004],
  [*Goldman Sachs International*, Summer Analyst #h(4pt) #text(fill: muted, size: 9.5pt)[London, UK]], text(fill: muted, size: 9.5pt)[2002],
)

// ── Academic & Advisory ────────────────────────────────
#section("Academic & Advisory Appointments", tight: true)

#entry("The University of Tokyo", "Project Assistant Professor", "Tokyo, Japan", "2018 – 2024", items: (
  [Appointed to Next Generation Artificial Intelligence Research Center; jointly appointed to Department of Mechano-Informatics],
  [Artificial intelligence and robotics research and advisory],
))

#entry("The Partnership on AI", "Committee Member", "San Francisco, CA", "2018 – 2019", items: (
  [Representing The University of Tokyo],
  [Member of the committees on Safety-Critical AI and on Collaborations between People and AI Systems],
))

#entry("AIST Digital Human Research Center", "Visiting Researcher, Humanoid Robotics", "Tokyo, Japan", "2005 – 2008", items: (
  [Postdoctoral Fellow (2008) and Summer Fellow (2005), Japan Society for the Promotion of Science],
))

// ── Education ──────────────────────────────────────────
#section("Education", tight: true)

#entry("Carnegie Mellon University", "Ph.D. & M.S., Robotics", "Pittsburgh, PA", "2004 – 2008", items: (
  [Robotics Institute, School of Computer Science · Summa cum laude (GPA 4.00)],
  [Research: Humanoid Robotics, Computer Vision · 15+ peer-reviewed publications],
))

#entry("Yale University", "Postgraduate Fellow (Robotics)", "New Haven, CT", "2003 – 2004")

#entry("University of Cambridge", "M.A. & B.A. (Hons), Computer Science", "Cambridge, UK", "2000 – 2003", items: (
  [Triple First Class Honours (summa cum laude)],
))

// ── Honors & Additional ────────────────────────────────
#section("Honors")
#bullets((
  [Nvidia Fellowship (#box[2006 – 2007])],
  [Triple Scholar of Churchill College Cambridge for outstanding academic performance],
  [Fellow of Cambridge University European Trust],
  [Scholar of the German National Merit Foundation (top 0.2% of students)],
  [Cambridge University prize for outstanding undergraduate dissertation],
))

#section("Additional")
#set text(size: 9.5pt)
#grid(
  columns: (auto, 1fr),
  column-gutter: 10pt,
  row-gutter: 5pt,
  text(weight: "semibold")[Languages], [German (native) · English (native-level) · Spanish (native-level) · Japanese (intermediate) · Greek (conversational)],
  text(weight: "semibold")[Athletics], [CrossFit Level 1 Trainer · Competitive rowing & water polo at Cambridge University · Nationally competitive high school swimming in Costa Rica],
)
