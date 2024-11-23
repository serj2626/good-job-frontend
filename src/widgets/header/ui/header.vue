<script setup lang="ts">
const menu = [
  {
    title: "Главная",
    url: "/",
  },
  {
    title: "Вакансии",
    url: "/vacancy/list",
  },
  {
    title: "Компании",
    url: "/company/list",
  },
  {
    title: "Профили",
    url: "/profile/list",
  },
  {
    title: "Посты и события",
    url: "/profile/list",
  },
];
</script>
<template>
  <header class="flex-col items-center flex text-center p-2 rounded-lg mb-3 shadow-2xl">
    <h1 class="font-bold my-4 text-slate-600 text-6xl">GJ</h1>
    <p class="text-slate-500">Good Job - Сайт для программистов и дизайнеров</p>

    <menu class="flex justify-center items-center gap-10 py-3  mt-2 ">
      <a v-for="link in menu" :key="link.title" :href="link.url" class="menu-link py-2">
        {{ link.title }}
      </a>
    </menu>
  </header>
</template>
<style scoped lang="scss">
// header {
//   box-shadow: 12px 16px 1px rgba(143, 141, 141, 0.19);
// }
h1 {
  text-shadow: 8px 2px 1px rgba(0, 0, 0, 0.19);
}

p {
  text-shadow: 0px -2px 2px rgba(0, 0, 0, 0.19);
}

.menu-link {
  border-bottom: 3px solid transparent;
  transition: all .3s ease;

  &:hover {
    border-bottom-color: teal;
  }
}
</style>
