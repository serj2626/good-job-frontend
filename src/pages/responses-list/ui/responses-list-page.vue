<script setup lang="ts">
import { SelectAction } from "~/src/features/select-action";
</script>
<template>
  <div>
    <h1 class="text-[#1C160C] dark:text-white text-center text-[32px] mt-3 mb-12 font-bold">
      Отклики
    </h1>
    <div class="flex justify-center gap-5 mb-8">
      <UButton color="black" size="md" label="Все" variant="solid" />
      <UButton color="gray" size="md" label="На рассмотрении" variant="solid" />
      <UButton color="gray" size="md" label="Приглашение" variant="solid" />
      <UButton color="gray" size="md" label="Отказ" variant="solid" />
      <UButton color="gray" size="md" label="Архив" variant="solid" />
    </div>
    <div class="flex flex-col gap-3">
      <div class="response flex flex-col gap-3 px-3 py-2">
        <div class="flex justify-between">
          <p class="flex gap-2 items-center">
            <span class="bg-slate-200 rounded-2xl px-3 py-2">Позиция:</span
            >Веб-дизайнер
          </p>
          <SelectAction action="response" />
        </div>
        <p class="flex gap-2 items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Компания:</span>
          <UButton
            variant="link"
            size="xl"
            color="indigo"
            label="ООО Рога и копыта"
          />
        </p>
        <p class="flex gap-2 items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Дата отклика: </span>
          2024-05-12
        </p>
        <p class="flex gap-2 items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Статус: </span>
          <UButton color="green" label="На рассмотрении" />
        </p>
        <p class="flex justify-between items-center">
          <UButton variant="link" color="indigo" label="Ссылка на вакансию" />
          <UButton variant="solid" class="dark:text-white" size="xl" color="indigo" label="Чат" />
        </p>
      </div>
      <div class="response flex flex-col gap-3 px-3 py-2">
        <div class="flex justify-between">
          <p class="flex gap-2 items-center">
            <span class="bg-slate-200 rounded-2xl px-3 py-2">Позиция:</span
            >Веб-дизайнер
          </p>
          <SelectAction action="response" />
        </div>
        <p class="flex gap-2 items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Компания:</span>
          <UButton
            variant="link"
            size="xl"
            color="indigo"
            label="ООО Рога и копыта"
          />
        </p>
        <p class="flex gap-2 items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Дата отклика: </span>
          2024-05-12
        </p>
        <p class="flex gap-2 items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Статус: </span>
          <UButton color="green" label="На рассмотрении" />
        </p>
        <p class="flex justify-between items-center">
          <UButton variant="link" color="indigo" label="Ссылка на вакансию" />
          <UButton variant="solid" size="xl" color="indigo" label="Чат" />
        </p>
      </div>
      <div class="response flex flex-col gap-3 px-3 py-2">
        <div class="flex justify-between">
          <p class="flex gap-2 items-center">
            <span class="bg-slate-200 rounded-2xl px-3 py-2">Позиция:</span
            >Веб-дизайнер
          </p>
          <SelectAction action="response" />
        </div>
        <p class="flex gap-2 items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Компания:</span>
          <UButton
            variant="link"
            size="xl"
            color="indigo"
            label="ООО Рога и копыта"
          />
        </p>
        <p class="flex gap-2 items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Дата отклика: </span>
          2024-05-12
        </p>
        <p class="flex gap-2 items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Статус: </span>
          <UButton color="green" label="На рассмотрении" />
        </p>
        <p class="flex justify-between items-center">
          <UButton variant="link" color="indigo" label="Ссылка на вакансию" />
          <UButton variant="solid" size="xl" color="indigo" label="Чат" />
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.response {
  width: 100%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15),
    -5px -5px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid #00000014;
  border-radius: 20px;
  padding: 10px;
  background-color: #fff;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15),
      -5px -5px 10px rgba(200, 200, 0, 0.15);
  }
}
</style>
