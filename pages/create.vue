<template>
  <section class="max-w-2xl mx-auto py-16 space-y-10">
    <CreateHeader />

    <CreateForm />

    <NuxtLink
      to="/"
      class="inline-block mt-8 text-sm text-primary hover:underline"
    >
      ← Повернутись до списку постів
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "post",
});
</script>
