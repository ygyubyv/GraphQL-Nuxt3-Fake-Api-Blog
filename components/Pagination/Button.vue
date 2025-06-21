<template>
  <button
    class="px-5 py-2 rounded bg-primary/20 text-primary hover:bg-primary/30 transition"
    :class="
      type === 'PrevPage'
        ? 'disabled:opacity-40 disabled:cursor-not-allowed'
        : ''
    "
    :disabled="disabled"
    @click="$emit('change')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  type: Operation;
  disabled: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: "change"): void;
}>();
</script>
