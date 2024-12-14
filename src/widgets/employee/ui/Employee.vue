<script lang="ts" setup>
import { UserProfile } from "~/src/features/user-profile";
import type { IEmployee } from "~/src/pages/employee-detail/model/employee.type";
import { BootstrapIcons } from "~/src/shared/types/icons/bootstrap-icons";

const { employee } = defineProps<{ employee: IEmployee }>();
</script>

<template>
  <UserProfile :employee="employee" />
  <section
    id="contacts"
    class="bg-gray-100 rounded-lg dark:bg-gray-300 shadow-2xl p-3"
  >
    <h4 class="text-[#111418] text-lg font-bold mb-3 pb-2">Контакты</h4>
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <Icon :name="BootstrapIcons.PHONE" class="w-5 h-5 text-amber-800" />
        <p class="text-[#111418] text-base font-medium leading-normal">
          {{ employee?.phone }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <UIcon :name="BootstrapIcons.GITHUB" class="w-5 h-5 dark:text-black" />
        <p class="text-[#111418] text-base font-medium leading-normal">
          Github
        </p>
      </div>
      <div class="flex items-center justify-between">
        <UIcon :name="BootstrapIcons.GITLAB" class="w-5 h-5 text-rose-600" />
        <p class="text-[#111418] text-base font-medium leading-normal">
          Gitlab
        </p>
      </div>
      <div class="flex items-center justify-between">
        <UIcon :name="BootstrapIcons.MAIL" class="w-5 h-5 text-sky-500" />
        <p class="text-[#111418] text-base font-medium leading-normal">
          {{ employee?.user.email }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <UIcon :name="BootstrapIcons.LINKEDIN" class="w-5 h-5 text-sky-700" />
        <p class="text-[#111418] text-base font-medium leading-normal">
          serj2626
        </p>
      </div>
      <div class="flex items-center justify-between">
        <UIcon :name="BootstrapIcons.TELEGRAM" class="w-5 h-5 text-sky-700" />
        <p class="text-[#111418] text-base font-medium leading-normal">
          Telegram
        </p>
      </div>
    </div>
  </section>
  <section
    id="info"
    class="bg-gray-100 dark:bg-gray-300 rounded-lg shadow-2xl flex flex-col gap-2 p-3"
  >
    <h4 class="text-[#111418] text-lg font-bold pb-2 mb-3">Доп. информация</h4>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Возраст</span
      >
      <p class="info__data">{{ employee?.age }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Страна</span
      >
      <p class="info__data">{{ employee?.country }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Город</span
      >
      <p class="info__data">{{ employee?.city }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Пол</span
      >
      <p class="info__data">{{ employee?.gender }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Опыт</span
      >
      <p class="info__data">3 года</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Мои резюме</span
      >
      <p class="info__data">{{ employee?.resumes.length }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Проекты</span
      >
      <p class="info__data">{{ employee?.projects.length }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span
        class="bg-slate-200 dark:bg-black dark:text-white rounded-2xl px-3 py-2"
        >Друзья</span
      >
      <p class="info__data">{{ employee?.user.count_friends }}</p>
    </div>
  </section>
</template>
<style scoped lang="scss">
.info__data {
  @apply text-black;
}

#info,
#contacts {
  // @apply dark:outline-4 dark:outline-white dark:outline-none;
  @apply dark:shadow-[0_0_10px_10px_rgba(251,251,251,0.9)];
}
</style>
