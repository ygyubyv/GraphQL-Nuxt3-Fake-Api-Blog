<template>
  <div class="flex flex-wrap gap-4 text-text/90 mb-6">
    <MainTechnology
      v-for="technology in technologies"
      :technology="technology"
      :key="technology"
    />
  </div>
</template>

<script setup lang="ts">
const technologies = [
  "Nuxt 3",
  "TypeScript",
  "GraphQL",
  "Tailwind CSS",
  "Toast Notification",
];
</script>
