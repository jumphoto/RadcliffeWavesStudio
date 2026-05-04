<script setup lang="ts">
const { studioBrand, navItems } = useStudioContent()
const year = new Date().getFullYear()
</script>

<template>
  <UFooter class="border-t border-white/5 bg-elevated/30">
    <div class="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div class="space-y-2">
        <p class="font-display text-lg text-highlighted">
          {{ studioBrand.name }}
        </p>
        <p class="text-sm text-muted max-w-md leading-relaxed">
          {{ studioBrand.location }}
        </p>
      </div>
      <div class="flex flex-col gap-4 sm:items-end">
        <nav
          class="flex flex-wrap gap-x-4 gap-y-2 text-sm"
          aria-label="Footer"
        >
          <UButton
            v-for="item in navItems"
            :key="item.hash"
            :to="`/${item.hash}`"
            variant="link"
            color="neutral"
            size="xs"
            class="px-0 text-muted"
          >
            {{ item.label }}
          </UButton>
        </nav>
        <p class="text-xs text-dimmed">
          © {{ year }} {{ studioBrand.name }}
        </p>
      </div>
    </div>
  </UFooter>
</template>
