<template>
  <button
    type="submit"
    class="px-6 py-2 rounded-md bg-primary text-black font-semibold hover:bg-primary/80 transition"
    :disabled="loading"
  >
    Створити пост
  </button>
</template>

<script setup lang="ts">
interface Props {
  loading: boolean;
}

const props = defineProps<Props>();
</script>
