<script setup lang="ts">
const { services } = useStudioContent()
</script>

<template>
  <section
    id="services"
    class="scroll-mt-24 py-16 sm:py-20"
  >
    <UContainer>
      <StudioSectionHeading
        eyebrow="Beyond the wall"
        title="External services for artists & studios"
        description="We help independent artists and small studios present and sell work with the same care we give our own walls — from first portfolio site to launch week."
        class="mb-12"
      />

      <div class="grid gap-4 sm:grid-cols-2">
        <UCard
          v-for="svc in services"
          :key="svc.id"
          variant="subtle"
          :ui="{ root: 'ring-1 ring-white/10 bg-elevated/30 p-6 transition hover:ring-primary/30' }"
        >
          <div class="flex gap-4">
            <span
              class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary"
            >
              <UIcon
                :name="svc.icon"
                class="size-5"
              />
            </span>
            <div>
              <h3 class="font-display text-lg text-highlighted">
                {{ svc.title }}
              </h3>
              <p class="mt-2 text-sm text-muted leading-relaxed">
                {{ svc.description }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
