<template>
  <section class="max-w-4xl w-full mx-auto p-8 bg-surface rounded-lg shadow-lg">
    <h1 class="text-5xl font-semibold mb-6 text-primary">Mini Blog</h1>
    <p class="text-text leading-relaxed mb-4">
      Тестовий проєкт для роботи з <strong>Nuxt 3</strong>,
      <strong>GraphQL</strong> і <strong>TypeScript</strong>.
    </p>

    <p class="mb-6 text-text/80">
      Проєкт реалізує повний цикл CRUD операцій над постами через GraphQL API.
    </p>

    <h2 class="text-2xl font-semibold mb-3 text-primary">
      Основні можливості:
    </h2>

    <MainFeatures />

    <h2 class="text-2xl font-semibold mb-3 text-primary">Технології:</h2>

    <MainTechnologies />

    <p class="text-text/80 italic">
      Оберіть пункт меню зліва, щоб почати роботу з додатком.
    </p>
  </section>
</template>
