<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h3 class="text-lg font-semibold mb-4">Підтвердження</h3>
        <p class="mb-6">{{ message }}</p>
        <div class="flex justify-end gap-2">
          <button @click="$emit('cancel')" class="px-4 py-1 border rounded">
            Скасувати
          </button>
          <button
            @click="$emit('confirm')"
            class="px-4 py-1 bg-red-500 text-white rounded"
          >
            Підтвердити
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  show: boolean;
  message: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "confirm"): void;
}>();
</script>
