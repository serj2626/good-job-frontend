<script lang="ts" setup>
import type { IVacancy } from "../../vacancy-list/model/vacancy.type";
defineProps<{ vacancy: IVacancy }>();
</script>

<template>
  <NuxtLink :to="{ name: 'vacancies-id', params: { id: vacancy.id } }">
    <UCard
      class="card transition-all duration-200 hover:scale-105 hover:shadow-2xl text-center"
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

<style lang="scss" scoped>
.card {
  background: linear-gradient(
    90deg,
    rgba(17, 167, 100, 0.374) 0%,
    rgba(57, 11, 11, 0.1) 100%
  );
}
</style>
