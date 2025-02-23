<script setup lang="ts">
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
import { MoneyIcons } from "~/src/shared/types/icons/money-icons";

import type { IVacancy } from "../model/vacancy.type";

const { vacancy } = defineProps<{ vacancy: IVacancy }>();

const typeCurrency = computed(() => {
  if (vacancy.currency === "RUB") {
    return MoneyIcons.RUB;
  }
  if (vacancy.currency === "USD") {
    return MoneyIcons.USD;
  }
  return MoneyIcons.EUR;
});

const salary = computed(() => {
  if (vacancy.min_salary && vacancy.max_salary) {
    return "от " + vacancy.min_salary + " до " + vacancy.max_salary;
  }
  if (vacancy.min_salary) {
    return "от " + vacancy.min_salary;
  }
  if (vacancy.max_salary) {
    return "до " + vacancy.max_salary;
  } else {
    return "Заработная плата не указана";
  }
});
</script>
<template>
  <div
    class="vacancy dark:text-black hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.284)] hover:dark:scale-105 hover:dark:shadow-[0_0_10px_rgba(0,0,0,0.284)]"
  >
    <div class="relative flex items-center justify-between">
      <h4 class="font-bold">{{ vacancy.position }}</h4>
      <Icon
        :name="HeroIcons.FAVORITE"
        title="В избранное"
        class="w-6 h-6 hover:bg-red-700"
      />
    </div>
    <div class="flex gap-10 items-center">
      <div class="flex items-center">
        {{ salary }}
        <Icon :name="typeCurrency" class="w-4 h-4" color="#111418" />
      </div>
      <div class="flex items-center gap-2 text-sm">
        <p class="bg-slate-100 py-2 px-3 shadow-md rounded-md">
          {{ vacancy.work_schedule }}
        </p>
        <p class="bg-slate-100 py-2 px-3 shadow-md rounded-md">
          Стаж: от {{ vacancy.work_experience }} лет
        </p>
        <p class="bg-slate-100 py-2 px-3 shadow-md rounded-md">
          {{ vacancy.level }}
        </p>
        <p class="bg-slate-100 py-2 px-3 shadow-md rounded-md">
          {{ vacancy.category }}
        </p>
      </div>
    </div>
    <p>{{ vacancy.company.full_name }}</p>
    <p class="text-sm text-gray-600">
      {{ vacancy.country }} / {{ vacancy.city }}
    </p>
    <div class="flex items-center gap-3 my-3">
      <UButton
        :to="{ name: 'vacancies-id', params: { id: vacancy.id } }"
        color="indigo"
        size="md"
        variant="solid"
        label="Подробнее"
        class="dark:bg-indigo-700 dark:text-white"
      />
      <UButton
        color="sky"
        size="md"
        variant="solid"
        label="Откликнуться"
        class="dark:bg-sky-600 dark:text-white"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vacancy {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #00000014;
  border-radius: 20px;
  padding: 20px;
  background-color: #fff;
  transition: all 0.3s ease;
}
</style>
