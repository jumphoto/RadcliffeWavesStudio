<script setup lang="ts">
import KoiDivider from '~/components/decor/KoiDivider.vue'
import SectionArtists from '~/components/sections/SectionArtists.vue'
import SectionBrandStory from '~/components/sections/SectionBrandStory.vue'
import SectionContact from '~/components/sections/SectionContact.vue'
import SectionGallery from '~/components/sections/SectionGallery.vue'
import SectionHero from '~/components/sections/SectionHero.vue'
import SectionServices from '~/components/sections/SectionServices.vue'
</script>

<template>
  <div>
    <SectionHero />
    <SectionBrandStory />
    <KoiDivider />
    <SectionArtists />
    <SectionGallery />
    <SectionServices />
    <SectionContact />
  </div>
</template>
