<script setup lang="ts">
import type { ICompany } from "../../company-detail/model/company.type";
import CompanyDetail from "./CompanyDetail.vue";

const config = useRuntimeConfig();
const { data: companies } = await useAsyncData<ICompany[]>("companies", () =>
  $fetch(config.public.apiUrl + `/api/companies/`)
);
const hasVacancy = ["Не имеет значения", "Да", "Нет"];
const selected = ref("sms");
const isVerified = ["Не имеет значения", "Да", "Нет"];
const countEmployees = [
  "Не имеет значения ",
  " до 10 человек",
  " от 10 человек",
  " от 20 человек",
  " от 30 человек",
  " более 50 человек",
];
</script>

<template>
  <div class="grid grid-cols-[minmax(0,300px),1fr] gap-3 pb-3 pt-6">
    <div class="left-block flex flex-col gap-8">
      <section
        id="search"
        class="bg-gray-100 text-center shadow-md px-3 pb-4 flex flex-col gap-2"
      >
        <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 mb-4">
          Поиск компаний
        </h3>
        <UInput
          color="white"
          variant="outline"
          placeholder="Введите название компании..."
        />
        <USelect
          color="white"
          variant="outline"
          :options="['Россия', 'Беларусь', 'Казахстан']"
        />
        <USelect
          color="white"
          variant="outline"
          :options="['Санкт-Петербург', 'Москва', 'Самара', 'Казань']"
        />

        <div class="flex flex-col gap-5 my-4">
          <URadioGroup
            v-model="selected"
            legend="Наличие вакансий"
            :options="hasVacancy"
          />
          <URadioGroup
            v-model="selected"
            legend="Проверенная компания"
            :options="isVerified"
          />
          <URadioGroup
            v-model="selected"
            legend="Количество сотрудников"
            :options="countEmployees"
          />
        </div>
        <UButton color="teal" variant="outline" size="lg">Найти</UButton>
      </section>
      <section id="sorting"></section>
    </div>
    <div class="right-block px-5 flex flex-col gap-8 shadow-md bg-gray-100">
      <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 mb-4">Компании</h3>
      <CompanyDetail
        v-for="(company, index) in companies"
        :key="index"
        :company="company"
      />
    </div>
  </div>
</template>