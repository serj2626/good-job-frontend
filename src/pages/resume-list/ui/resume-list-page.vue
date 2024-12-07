<script setup lang="ts">
import Grid from "~/src/shared/ui/grid/Grid.vue";
import type { IResume } from "../../employee-detail/model/employee.type";
import ResumeDetail from "./ResumeDetail.vue";

const config = useRuntimeConfig();
const { data: resumes } = await useAsyncData<IResume[]>("resumes", () =>
  $fetch(config.public.apiUrl + `/api/employees/resume/`)
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
  <Grid>
    <template #left>
      <div>
        <section
          id="search"
          class="bg-gray-100 text-center shadow-md p-3 flex flex-col gap-2"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 mb-4">
            Поиск резюме
          </h3>
          <UInput
            color="white"
            variant="outline"
            placeholder="Введите название должности..."
          />
          <USelect
            color="white"
            placeholder="Выберите город"
            variant="outline"
            :options="['United States', 'Canada', 'Mexico']"
          />
          <USelect
            color="white"
            placeholder="Выберите регион"
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
    </template>
    <template #right>
      <div>
        <h3 class="text-[#111418] text-lg text-center font-bold px-4 pb-2 mb-4">
          Резюме
        </h3>
        <section id="resumes" class="bg-gray-100 p-3 rounded-md">
          <div class="grid grid-cols-3 gap-4 py-5">
            <ResumeDetail
              v-for="resume in resumes"
              :key="resume.id"
              :resume="resume"
            />
          </div>
        </section>
      </div>
    </template>
  </Grid>
</template>
