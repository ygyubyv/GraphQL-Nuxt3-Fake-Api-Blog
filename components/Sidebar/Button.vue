<template>
  <button
    @click="emit('toggleMenu')"
    class="fixed top-6 right-6 z-50 md:hidden bg-primary text-text p-2 rounded-md shadow-md"
    aria-label="Toggle menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "toggleMenu"): void;
}>();
</script>
