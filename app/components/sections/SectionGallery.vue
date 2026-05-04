<script setup lang="ts">
const { artworks, artistById } = useStudioContent()

const cards = computed(() =>
  artworks.map(art => ({
    art,
    artistName: artistById(art.artistId)?.name ?? 'Artist'
  }))
)
</script>

<template>
  <section
    id="gallery"
    class="scroll-mt-24 border-t border-white/5 bg-elevated/15 py-16 sm:py-20"
  >
    <UContainer>
      <StudioSectionHeading
        eyebrow="Collection"
        title="Work available through the atelier"
        description="Originals and editions from our founder and represented artists. Use the contact form to ask about availability, framing, or shipping."
        class="mb-12"
      />

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <StudioArtCard
          v-for="{ art, artistName } in cards"
          :key="art.id"
          :artwork="art"
          :artist-name="artistName"
        />
      </div>
    </UContainer>
  </section>
</template>
