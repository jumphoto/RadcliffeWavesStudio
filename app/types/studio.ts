export type ArtistRole = 'founder' | 'represented'

export interface Artist {
  id: string
  name: string
  role: ArtistRole
  tagline: string
  bio: string
  portraitSrc: string
  accent?: string
}

export interface Artwork {
  id: string
  title: string
  medium: string
  year: string
  artistId: string
  imageSrc: string
  alt: string
}

export interface ServiceOffering {
  id: string
  title: string
  description: string
  icon: string
}

export interface NavItem {
  label: string
  hash: string
}
