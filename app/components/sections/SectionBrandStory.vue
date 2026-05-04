<script setup lang="ts">
const { studioBrand } = useStudioContent()
</script>

<template>
  <section
    id="story"
    class="scroll-mt-24 border-y border-white/5 bg-elevated/20"
  >
    <UContainer class="py-16 sm:py-20">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <StudioSectionHeading
          eyebrow="Why we exist"
          title="A gallery that moves like water"
          :description="studioBrand.mission"
        />
        <UCard
          variant="subtle"
          :ui="{ root: 'ring-1 ring-white/10 bg-linear-to-br from-teal-500/10 via-fuchsia-500/10 to-indigo-500/10 p-6 sm:p-8' }"
        >
          <div class="flex items-start gap-4">
            <UIcon
              name="i-lucide-waves"
              class="mt-1 size-8 shrink-0 text-primary"
            />
            <div class="space-y-3 text-muted leading-relaxed">
              <p>
                The koi in our identity stands for perseverance through currents — the quiet discipline of showing up in the studio. The aurora is the moment the work catches light: color that feels impossible until you see it.
              </p>
              <p>
                We sell originals and editions from our founder and a small circle of represented artists, and we build the digital infrastructure so their stories travel as far as the work itself.
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
