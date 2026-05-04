import { artists, navItems, services, studioBrand } from '~/data/studio-content'

export function useStudioContent() {
  const founder = computed(() => artists.find(a => a.role === 'founder'))
  const represented = computed(() => artists.filter(a => a.role === 'represented'))

  return {
    studioBrand,
    navItems,
    artists,
    represented,
    founder,
    services
  }
}
