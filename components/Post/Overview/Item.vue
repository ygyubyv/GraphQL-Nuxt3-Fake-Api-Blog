<template>
  <NuxtLink :to="`/posts/${post.id}`">
    <h2 class="text-2xl font-semibold text-primary hover:underline">
      {{ post.title }}
    </h2>
  </NuxtLink>

  <p class="text-text/80 text-base leading-relaxed line-clamp-4">
    {{ post.body }}
  </p>

  <footer class="flex justify-between items-center mt-4 text-sm">
    <span class="text-text/60">Автор: {{ post.user.name }}</span>

    <div class="flex items-center gap-2">
      <button
        @click="emit('startEditing')"
        class="px-3 py-1 text-sm rounded-md border border-primary text-primary hover:bg-primary/10 transition cursor-pointer"
      >
        Редагувати
      </button>

      <button
        class="px-3 py-1 text-sm rounded-md border border-red-500 text-red-500 hover:bg-red-500/10 transition cursor-pointer"
        @click="showConfirm = true"
        :disabled="isLoading"
      >
        <span>Видалити</span>
      </button>
    </div>
  </footer>

  <BaseConfirmDialog
    :show="showConfirm"
    message="Ви впевнені, що хочете видалити пост?"
    @confirm="deletePost"
    @cancel="showConfirm = false"
  />
</template>

<script setup lang="ts">
import type { Post } from "~/types/posts/Types";
import { usePostActions } from "#imports";

interface Props {
  post: Post;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "startEditing"): void;
  (e: "deletePost"): void;
}>();

const showConfirm = ref(false);
const { isLoading, deletePost: delPost } = usePostActions();

const deletePost = async () => {
  showConfirm.value = false;

  const result = await delPost(props.post.id);

  result && result.data
    ? showNotification("success", "Дані видалено успішно")
    : showNotification("error", "Помилка видалення даних");
};
</script>
