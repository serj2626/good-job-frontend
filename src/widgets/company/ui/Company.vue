<script lang="ts" setup>
import { UserProfile } from "~/src/features/user-profile";
import type { ICompany } from "~/src/pages/company-detail/model/company.type";

defineProps<{ company: ICompany }>();
</script>

<template>
  <UserProfile :company="company" />

  <section id="info" class="bg-gray-100 shadow-md flex flex-col gap-3 p-3">
    <div class="flex justify-between items-center">
      <span class="bg-slate-200 rounded-2xl px-3 py-2">Страна:</span>
      <p>{{ company?.country }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span class="bg-slate-200 rounded-2xl px-3 py-2">Город:</span>
      <p>{{ company?.city }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span class="bg-slate-200 rounded-2xl px-3 py-2">Почта:</span>
      <p>{{ company?.user.email }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span class="bg-slate-200 rounded-2xl px-3 py-2">Телефон:</span>
      <p>{{ company?.phone }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span class="bg-slate-200 rounded-2xl px-3 py-2">Кол-во сотрудников</span>
      <p>{{ company?.count_employees }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span class="bg-slate-200 rounded-2xl px-3 py-2">Кол-во вакансий</span>
      <p>{{ company?.vacancies.length }}</p>
    </div>
    <div class="flex justify-between items-center">
      <span class="bg-slate-200 rounded-2xl px-3 py-2">Кол-во друзей</span>
      <p>26</p>
    </div>
    <div class="flex justify-between items-center">
      <span class="bg-slate-200 rounded-2xl px-3 py-2">Сайт</span>
      <p>{{ company?.site || "Не указан" }}</p>
    </div>
  </section>
</template>
