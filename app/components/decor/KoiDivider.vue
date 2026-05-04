<template>
  <div
    class="flex items-center justify-center gap-6 py-8 opacity-80"
    aria-hidden="true"
  >
    <svg
      class="koi-silhouette text-[var(--koi-coral)]"
      width="72"
      height="36"
      viewBox="0 0 72 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18c8-10 22-14 34-10 6 2 10 6 12 10-2 6-8 12-18 14-12 3-24-2-28-14z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle
        cx="22"
        cy="16"
        r="2.5"
        fill="var(--koi-ink)"
      />
      <path
        d="M38 10c6-2 14 0 20 4-4 8-14 14-26 16"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        opacity="0.5"
      />
    </svg>
    <div class="h-px flex-1 max-w-xs bg-linear-to-r from-transparent via-[var(--aurora-magenta)]/40 to-transparent" />
    <svg
      class="koi-silhouette -scale-x-100 text-[var(--koi-cream)]"
      width="72"
      height="36"
      viewBox="0 0 72 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 18c8-10 22-14 34-10 6 2 10 6 12 10-2 6-8 12-18 14-12 3-24-2-28-14z"
        fill="currentColor"
        opacity="0.75"
      />
      <circle
        cx="22"
        cy="16"
        r="2.5"
        fill="var(--koi-ink)"
      />
    </svg>
  </div>
</template>
