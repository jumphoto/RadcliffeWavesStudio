<script setup lang="ts">
import SectionArtists from '~/components/sections/SectionArtists.vue'
import SectionBrandStory from '~/components/sections/SectionBrandStory.vue'
import SectionContact from '~/components/sections/SectionContact.vue'
import SectionHero from '~/components/sections/SectionHero.vue'
import SectionServices from '~/components/sections/SectionServices.vue'
</script>

<template>
  <div>
    <SectionHero />
    <SectionBrandStory />
    <SectionArtists />
    <SectionServices />
    <SectionContact />
  </div>
</template>
