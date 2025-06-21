<template>
  <span class="bg-primary/20 rounded px-3 py-1 font-medium">{{
    technology
  }}</span>
</template>

<script setup lang="ts">
interface Props {
  technology: string;
}

const props = defineProps<Props>();
</script>
