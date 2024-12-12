<script lang="ts" setup>
import type { IVacancy } from "../../vacancy-list/model/vacancy.type";

defineProps<{ vacancy: IVacancy }>();
</script>

<template>
  <NuxtLink :to="{ name: 'vacancies-id', params: { id: vacancy.id } }">
    <UCard
      class="dark:bg-slate-200   transition-all duration-200 hover:scale-105 hover:shadow-2xl text-center"
    >
      <template #header>
        <div class="flex flex-col gap-3">
          <h3 class="text-[#111418] text-lg font-bold">
            {{ vacancy?.position }}
          </h3>
        </div>
      </template>
      <template #default>
        <p class="text-[#111418] text-sm">
          {{ vacancy?.min_salary }} - {{ vacancy?.max_salary }} ₽
        </p>
      </template>
    </UCard>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
