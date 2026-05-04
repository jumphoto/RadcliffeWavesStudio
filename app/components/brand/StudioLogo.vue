<template>
  <NuxtLink
    to="/"
    class="group flex items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    aria-label="Aurora Koi Atelier home"
  >
    <span
      class="relative flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-teal-400/30 via-fuchsia-500/25 to-indigo-500/35 ring-1 ring-white/10"
    >
      <svg
        class="h-5 w-5 text-[var(--koi-cream)]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 12c3-5 9-8 14-6 2 1 4 3 5 6-1 3-4 6-8 7-5 1-9-2-11-7z"
          fill="currentColor"
          opacity="0.95"
        />
        <circle
          cx="10"
          cy="11"
          r="1.2"
          fill="var(--koi-ink)"
        />
      </svg>
    </span>
    <span class="flex flex-col leading-tight">
      <span class="font-display text-lg tracking-tight text-highlighted group-hover:text-primary transition-colors">
        Aurora Koi
      </span>
      <span class="text-[10px] uppercase tracking-[0.2em] text-dimmed">
        Atelier
      </span>
    </span>
  </NuxtLink>
</template>
