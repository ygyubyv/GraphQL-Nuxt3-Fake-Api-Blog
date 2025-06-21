<template>
  <div
    class="flex flex-wrap gap-6 text-text-muted text-sm font-medium mb-6 border-l-4 border-primary pl-4"
  >
    <div>
      Автор: <span class="text-text">{{ post.user.name }}</span>
    </div>
    <div>
      Email:
      <a
        :href="`mailto:${post.user.email}`"
        class="underline text-primary hover:text-primary/80"
      >
        {{ post.user.email }}
      </a>
    </div>
    <div>Компанія: {{ post.user.company.name }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post/Types";

interface Props {
  post: Post;
}

defineProps<Props>();
</script>
