<script setup lang="ts">
defineOptions({ inheritAttrs: false })

defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div
    class="max-w-3xl"
    v-bind="$attrs"
  >
    <p
      v-if="eyebrow"
      class="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-primary"
    >
      {{ eyebrow }}
    </p>
    <h2 class="font-display text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-4 text-base text-muted leading-relaxed"
    >
      {{ description }}
    </p>
  </div>
</template>
