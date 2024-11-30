<script setup lang="ts">
import type { IVacancy } from "../model/vacancy.type";

const config = useRuntimeConfig();
const {
  data: vacancies,
  pending,
  error,
  refresh,
} = await useAsyncData<IVacancy[]>("vacancies", () =>
  $fetch(config.public.apiUrl + `/api/companies/vacancy/`)
);

const options = [
  {
    value: "full",
    label: "Полный день",
  },
  {
    value: "part",
    label: "Частичная занятость",
  },
  {
    value: "remote",
    label: "Удаленная работа",
  },
];
const categories = [
  "Разработка",
  "Дизайн",
  "Бизнес",
  "Продажи",
  "Маркетинг",
  "Другое",
];
const selected = ref("sms");
const salaries = [
  "Не имеет значения",
  "От 10 000 ₽",
  "от 25 000 ₽",
  "от 60 000 ₽",
  "от 100 000 ₽",
  "от 140 000 ₽",
  "от 180 000 ₽",
  "от 220 000 ₽",
];
const experience = [
  "Не имеет значения ",
  "Нет опыта ",
  "От 1 года до 3 лет ",
  "От 3 до 6 лет ",
  "Более 6 лет",
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,300px),1fr] gap-3">
    <div class="left-block flex flex-col gap-8 rounded-md">
      <section
        id=" search"
        class="bg-gray-100 text-center shadow-md p-3 flex flex-col gap-2"
      >
        <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
          Поиск вакансий
        </h3>
        <UInput
          color="white"
          variant="outline"
          placeholder="Введите название должности..."
        />
        <USelect
          color="white"
          variant="outline"
          :options="['United States', 'Canada', 'Mexico']"
        />
        <USelect
          color="white"
          variant="outline"
          :options="['Санкт-Петербург', 'Москва', 'Самара', 'Казань']"
        />

        <div class="flex flex-col gap-5 my-4">
          <URadioGroup
            v-model="selected"
            legend="График работы"
            :options="options"
          />
          <URadioGroup
            v-model="selected"
            legend="Специализации"
            :options="categories"
          />
          <URadioGroup
            v-model="selected"
            legend="Уровень дохода"
            :options="salaries"
          />
          <URadioGroup
            v-model="selected"
            legend="Требуемый опыт работы"
            :options="experience"
          />
        </div>
        <UButton color="teal" variant="outline" size="lg">Найти</UButton>
      </section>
    </div>
    <div
      class="right-block px-5 flex flex-col gap-8 pb-8 rounded-md shadow-md bg-gray-100"
    >
      <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
        Вакансии
      </h3>

      <div class="flex flex-col gap-3">
        <div class="vacancy" v-for="vacancy in vacancies" :key="vacancy.id">
          <div class="flex items-center justify-between">
            <h4 class="font-bold">{{ vacancy.position }}</h4>
            <Icon name="ic:outline-favorite-border" class="w-5 h-5" />
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
          <p class="text-sm text-gray-600">{{ vacancy.country }} / {{ vacancy.city }}</p>
          <div class="flex items-center gap-3 my-3">
            <UButton
              :to="{ name: 'vacancies-id', params: { id: vacancy.id } }"
              color="indigo"
              size="md"
              variant="solid"
              label="Подробнее"
            />
            <UButton
              color="sky"
              size="md"
              variant="solid"
              label="Откликнуться"
            />
          </div>
        </div>
      </div>
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
