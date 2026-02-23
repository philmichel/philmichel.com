export interface CVSubrole {
  period: string
  role: string
  bullets?: string[]
}

export interface CVEntry {
  period: string
  role?: string
  organization: string
  location: string
  bullets?: string[]
  subroles?: CVSubrole[]
}

export interface CVSidebarEntry {
  period: string
  organization: string
  degree: string
  location: string
  bullets?: string[]
}

export const cvData = {
  name: 'Philipp Michel',
  tagline: 'AI & ML · Autonomy · Robotics · Product & Strategy · Derivatives Trading',

  contact: {
    github: 'https://github.com/philmichel',
    linkedin: 'https://www.linkedin.com/in/phlip',
    scholar: 'https://scholar.google.com/citations?user=0PUtrrgAAAAJ',
    mastodon: 'https://fediserve.social/@phil',
    bluesky: 'https://bsky.app/profile/pmichel.social',
  },

  experience: [
    {
      period: '2026–present',
      role: 'SVP of Autonomy & AI',
      organization: 'Motional',
      location: 'Seattle, WA',
    },
    {
      period: '2023–2026',
      organization: 'Cruise / GM',
      location: 'Seattle, WA',
      subroles: [
        {
          period: '2025–2026',
          role: 'Distinguished Engineer (General Motors)',
          bullets: [
            'Defined technical vision and direction across Embodied AI',
          ],
        },
        {
          period: '2024–2025',
          role: 'Principal ML/AI Engineer · Principal Applied Scientist',
          bullets: [
            'Led technical strategy, roadmap, and delivery across Simulation, Data, and Testing',
          ],
        },
        {
          period: '2023–2024',
          role: 'Technical Advisor to the CTO / SVP of AI',
          bullets: [
            'Shaped AI & ML technical strategy and identified key investment areas',
          ],
        },
      ],
    },
    {
      period: '2019–2023',
      organization: 'Amazon',
      location: 'Seattle, WA',
      subroles: [
        {
          period: '2020–2023',
          role: 'Head of Perception & Planning',
          bullets: [
            'Led autonomy science/engineering teams across perception and planning',
            'Scaled autonomous delivery to tens of thousands of packages across four US states'
          ],
        },
        {
          period: '2019–2020',
          role: 'Principal Product Manager – Technical',
          bullets: [
            "Amazon Scout — Amazon's robotic last-mile delivery solution",
            'Managed autonomy technology roadmap & execution',
            'Led autonomy product/program management teams',
          ],
        },
      ],
    },
    {
      period: '2018–2024',
      role: 'Project Assistant Professor',
      organization: 'The University of Tokyo',
      location: 'Tokyo, Japan',
      bullets: [
        'Appointed to Next Generation Artificial Intelligence Research Center',
        'Jointly appointed to Department of Mechano-Informatics',
        'Artificial intelligence and robotics research and advisory',
      ],
    },
    {
      period: '2018–2019',
      role: 'Committee Member',
      organization: 'The Partnership on AI',
      location: 'San Francisco, CA',
      bullets: [
        'Representing The University of Tokyo',
        'Member of the committees on Safety-Critical AI and on Collaborations between People and AI Systems',
      ],
    },
    {
      period: '2017–2019',
      role: 'Global AI Strategy Advisor',
      organization: 'Toyota Motor Corporation',
      location: 'Worldwide',
      bullets: [
        "Strategic / technical advisor to TMC's global artificial intelligence initiatives",
        'Coordinated investment and research / commercial partnerships',
        "Technical leadership for TMC's AI efforts in Japan",
      ],
    },
    {
      period: '2016–2017',
      role: 'Senior Manager, Machine Intelligence',
      organization: 'Toyota Research Institute',
      location: 'Palo Alto, CA',
      bullets: [
        "Devised and executed TRI's machine learning strategy",
        'Built world-class ML team from scratch',
        'Led ML algorithms, infrastructure, model/data management and on-platform deployment efforts',
        'Focused on perception for autonomous vehicles and robotics',
        'Led business development, investment evaluation, and research partnerships',
      ],
    },
    {
      period: '2015–2016',
      role: 'Senior Roboticist / Software Engineer',
      organization: 'Google, Inc. / Alphabet, Inc.',
      location: 'Mountain View, CA',
      bullets: [
        'Advanced perception / computer vision deployed on multiple confidential robotic platforms',
        'Object detection & real-time tracking (monocular and depth-based) for manipulation and navigation (wheeled and legged)',
        'High frame-rate localization / pose estimation',
      ],
    },
    {
      period: '2008–2015',
      role: 'Vice President, Equity Derivatives Trading',
      organization: 'Goldman Sachs Japan, Co. Ltd.',
      location: 'Tokyo, Japan',
      bullets: [
        'Head, Asia Quantitative Volatility Trading. Low latency, high Sharpe ratio algorithmic options trading in Japan, Korea, and India (2013–2014)',
        "Traded the firm's index derivatives book in Japan (Nikkei, TOPIX, etc.). Consistently high yearly P&L (2008–2013)",
        'Specialized in pricing / hedging / market making volatility and delta-one products including options, light exotics, var/vol swaps, div swaps, forwards, rolls, etc.',
        'Actively traded cross-country positions in S&P, Euro Stoxx and Asian underlying assets',
        'Trading lead for several automation projects in pricing, market making, systematic trading / hedging',
      ],
    },
    {
      period: '2007',
      role: 'Summer Associate, Equities Trading',
      organization: 'UBS',
      location: 'Stamford, CT / New York, NY',
      bullets: [
        'Rotations: Quantitative strategies. Electronic volatility trading. Derivatives trading.',
        'Offer for permanent employment',
      ],
    },
    {
      period: '2004',
      role: 'Developer, Special Projects Office',
      organization: 'Wolfram Research International',
      location: 'Waltham, MA',
      bullets: ['Wrote and optimized computer vision / image processing algorithms for Mathematica'],
    },
    {
      period: '2002',
      role: 'Summer Analyst',
      organization: 'Goldman Sachs International',
      location: 'London, UK',
      bullets: [
        'Redesigned the equity trading Unix front-end for all European offices',
        'Offer for permanent employment',
      ],
    },
  ] satisfies CVEntry[],

  education: [
    {
      period: '2004–2008',
      degree: 'Ph.D. & M.S. Robotics',
      organization: 'Carnegie Mellon University',
      location: 'Pittsburgh, PA',
      bullets: [
        'Summa cum laude (GPA: 4.00)',
        'Robotics Institute, School of Computer Science',
        'Research: Humanoid Robotics, Computer Vision',
        '15+ peer-reviewed publications — full list on Google Scholar',
      ],
    },
    {
      period: '2003–2004',
      degree: 'Postgraduate Fellow (Robotics)',
      organization: 'Yale University',
      location: 'New Haven, CT',
    },
    {
      period: '2000–2003',
      degree: 'M.A. & B.A. (Hons), Computer Science',
      organization: 'Cambridge University',
      location: 'Cambridge, UK',
      bullets: ['Triple First Class Honours (summa cum laude)'],
    },
  ] satisfies CVSidebarEntry[],

  academic: [
    {
      period: '2005–2008',
      degree: 'Visiting Researcher, Humanoid Robotics',
      organization: 'AIST Digital Human Research Center',
      location: 'Tokyo, Japan',
      bullets: [
        'Postdoctoral Fellow (2008), Japan Society for the Promotion of Science',
        'Summer Fellow (2005), Japan Society for the Promotion of Science',
      ],
    },
  ] satisfies CVSidebarEntry[],

  honors: [
    'Nvidia Fellowship (2006–2007)',
    'Triple Scholar of Churchill College Cambridge for outstanding academic performance',
    'Fellow of Cambridge University European Trust',
    'Scholar of the German National Merit Foundation (top 0.2% of students)',
    'Cambridge University prize for outstanding undergraduate dissertation',
  ],

  languages: ['German (native)', 'English (native-level)', 'Spanish (native-level)', 'Japanese (intermediate)', 'Greek (conversational)'],

  athletics: [
    'CrossFit Level 1 Trainer',
    'Competitive rowing & water polo at Cambridge University',
    'Nationally competitive high school swimming in Costa Rica',
  ],
}
