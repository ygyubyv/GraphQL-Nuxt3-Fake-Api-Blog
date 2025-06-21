<template>
  <ul class="list-disc list-inside mb-6 text-text/90 space-y-1">
    <MainFeature
      v-for="feature in features"
      :feature="feature"
      :key="feature"
    />
  </ul>
</template>

<script setup lang="ts">
const features = [
  "Отримання, створення, редагування та видалення постів",
  "Пагінація та пошук по заголовках",
  "Підтримка темної теми з кастомними стилями",
  "Використання TypeScript для надійності коду",
  "Інтуїтивний інтерфейс із Tailwind CSS",
];
</script>
