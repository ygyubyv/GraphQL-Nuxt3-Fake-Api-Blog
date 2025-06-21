<template>
  <li class="bg-surface-soft p-5 rounded-xl shadow border border-border">
    <h3 class="text-text font-bold mb-1">{{ comment.name }}</h3>
    <p>
      <a
        :href="`mailto:${comment.email}`"
        class="text-primary underline hover:text-primary/80 text-sm block mb-3"
      >
        {{ comment.email }}
      </a>
    </p>
    <p class="text-text-muted text-base leading-relaxed">
      {{ comment.body }}
    </p>
  </li>
</template>

<script setup lang="ts">
import type { CommentWithEmail } from "~/types/post/Types";

interface Props {
  comment: CommentWithEmail;
}

defineProps<Props>();
</script>
