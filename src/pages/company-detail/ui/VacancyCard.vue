<script lang="ts" setup>
import type { IVacancy } from "../../vacancy-list/model/vacancy.type";

defineProps<{ vacancy: IVacancy }>();
</script>

<template>
  <NuxtLink :to="{ name: 'vacancies-id', params: { id: vacancy.id } }">
    <UCard class="box-1">
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
.box-1 {
  border-radius: 10%;
  position: relative;
  transform: translateY(0);
  transition: transform 1s;
}
.box-1::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -30px;
  left: 50%;
  height: 8px;
  width: 100%;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  transform: translate(-50%, 0);
  transition: transform 1s;
}
.box-1:hover {
  transform: translateY(-40px);
  transition: transform 1s;
}
.box-1:hover::after {
  transform: translate(-50%, 40px) scale(0.75);
  transition: transform 1s;
}
</style>
