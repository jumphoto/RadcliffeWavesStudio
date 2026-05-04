<script setup lang="ts">
const { navItems } = useStudioContent()
</script>

<template>
  <UHeader
    class="border-b border-white/5 bg-default/70 backdrop-blur-xl"
    :ui="{ center: 'hidden lg:flex' }"
  >
    <template #left>
      <StudioLogo />
    </template>

    <nav
      class="hidden items-center gap-1 lg:flex"
      aria-label="Primary"
    >
      <UButton
        v-for="item in navItems"
        :key="item.hash"
        :to="`/${item.hash}`"
        variant="ghost"
        color="neutral"
        size="sm"
        class="text-muted hover:text-highlighted"
      >
        {{ item.label }}
      </UButton>
    </nav>

    <template #right>
      <UColorModeButton />
      <UButton
        to="/#contact"
        color="primary"
        size="sm"
        class="hidden sm:inline-flex"
      >
        Request a piece
      </UButton>
    </template>

    <template #body>
      <nav
        class="flex flex-col gap-1 p-4"
        aria-label="Mobile primary"
      >
        <UButton
          v-for="item in navItems"
          :key="item.hash"
          :to="`/${item.hash}`"
          variant="ghost"
          color="neutral"
          block
          class="justify-start"
        >
          {{ item.label }}
        </UButton>
        <UButton
          to="/#contact"
          color="primary"
          block
          class="mt-2"
        >
          Request a piece
        </UButton>
      </nav>
    </template>
  </UHeader>
</template>
