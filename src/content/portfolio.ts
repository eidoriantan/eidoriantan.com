export type Project = {
  index: string
  title: string
  category: string
  description: string
  url: string
  repo?: string
  image?: string
  imageAlt?: string
  status?: string
  accent: string
  tags: string[]
}

export const portfolio = {
  name: 'Adriane Justine Tan',
  shortName: 'Adriane Tan',
  role: 'Full-stack software developer',
  email: 'me@eidoriantan.com',
  domain: 'eidoriantan.com',
  social: {
    github: 'https://github.com/eidoriantan',
    linkedin: 'https://www.linkedin.com/in/eidoriantan/',
    facebook: 'https://www.facebook.com/eidoriantan',
  },
  intro:
    'I build websites, apps, and AI tools for people who want to make something work better.',
  availability: 'Web · mobile · AI',
  services: [
    { number: '01', title: 'Web applications', description: 'Product-minded interfaces and dependable systems, from the first useful prototype to the production release.', tools: 'React / TypeScript / Node.js' },
    { number: '02', title: 'Mobile applications', description: 'Cross-platform experiences that feel at home on a phone, with the backend and release process to support them.', tools: 'Capacitor / JavaScript / APIs' },
    { number: '03', title: 'AI agents', description: 'Focused AI workflows that connect useful models to your data, tools, and the moments where decisions happen.', tools: 'Python / LLMs / Automation' },
  ],
  projects: [
    { index: '01', title: 'BRO Builder LLC', category: 'Construction platform', description: 'A technology-driven construction business experience spanning project work, estimating, service discovery, and client inquiries.', url: 'https://brobuilder.llc', image: '/projects/bro-builder.png', imageAlt: 'Screenshot of the BRO Builder LLC website', accent: '#ee6a48', tags: ['Business platform', 'Client experience'] },
    { index: '02', title: 'Music Library Tools', category: 'Desktop product', description: 'A focused toolkit that helps DJs fix missing tracks, remove duplicates, manage crates, and move Serato libraries with confidence.', url: 'https://musiclibrarytools.co.uk', image: '/projects/music-library-tools.png', imageAlt: 'Screenshot of the Music Library Tools website', accent: '#e6b84e', tags: ['Product design', 'Music tooling'] },
    { index: '03', title: 'RADION FM', category: 'Earlier work', description: 'A music streaming platform exploring genuine NFT music tracks with blockchain technology.', url: 'https://www.radion.fm', image: '/projects/radion-fm.png', imageAlt: 'Screenshot of the RADION FM website', status: 'Earlier work', accent: '#c995d8', tags: ['Streaming', 'Blockchain'] },
    { index: '04', title: "Mr Phil's Golf Getaways", category: 'Travel experience', description: 'A clear, human booking experience for small-group golf trips in the Philippines, from destination discovery to inquiry.', url: 'https://mrphilsgolfgetaways.com', image: '/projects/mr-phils-golf-getaways.png', imageAlt: "Screenshot of Mr Phil's Golf Getaways website", accent: '#8099ce', tags: ['Content strategy', 'Booking flow'] },
    { index: '05', title: 'mp3tag.js', category: 'Open-source library', description: 'A pure JavaScript library for editing audio metadata in Node.js and browsers, with a live editor that works offline.', url: 'https://mp3tag.js.org', repo: 'https://github.com/eidoriantan/mp3tag.js', accent: '#78b7a0', tags: ['JavaScript', 'Open source'] },
    { index: '06', title: 'YouTube Downloader', category: 'Earlier work', description: 'An open-source, mobile-friendly, ad-free YouTube video downloader and converter.', url: 'https://yt-downloader.eidoriantan.me/', repo: 'https://github.com/eidoriantan/youtube-downloader', status: 'Earlier work', accent: '#e87575', tags: ['Open source', 'JavaScript'] },
    { index: '07', title: 'Printu', category: 'Earlier work', description: 'A cloud-based printing service designed around QR-code transactions and a simpler printing experience.', url: 'https://printu.org', status: 'Earlier work', accent: '#d4a25e', tags: ['Cloud service', 'Startup'] },
    { index: '08', title: 'kanji.js', category: 'Earlier work', description: 'An open-source Node.js and browser library for searching and looking up Japanese kanji using the KANJIDIC dictionary.', url: 'https://kanji.js.org', repo: 'https://github.com/eidoriantan/kanji.js', status: 'Earlier work', accent: '#82b5d0', tags: ['JavaScript', 'Open source'] },
  ] satisfies Project[],
  skills: ['JavaScript', 'TypeScript', 'Python', 'React.js', 'Node.js', 'Express.js', 'PHP', 'Laravel', 'CodeIgniter', 'Flask', 'Django', 'MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Shopify', 'WordPress', 'Mobile development', 'AI agents', 'REST APIs', 'Cloud deployment'],
  achievements: [
    { year: '2025', title: 'ICpEP Most Outstanding Student Awardee', event: 'Class of 2025', detail: 'TUPV - Talisay City' },
    { year: '2025', title: 'Best Research in Artificial Intelligence and Machine Learning', event: 'Class of 2025', detail: 'TUPV - Talisay City' },
    { year: '2024', title: 'National Champion in C++ Category', event: 'National CpE Programming Challenge', detail: 'Manila City' },
    { year: '2024', title: 'Regional Champion in C++ Category', event: 'Regional CpE Programming Challenge', detail: 'Bacolod City' },
    { year: '2023', title: 'National Champion in C Category', event: 'National CpE Programming Challenge', detail: 'Laoag City' },
    { year: '2022', title: 'Regional Champion in C Category', event: 'Regional CpE Programming Challenge', detail: 'Bacolod City' },
  ],
} as const
