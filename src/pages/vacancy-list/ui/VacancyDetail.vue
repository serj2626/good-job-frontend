<script setup lang="ts">
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
import type { IVacancy } from "../model/vacancy.type";

defineProps<{ vacancy: IVacancy }>();
</script>
<template>
    <div class="vacancy">
       <div class="relative flex items-center justify-between">
    <h4 class="font-bold">{{ vacancy.position }}</h4>
    <Icon
      :name="HeroIcons.FAVORITE"
      title="В избранное"
      class="w-6 h-6 hover:bg-red-700"
    />
  </div>
  <div class="flex gap-10 items-center">
    <p>
      {{ vacancy.min_salary }} -
      {{ vacancy.max_salary ? vacancy.max_salary : "Не указано" }} ₽
    </p>
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
  <p>{{ vacancy.company.name }}</p>
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
    />
    <UButton color="sky" size="md" variant="solid" label="Откликнуться" />
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

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.284);
  }
}
</style>