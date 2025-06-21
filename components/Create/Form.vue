<template>
  <form class="space-y-6" @submit.prevent="createPost" ref="form">
    <!-- Заголовок поста -->
    <div>
      <label for="title" class="block text-sm font-semibold text-text mb-1"
        >Заголовок</label
      >
      <input
        id="title"
        v-model="title"
        type="text"
        placeholder="Введіть заголовок"
        class="w-full px-4 py-2 rounded-md bg-surface border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <!-- Текст поста -->
    <div>
      <label for="body" class="block text-sm font-semibold text-text mb-1"
        >Текст</label
      >
      <textarea
        id="body"
        v-model="body"
        rows="6"
        placeholder="Введіть текст поста"
        class="w-full px-4 py-2 rounded-md bg-surface border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      />
    </div>

    <BaseSpinner mode="White-spinner" v-if="loading" />

    <!-- Кнопка -->
    <div class="pt-4">
      <CreateButton :loading="loading" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { CREATE_POST } from "~/graphQL/mutations/createPost";

const { mutate, loading } = useMutation(CREATE_POST);

const title = ref("");
const body = ref("");
const form = useTemplateRef("form");

const variables = computed(() => ({
  input: {
    title: title.value,
    body: body.value,
  },
}));

const createPost = async () => {
  if (!title.value.trim() && !body.value.trim()) {
    showNotification("warning", "Введіть дані");
    return;
  }

  try {
    const result = await mutate(variables.value);

    if (result && result.data) {
      showNotification("success", "Дані створено успішно");
      form.value!.reset();
    }
  } catch (error) {
    showNotification("error", "Помилка створення даних");
    console.error(error);
  }
};
</script>
