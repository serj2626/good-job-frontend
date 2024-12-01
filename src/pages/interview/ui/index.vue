<script setup lang="ts">
import { ref } from "#imports";
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
const selected = ref([interviews[0]]);
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
</script>

<template>
  <div class="shadow-2xl px-3 py-5 rounded-md">
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
    <!-- 
    <div class="grid grid-cols-[minmax(0,300px),1fr] gap-2">
      <div>
        <client-only>
          <VDatePicker v-model="date" :attributes="attrs" />
        </client-only>
      </div>
      <div class="bg-gray-50">
        <UTable v-model="selected" :rows="interviews" />
      </div>
    </div> -->
    <div class="flex flex-col gap-10">
      <div class="text-center">
        <client-only>
          <VDatePicker v-model="date" :attributes="attrs" />
        </client-only>
      </div>
      <UTable v-model="selected" :rows="interviews" />
    </div>
  </div>
</template>
