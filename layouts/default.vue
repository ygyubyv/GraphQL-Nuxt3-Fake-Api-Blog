<template>
  <div class="min-h-screen flex dark bg-primary-500 text-primary-700 font-base">
    <Sidebar />

    <main class="flex-1 p-6 flex items-center justify-center">
      <slot />
    </main>
  </div>
</template>
