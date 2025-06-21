<template>
  <ul class="space-y-6">
    <PostCommentElement
      v-for="comment in post.comments.data"
      :key="comment.id"
      :comment="comment"
    />
  </ul>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post/Types";

interface Props {
  post: Post;
}

defineProps<Props>();
</script>
