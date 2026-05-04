<script setup lang="ts">
const toast = useToast()

const interestItems = [
  { label: 'Request a specific piece', value: 'piece' },
  { label: 'Commission inquiry', value: 'commission' },
  { label: 'Web design / portfolio', value: 'web' },
  { label: 'Branding & narrative', value: 'brand' },
  { label: 'Marketing / launch help', value: 'marketing' },
  { label: 'Selling & placement', value: 'sales' },
  { label: 'General question', value: 'general' }
]

const state = reactive({
  name: '',
  email: '',
  interest: undefined as string | undefined,
  message: ''
})

function onSubmit() {
  toast.add({
    title: 'Thank you',
    description:
      'Your note is in our inbox. We reply within two business days — sooner when a drop is live.',
    color: 'success',
    icon: 'i-lucide-check'
  })
  state.name = ''
  state.email = ''
  state.interest = undefined
  state.message = ''
}
</script>

<template>
  <section
    id="contact"
    class="scroll-mt-24 border-t border-white/5 bg-elevated/25 py-16 sm:py-20"
  >
    <UContainer>
      <div class="grid gap-12 lg:grid-cols-2">
        <StudioSectionHeading
          eyebrow="Contact"
          title="Tell us what you are looking for"
          description="Pieces, commissions, or studio services — include timelines and budget if you can. We read every message ourselves."
        />

        <UCard
          variant="subtle"
          :ui="{ root: 'ring-1 ring-white/10 p-6 sm:p-8' }"
        >
          <UForm
            :state="state"
            class="space-y-5"
            @submit="onSubmit"
          >
            <UFormField
              label="Name"
              name="name"
              required
            >
              <UInput
                v-model="state.name"
                class="w-full"
                autocomplete="name"
                placeholder="Your name"
                size="lg"
              />
            </UFormField>

            <UFormField
              label="Email"
              name="email"
              required
            >
              <UInput
                v-model="state.email"
                class="w-full"
                type="email"
                autocomplete="email"
                placeholder="you@example.com"
                size="lg"
              />
            </UFormField>

            <UFormField
              label="Topic"
              name="interest"
            >
              <USelect
                v-model="state.interest"
                class="w-full"
                :items="interestItems"
                value-key="value"
                label-key="label"
                placeholder="Choose a topic"
                size="lg"
              />
            </UFormField>

            <UFormField
              label="Message"
              name="message"
              required
            >
              <UTextarea
                v-model="state.message"
                class="w-full"
                autoresize
                :rows="5"
                placeholder="Tell us about the work, timeline, or links to your portfolio."
                size="lg"
              />
            </UFormField>

            <UButton
              type="submit"
              block
              size="lg"
              icon="i-lucide-send"
            >
              Send message
            </UButton>
            <p class="text-xs text-dimmed">
              Submissions show a confirmation toast for now. Hook this form to your email provider or an API route when you deploy.
            </p>
          </UForm>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
