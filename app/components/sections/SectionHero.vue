<script setup lang="ts">
const { studioBrand } = useStudioContent()
</script>

<template>
  <section
    id="hero"
    class="relative scroll-mt-24"
  >
    <UContainer class="py-16 sm:py-24 lg:py-28">
      <div class="max-w-3xl">
        <p class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-elevated/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span
            class="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--ui-color-primary-400)]"
            aria-hidden="true"
          />
          Gallery & creative studio
        </p>
        <h1 class="font-display text-4xl font-semibold tracking-tight text-highlighted sm:text-5xl lg:text-6xl">
          {{ studioBrand.name }}
        </h1>
        <p class="mt-6 text-lg text-muted leading-relaxed sm:text-xl">
          {{ studioBrand.shortTagline }}
        </p>
        <div class="mt-10 flex flex-wrap gap-3">
          <UButton
            to="/#artists"
            size="xl"
            icon="i-lucide-sparkles"
          >
            Meet the artists
          </UButton>
          <UButton
            to="/#contact"
            size="xl"
            color="neutral"
            variant="outline"
            icon="i-lucide-mail"
          >
            Commission & requests
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
