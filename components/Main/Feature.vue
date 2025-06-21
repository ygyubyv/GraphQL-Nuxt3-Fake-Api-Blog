<template>
  <li>
    {{ feature }}
  </li>
</template>
<script setup lang="ts">
interface Props {
  feature: string;
}

const props = defineProps<Props>();
</script>
