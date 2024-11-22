<script setup lang="ts">
const menu = [
  {
    title: "Главная",
    url: "/",
  },
  {
    title: "Вакансии",
    url: "/vacancies",
  },
  {
    title: "Компании",
    url: "/companies",
  },
  {
    title: "Профили",
    url: "/profiles",
  },
];
</script>
<template>
  <menu
    class="flex justify-center items-center gap-10 py-2 bg-gray-100"
  >
    <a
      v-for="link in menu"
      :key="link.title"
      :href="link.url"
      class="menu-link"
    >
      {{ link.title }}
    </a>
  </menu>
</template>
<style scoped lang="scss">
.menu-link {
  text-shadow: 0px -2px 2px rgba(0, 0, 0, 0.19);
  @apply text-slate-500
}
</style>
