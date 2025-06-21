<template>
  <div class="space-y-4">
    <input
      v-model="editTitle"
      type="text"
      class="w-full px-4 py-2 rounded-md bg-surface-soft border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Заголовок поста"
    />
    <textarea
      v-model="editBody"
      rows="4"
      class="w-full px-4 py-2 rounded-md bg-surface-soft border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      placeholder="Текст поста"
    />
    <div class="flex gap-2 items-center">
      <button
        class="px-4 py-1 rounded-md bg-primary text-black font-medium hover:bg-primary/90 transition cursor-pointer"
        @click="editPost"
        :disabled="isLoading"
      >
        <span>Зберегти</span>
      </button>
      <button
        @click="emit('close')"
        class="px-4 py-1 rounded-md border border-border text-text hover:bg-white/5 transition cursor-pointer"
        :disabled="isLoading"
      >
        Скасувати
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostActions } from "#imports";

interface Props {
  id: string;
  isEdited: boolean;
}

const { id, isEdited } = defineProps<Props>();
const emit = defineEmits<{
  (e: "close"): void;
}>();

const editTitle = defineModel<string>("editTitle");
const editBody = defineModel<string>("editBody");

const { isLoading, updatePost } = usePostActions();

const editPost = async () => {
  if (!editTitle.value!.trim() && !editBody.value!.trim()) {
    showNotification("warning", "Введіть дані");
    return;
  }

  if (!isEdited) {
    showNotification("warning", "Не знайдено змін для оновлення");
    return;
  }

  const result = await updatePost(id, {
    title: editTitle.value!,
    body: editBody.value!,
  });

  if (result && result.data) {
    showNotification("success", "Дані оновлено успішно");
    emit("close");
  } else {
    showNotification("error", "Помилка оновлення даних");
  }
};
</script>
