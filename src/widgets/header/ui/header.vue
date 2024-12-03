<script setup lang="ts">
const menu = [
  {
    title: "Главная",
    url: "/",
  },
  {
    title: "Вакансии",
    url: "/vacancies/list",
  },
  {
    title: "Компании",
    url: "/companies/list",
  },
  {
    title: "Специалисты",
    url: "/employees/list",
  },
  {
    title: "Резюме",
    url: "/resumes/list",
  },
  {
    title: "Посты и события",
    url: "/profile/list",
  },
];
</script>
<template>
  <header
    class="flex-col items-center flex text-center p-2 rounded-lg mb-3 shadow-2xl"
  >
    <h1 class="font-bold my-4 text-teal-600 text-6xl">GJ</h1>
    <p class="text-slate-500">Good Job - Сайт для людей из мира IT</p>

    <menu
      class="flex justify-center flex-wrap items-center gap-3 sm:gap-10 py-3 mt-2"
    >
      <NuxtLink
        v-for="link in menu"
        :key="link.title"
        :to="link.url"
        class="menu-link py-2"
      >
        {{ link.title }}
      </NuxtLink>
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

</style>
