export type MilestoneState = 'complete' | 'active' | 'upcoming'

export interface ProjectRecord {
  slug: string
  title: string
  discipline: string
  summary: string
  status: string
  accent: string
  progress: number
  updatedAt: string
  nextReview: string
  team: Array<{ name: string; initials: string }>
  milestones: Array<{ label: string; state: MilestoneState }>
}

export const projects: ProjectRecord[] = [
  {
    slug: 'orbit-payments',
    title: 'Orbit payments',
    discipline: 'Product design',
    summary: 'A calmer checkout for teams moving money across borders.',
    status: 'In review',
    accent: 'oklch(0.705 0.145 28)',
    progress: 74,
    updatedAt: 'Today, 09:42',
    nextReview: 'Thursday, 14:00',
    team: [
      { name: 'Mina Okafor', initials: 'MO' },
      { name: 'Eli Chen', initials: 'EC' },
      { name: 'Noah King', initials: 'NK' },
    ],
    milestones: [
      { label: 'Payment architecture', state: 'complete' },
      { label: 'Interactive prototype', state: 'active' },
      { label: 'Merchant pilot', state: 'upcoming' },
    ],
  },
  {
    slug: 'luma-archive',
    title: 'Luma archive',
    discipline: 'Brand system',
    summary: 'An editorial home for a century of independent photography.',
    status: 'On track',
    accent: 'oklch(0.73 0.12 205)',
    progress: 58,
    updatedAt: 'Yesterday, 16:18',
    nextReview: 'Friday, 10:30',
    team: [
      { name: 'Rhea Bell', initials: 'RB' },
      { name: 'Theo Marin', initials: 'TM' },
      { name: 'Anika Shah', initials: 'AS' },
    ],
    milestones: [
      { label: 'Archive taxonomy', state: 'complete' },
      { label: 'Collection templates', state: 'active' },
      { label: 'Rights workflow', state: 'upcoming' },
    ],
  },
  {
    slug: 'field-notes',
    title: 'Field notes',
    discipline: 'Mobile product',
    summary: 'A fast, offline notebook for researchers working outdoors.',
    status: 'In build',
    accent: 'oklch(0.69 0.13 145)',
    progress: 81,
    updatedAt: 'Monday, 11:06',
    nextReview: 'Wednesday, 15:15',
    team: [
      { name: 'Sara Dunn', initials: 'SD' },
      { name: 'Ivo Costa', initials: 'IC' },
      { name: 'June Park', initials: 'JP' },
    ],
    milestones: [
      { label: 'Offline data model', state: 'complete' },
      { label: 'Field test build', state: 'active' },
      { label: 'Store submission', state: 'upcoming' },
    ],
  },
  {
    slug: 'mono-radio',
    title: 'Mono radio',
    discipline: 'Digital identity',
    summary: 'A tactile listening room for an independent radio collective.',
    status: 'Exploring',
    accent: 'oklch(0.665 0.155 292)',
    progress: 36,
    updatedAt: 'Friday, 13:27',
    nextReview: 'Tuesday, 11:00',
    team: [
      { name: 'Owen Lee', initials: 'OL' },
      { name: 'Aya Flores', initials: 'AF' },
      { name: 'Luis Vega', initials: 'LV' },
    ],
    milestones: [
      { label: 'Sonic principles', state: 'complete' },
      { label: 'Player directions', state: 'active' },
      { label: 'Broadcast schedule', state: 'upcoming' },
    ],
  },
  {
    slug: 'common-ground',
    title: 'Common ground',
    discipline: 'Service design',
    summary: 'A neighborhood platform that turns empty rooms into shared places.',
    status: 'On track',
    accent: 'oklch(0.76 0.13 82)',
    progress: 67,
    updatedAt: 'Thursday, 17:04',
    nextReview: 'Monday, 09:30',
    team: [
      { name: 'Leah Stein', initials: 'LS' },
      { name: 'Kofi Mensah', initials: 'KM' },
      { name: 'Mae Ito', initials: 'MI' },
    ],
    milestones: [
      { label: 'Host interviews', state: 'complete' },
      { label: 'Booking prototype', state: 'active' },
      { label: 'Neighborhood launch', state: 'upcoming' },
    ],
  },
  {
    slug: 'alba-health',
    title: 'Alba health',
    discipline: 'Product strategy',
    summary: 'A compassionate care plan for people managing long recoveries.',
    status: 'Research',
    accent: 'oklch(0.72 0.115 350)',
    progress: 43,
    updatedAt: 'Wednesday, 10:51',
    nextReview: 'Thursday, 16:45',
    team: [
      { name: 'Nia Howard', initials: 'NH' },
      { name: 'Samir Rao', initials: 'SR' },
      { name: 'Faye Lin', initials: 'FL' },
    ],
    milestones: [
      { label: 'Caregiver interviews', state: 'complete' },
      { label: 'Journey synthesis', state: 'active' },
      { label: 'Concept validation', state: 'upcoming' },
    ],
  },
]

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
