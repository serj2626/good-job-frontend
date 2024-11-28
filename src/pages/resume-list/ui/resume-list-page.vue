<script setup lang="ts">
import type { IResume } from "../../employee-detail/model/employee.type";

const config = useRuntimeConfig();
const {
  data: resumes,
  pending,
  error,
  refresh,
} = await useAsyncData<IResume[]>("resumes", () =>
  $fetch(config.public.apiUrl + `/api/employees/resume/`)
);

const rusumeList = [
  {
    id: 1,
    title: "Frontend Developer",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "SASS"],
    description: "I am a frontend developer with 2 years of experience.",
  },
  {
    id: 2,
    title: "Backend Developer",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["Node.js", "Express", "MongoDB"],
    description: "I am a backend developer with 2 years of experience.",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["React", "Node.js", "Express", "MongoDB"],
    description: "I am a fullstack developer with 2 years of experience.",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["Figma", "Adobe XD", "Sketch"],
    description: "I am a UI/UX designer with 2 years of experience.",
  },
  {
    id: 5,
    title: "Sales Manager",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["Sales", "Marketing", "Customer Service"],
    description: "I am a sales manager with 2 years of experience.",
  },
  {
    id: 6,
    title: "Product Manager",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["Product Management", "Agile", "Scrum"],
    description: "I am a product manager with 2 years of experience.",
  },
  {
    id: 7,
    title: "Project Manager",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["Project Management", "Agile", "Scrum"],
    description: "I am a project manager with 2 years of experience.",
  },
];
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
  <div class="grid grid-cols-[minmax(0,300px),1fr] gap-3 py-3">
    <div class="left-block flex flex-col gap-8">
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
      <section id="sorting"></section>
    </div>
    <div
      class="right-block flex flex-col gap-8 shadow-md bg-gray-100 p-3 relative"
    >
      <h3 class="text-[#111418] text-lg text-center font-bold px-4 pb-2 mb-4">
        Резюме
      </h3>
      <section id="resumes" class="bg-gray-100 p-3 rounded-md">
        <div class="grid grid-cols-4 gap-4 py-5">
          <UCard v-for="resume in resumes" :key="resume.id">
            <template #header>
              <NuxtImg
                class="h-48 w-full rounded-md object-cover mx-auto"
                :src="resume.avatar"
              />
            </template>
            <template #footer>
              {{ resume.position }}
            </template>
          </UCard>
        </div>
        <UPagination
          size="sm"
          :model-value="1"
          :total="100"
          show-last
          show-first
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
        </UPagination>
      </section>
    </div>
  </div>
</template>
