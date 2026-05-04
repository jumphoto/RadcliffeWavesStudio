import {
  artists,
  artworks,
  navItems,
  services,
  studioBrand
} from '~/data/studio-content'
import type { Artist, Artwork } from '~/types/studio'

export function useStudioContent() {
  const founder = computed(() => artists.find(a => a.role === 'founder'))
  const represented = computed(() => artists.filter(a => a.role === 'represented'))

  function artworksForArtist(artistId: string): Artwork[] {
    return artworks.filter(w => w.artistId === artistId)
  }

  function artistById(id: string): Artist | undefined {
    return artists.find(a => a.id === id)
  }

  return {
    studioBrand,
    navItems,
    artists,
    represented,
    founder,
    artworks,
    services,
    artworksForArtist,
    artistById
  }
}
