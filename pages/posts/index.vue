<template>
  <section
    class="max-w-5xl w-full mx-auto px-4 py-8 min-h-[600px] flex flex-col"
  >
    <header
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
    >
      <div>
        <h1 class="text-4xl font-semibold text-primary mb-4">Всі пости</h1>
        <p class="text-black text-sm" v-if="!isLoading">
          Знайдено {{ filteredPosts.length }}
          {{ filteredPosts.length === 1 ? "пост" : "пости" }}
        </p>
      </div>

      <div class="mt-4 sm:mt-0 flex items-center gap-2">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Пошук за заголовком..."
          class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          @click="searchQuery = ''"
          v-if="searchQuery"
          class="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          title="Очистити пошук"
        >
          ✕
        </button>
      </div>
    </header>

    <div v-if="isLoading" class="flex-grow flex items-center justify-center">
      <BaseSpinner mode="Black-spinner" class="w-20 h-20" />
    </div>

    <div
      v-if="isError && !isLoading"
      class="bg-red-700/90 text-white p-4 rounded-md mb-6 text-center font-semibold"
    >
      Помилка при завантаженні постів. Спробуйте оновити сторінку.
    </div>

    <div v-if="filteredPosts.length && !isLoading" class="grid gap-6 flex-grow">
      <PostOverview v-for="post in filteredPosts" :post="post" :key="post.id" />
    </div>

    <div
      v-if="!filteredPosts.length && !isLoading && !isError"
      class="text-black text-center py-10 text-lg font-medium flex-grow"
    >
      Пости відсутні.
    </div>

    <nav
      aria-label="Pagination"
      class="flex justify-center items-center gap-4 mt-10 select-none"
    >
      <PaginationButton
        type="PrevPage"
        @change="changePage('PrevPage')"
        :disabled="currentPage === 1"
        >← Назад</PaginationButton
      >

      <span class="text-black text-sm">
        Сторінка <span class="font-semibold">{{ currentPage }}</span> з
        <span class="font-semibold">X</span>
      </span>

      <PaginationButton
        type="NextPage"
        @change="changePage('NextPage')"
        :disabled="false"
        >Вперед →</PaginationButton
      >
    </nav>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

definePageMeta({ layout: "default" });

const searchQuery = ref("");

const { filteredPosts, currentPage, isLoading, isError, changePage } =
  usePosts(searchQuery);
</script>
