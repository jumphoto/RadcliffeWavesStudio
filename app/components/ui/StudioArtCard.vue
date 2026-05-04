<script setup lang="ts">
import type { Artwork } from '~/types/studio'

const props = defineProps<{
  artwork: Artwork
  artistName: string
}>()

const detail = computed(() => `${props.artwork.medium} · ${props.artwork.year}`)
</script>

<template>
  <UCard
    :ui="{
      root: 'group studio-art-card ring-1 ring-white/5 bg-elevated/40 backdrop-blur-md overflow-hidden',
      body: 'p-0'
    }"
  >
    <div class="relative aspect-[4/5] overflow-hidden bg-default">
      <img
        :src="artwork.imageSrc"
        :alt="artwork.alt"
        width="900"
        height="1125"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        decoding="async"
      >
      <div
        class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-90"
      />
    </div>
    <div class="space-y-1 p-4">
      <p class="text-xs font-medium uppercase tracking-wider text-primary">
        {{ artistName }}
      </p>
      <h3 class="font-display text-lg text-highlighted">
        {{ artwork.title }}
      </h3>
      <p class="text-sm text-muted">
        {{ detail }}
      </p>
    </div>
  </UCard>
</template>
