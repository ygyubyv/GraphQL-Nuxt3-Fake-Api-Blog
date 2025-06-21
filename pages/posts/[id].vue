<template>
  <section class="max-w-4xl mx-auto py-16">
    <div v-if="post">
      <header class="mb-8">
        <h1
          class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mb-4 leading-tight"
        >
          {{ post.title }}
        </h1>

        <PostMetadata :post="post" />

        <hr class="border-border" />
      </header>

      <article
        class="bg-surface p-8 rounded-2xl border border-border shadow-lg text-text leading-relaxed text-lg space-y-6"
      >
        <p>{{ post.body }}</p>
      </article>

      <div class="mt-10">
        <NuxtLink
          to="/posts"
          class="inline-block px-5 py-2 border border-primary rounded-md text-primary font-semibold hover:bg-primary/10 transition"
          >← Повернутися до списку</NuxtLink
        >
      </div>

      <section class="mt-16">
        <h2
          class="text-3xl font-bold text-primary mb-8 border-b border-primary pb-2"
        >
          Коментарі
        </h2>

        <PostCommentsList v-if="post.comments.data.length" :post="post" />

        <p v-else class="text-text-muted italic mt-6">Коментарів ще немає.</p>
      </section>
    </div>

    <div
      v-else-if="isError"
      class="text-error text-center py-20 text-xl font-semibold"
    >
      ❌ Помилка завантаження поста.
    </div>
  </section>
</template>

<script setup lang="ts">
import { GET_POST } from "~/graphQL/queries/getPost";
import type { ResponseData } from "~/types/post/Types";

definePageMeta({
  layout: "post",
});

const route = useRoute();
const { data, error } = await useAsyncQuery<ResponseData>(GET_POST, {
  id: route.params.id,
});

const isError = computed(() => {
  return !!error.value;
});
const post = computed(() => data.value?.post);
</script>
