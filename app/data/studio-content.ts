import type { Artist, NavItem, ServiceOffering } from '~/types/studio'

/** Central content module — swap copy and image URLs without touching layout code. */
export const studioBrand = {
  name: 'Aurora Koi Atelier',
  shortTagline: 'Northern lights. Koi currents. Curated art.',
  mission:
    'We are a boutique studio and gallery pairing luminous, narrative-driven work with practical support for artists who want their stories seen — online, in print, and in the room.',
  location: 'Anchored in the Western Cape · shipping worldwide'
} as const

export const navItems: NavItem[] = [
  { label: 'Story', hash: '#story' },
  { label: 'Artists', hash: '#artists' },
  { label: 'Services', hash: '#services' },
  { label: 'Contact', hash: '#contact' }
]

export const artists: Artist[] = [
  {
    id: 'mara-okada',
    name: 'Mara Okada',
    role: 'founder',
    tagline: 'Lead artist · mixed media & ink currents',
    bio: 'Mara founded Aurora Koi Atelier after a decade of mural and gallery work. Her pieces layer metallic inks, organic pigments, and digital light studies so every canvas feels like a tide pool touched by aurora. She leads curation, teaches studio sessions, and still paints the flagship wall works collectors ask for by name.',
    portraitSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80',
    accent: 'from-teal-400/30 to-fuchsia-500/20'
  },
  {
    id: 'eli-navarro',
    name: 'Eli Navarro',
    role: 'represented',
    tagline: 'Ceramic light sculptures',
    bio: 'Eli fires translucent glazes over folded porcelain so lamplight reads like boreal ribbons. We represent their limited editions and coordinate commissions for hospitality spaces.',
    portraitSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=640&q=80',
    accent: 'from-cyan-400/25 to-violet-500/20'
  },
  {
    id: 'jun-park',
    name: 'Jun Park',
    role: 'represented',
    tagline: 'Large-format digital tapestries',
    bio: 'Jun maps city grids and river deltas into saturated gradients that feel like stained glass for the screen age. We sell archival prints and manage timed drops.',
    portraitSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=640&q=80',
    accent: 'from-emerald-400/25 to-rose-500/20'
  },
  {
    id: 'soraya-bench',
    name: 'Soraya Bench',
    role: 'represented',
    tagline: 'Oil & cold wax abstractions',
    bio: 'Soraya builds depth with palette knife and wax until horizons dissolve into color weather. We host her solo previews and pair collectors with framing partners.',
    portraitSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=640&q=80',
    accent: 'from-amber-400/20 to-indigo-500/25'
  }
]

export const services: ServiceOffering[] = [
  {
    id: 'svc-web',
    title: 'Web design for artists',
    description:
      'Portfolio sites, lookbooks, and shop flows tuned for slow-looking — fast loads, accessible typography, and storytelling blocks that keep the work center stage.',
    icon: 'i-lucide-layout-template'
  },
  {
    id: 'svc-brand',
    title: 'Art branding & narrative',
    description:
      'Naming, palette systems, press kits, and exhibition graphics so your studio reads as intentional, not improvised.',
    icon: 'i-lucide-palette'
  },
  {
    id: 'svc-marketing',
    title: 'Marketing & launches',
    description:
      'Email sequences, preview events, and social capsules for drops — always aligned with the pace of your practice, not generic growth hacks.',
    icon: 'i-lucide-megaphone'
  },
  {
    id: 'svc-sales',
    title: 'Selling & placement',
    description:
      'Editioning advice, consignment contracts, fair applications, and collector outreach with transparent splits.',
    icon: 'i-lucide-store'
  }
]
