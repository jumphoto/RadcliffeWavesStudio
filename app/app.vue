<script setup lang="ts">
import AuroraBackdrop from '~/components/decor/AuroraBackdrop.vue'
import AppStudioFooter from '~/components/layout/AppStudioFooter.vue'
import AppStudioHeader from '~/components/layout/AppStudioHeader.vue'

const { studioBrand } = useStudioContent()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = `${studioBrand.name} · Gallery & artist services`
const description = studioBrand.mission

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <AuroraBackdrop />
    <AppStudioHeader />

    <UMain class="relative min-h-[60vh]">
      <NuxtPage />
    </UMain>

    <AppStudioFooter />
  </UApp>
</template>
