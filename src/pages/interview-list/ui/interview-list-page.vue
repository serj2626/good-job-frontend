<script setup lang="ts">
import { ref } from "#imports";
import { SelectAction } from "~/src/features/select-action";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
const date = ref(new Date());

const interviews = [
  {
    Специалист: "Lindsay Walton",
    Компания: "Front-end Developer",
    Вакансия: "Front-end Developer",
    Дата: "2023-01-01",
    Время: "4:00 PM",
    Статус: "Создано",
  },
  {
    Специалист: "Lindsay Walton",
    Компания: "Front-end Developer",
    Вакансия: "Front-end Developer",
    Дата: "2023-01-01",
    Время: "4:00 PM",
    Статус: "Создано",
  },
  {
    Специалист: "Lindsay Walton",
    Компания: "Front-end Developer",
    Вакансия: "Front-end Developer",
    Дата: "2023-01-01",
    Время: "4:00 PM",
    Статус: "Создано",
  },
];

const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates: new Date(),
  },
]);

const columns = [
  {
    key: "Компания",
    label: "Компания",
  },
  {
    key: "Специалист",
    label: "Специалист",
  },
  {
    key: "Отклик",
    label: "Отклик",
  },
  {
    key: "Вакансия",
    label: "Вакансия",
  },
  {
    key: "actions",
  },
];

const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    id: 6,
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member",
  },
];

const items = (row: any) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];

const selected = ref([people[1]]);
</script>

<template>
  <div class="px-3 py-5 rounded-md">
    <div
      class="text-center flex flex-col items-center gap-2 justify-center mb-10"
    >
      <h1 class="text-2xl my-3">Мои собеседования</h1>
      <h3>
        Сегодня {{ date.getDay() }}.{{ date.getMonth() }}.{{
          date.getFullYear()
        }}
      </h3>
    </div>

    <div class="flex flex-col gap-10">
      <div class="text-center">
        <client-only>
          <VDatePicker v-model="date" :attributes="attrs" />
        </client-only>
      </div>
      <UTable v-model="selected" :rows="interviews" :columns="columns">
        <template #name-data="{ row }">
          <span
            :class="[
              selected.find((person) => person.id === row.id) &&
                'text-primary-500 dark:text-primary-400',
            ]"
            >{{ row.name }}</span
          >
        </template>

        <template #actions-data="{ row }">
          <div class="flex gap-2 items-center">
            <Icon
              title="Включить камеру"
              :name="HeroIcons.CAMERA_SOLID"
              class="w-5 h-5 dark:text-white hover:scale-125 cursor-pointer transition-all duration-200 ease-in"
            />
            <SelectAction action="resume" />
          </div>
        </template>
      </UTable>
    </div>
  </div>
</template>
