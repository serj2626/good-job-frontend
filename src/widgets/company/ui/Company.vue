<script lang="ts" setup>
import { UserProfile } from "~/src/features/user-profile";
import type { ICompany } from "~/src/pages/company-detail/model/company.type";

defineProps<{ company: ICompany }>();
</script>

<template>
  <UserProfile :company="company" />

  <section
    id="info"
    class="bg-gray-100 dark:bg-gray-300 rounded-lg shadow-2xl flex flex-col gap-3 p-3"
  >
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Страна:</span
      >
      <p class="info__data">{{ company?.country }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Город:</span
      >
      <p class="info__data">{{ company?.city }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Почта:</span
      >
      <p class="info__data">{{ company?.user.email }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Телефон:</span
      >
      <p class="info__data">{{ company?.phone }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Кол-во сотрудников</span
      >
      <p class="info__data">{{ company?.count_employees }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Кол-во вакансий</span
      >
      <p class="info__data">{{ company?.vacancies.length }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Кол-во друзей</span
      >
      <p class="info__data">26</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Сайт</span
      >
      <p class="info__data">{{ company?.site || "Не указан" }}</p>
    </div>
  </section>
</template>
<style scoped lang="scss">
.info__data {
  @apply dark:text-black;
}

#info,
#contacts {
  @apply dark:shadow-[0_0_10px_10px_rgba(0,140,128,0.8)];
}
</style>
