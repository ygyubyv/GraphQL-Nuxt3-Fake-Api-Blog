<template>
  <NuxtLink
    :to="link"
    class="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/20 transition"
    active-class="bg-primary/30 font-base"
    @click="emit('close')"
  >
    <Icon
      :name="icon"
      :class="title === 'Головна' ? 'text-black' : 'text-primary'"
    />
    {{ title }}
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  icon: string;
  link: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
