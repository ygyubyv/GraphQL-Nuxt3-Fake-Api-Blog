<template>
  <!-- Кнопка гамбургера для мобілок -->
  <SidebarButton @toggle-menu="toggleMenu" />

  <aside
    :class="[
      'fixed top-0 left-0 h-full w-52 md:w-64 bg-surface border-r border-white/10 shadow-md p-4 space-y-6 font-base transition-transform duration-300 ease-in-out z-40',
      isOpen ? 'translate-x-0' : '-translate-x-full',
      'md:translate-x-0 md:static md:h-auto',
    ]"
  >
    <SidebarLogo />

    <SidebarNavigation @close="isOpen = false" />
  </aside>

  <div
    v-if="isOpen"
    @click="isOpen = false"
    class="fixed inset-0 bg-black/50 z-30 md:hidden"
  ></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>
