<script setup lang="ts">
const { founder, represented } = useStudioContent()
</script>

<template>
  <section
    id="artists"
    class="scroll-mt-24 py-16 sm:py-20"
  >
    <UContainer>
      <StudioSectionHeading
        eyebrow="People"
        title="Lead artist & represented makers"
        description="Mara anchors the atelier. We also curate and sell work from independent artists whose practice complements our palette and ethos."
        class="mb-12"
      />

      <div
        v-if="founder"
        class="mb-14 grid gap-8 lg:grid-cols-12 lg:gap-10"
      >
        <div class="lg:col-span-5">
          <div
            class="relative overflow-hidden rounded-2xl ring-1 ring-white/10"
            :class="founder.accent"
          >
            <img
              :src="founder.portraitSrc"
              :alt="`Portrait of ${founder.name}`"
              width="640"
              height="800"
              class="aspect-[4/5] w-full object-cover mix-blend-luminosity"
              loading="lazy"
            >
            <div
              class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
            />
            <div class="absolute bottom-0 left-0 p-6">
              <UBadge
                color="primary"
                variant="subtle"
                class="mb-2"
              >
                Founder & lead artist
              </UBadge>
              <h3 class="font-display text-2xl text-white">
                {{ founder.name }}
              </h3>
              <p class="text-sm text-white/80">
                {{ founder.tagline }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center lg:col-span-7">
          <h3 class="font-display text-2xl text-highlighted sm:text-3xl">
            {{ founder.name }}
          </h3>
          <p class="mt-2 text-primary font-medium">
            {{ founder.tagline }}
          </p>
          <p class="mt-6 text-muted leading-relaxed text-base">
            {{ founder.bio }}
          </p>
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="artist in represented"
          :key="artist.id"
          variant="subtle"
          :ui="{ root: `overflow-hidden ring-1 ring-white/10 ${artist.accent ?? ''}` }"
        >
          <div class="flex gap-4">
            <img
              :src="artist.portraitSrc"
              :alt="`Portrait of ${artist.name}`"
              width="120"
              height="120"
              class="size-24 shrink-0 rounded-xl object-cover ring-1 ring-white/10"
              loading="lazy"
            >
            <div>
              <UBadge
                size="xs"
                color="neutral"
                variant="outline"
                class="mb-2"
              >
                Represented
              </UBadge>
              <h4 class="font-display text-lg text-highlighted">
                {{ artist.name }}
              </h4>
              <p class="text-sm text-primary">
                {{ artist.tagline }}
              </p>
              <p class="mt-2 text-sm text-muted leading-relaxed line-clamp-4">
                {{ artist.bio }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
