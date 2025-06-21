<template>
  <nav class="space-y-2 text-white">
    <SidebarNavigationItem
      v-for="link in links"
      :link="link.link"
      :icon="link.icon"
      :key="link.title"
      :title="link.title"
      @close="emit('close')"
    />
  </nav>
</template>

<script setup lang="ts">
interface Link {
  title: string;
  icon: string;
  link: string;
}

const emit = defineEmits<{
  (e: "close"): void;
}>();

const links: Link[] = [
  { title: "Головна", icon: "mdi:home", link: "/" },
  { title: "Всі пости", icon: "mdi:post-outline", link: "/posts" },
  { title: "Створити пост", icon: "mdi:plus-box-outline", link: "/create" },
];
</script>
