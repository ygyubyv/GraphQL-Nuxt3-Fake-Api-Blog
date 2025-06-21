<template>
  <article
    class="bg-surface p-6 rounded-2xl shadow flex flex-col gap-4 border border-border"
  >
    <div
      v-if="isLoading"
      class="absolute inset-0 bg-black/10 flex justify-center items-center"
    >
      <BaseSpinner mode="White-spinner" />
    </div>

    <!-- Якщо редагування -->
    <PostOverviewForm
      v-if="isEditing"
      :id="post.id"
      :is-edited="isEdited"
      v-model:edit-body="editBody"
      v-model:edit-title="editTitle"
      @close="isEditing = false"
    />

    <!-- Якщо не редагування -->
    <PostOverviewItem :post="post" @start-editing="startEditing" v-else />
  </article>
</template>

<script setup lang="ts">
import type { Post } from "~/types/posts/Types";
import { usePostActions } from "#imports";

interface Props {
  post: Post;
}
const props = defineProps<Props>();

const { isLoading } = usePostActions();

const editTitle = ref("");
const editBody = ref("");
const isEditing = ref(false);

const isEdited = computed(() => {
  return !(
    editTitle.value === props.post.title && editBody.value === props.post.body
  );
});

const startEditing = () => {
  editTitle.value = props.post.title;
  editBody.value = props.post.body;
  isEditing.value = true;
};
</script>
