<script lang="ts" setup>
import {
  cities,
  countries,
  salaries,
  experience,
  workSchedule,
} from "../model/search.data";

type SearchType = "resume" | "vacancy" | "employee" | "company";

const { type = "resume" } = defineProps<{
  type: SearchType;
}>();

const selected = ref("sms");

const searchTitle = computed(() => {
  if (type === "resume") return "Поиск резюме";
  else if (type === "vacancy") return "Поиск вакансий";
  else if (type === "company") return "Поиск компаний";
  else return "Поиск специалистов";
});
</script>

<template>
  <section
    id="search"
    class="bg-gray-100 text-center shadow-md px-3 flex flex-col gap-2"
  >
    <h3 class="text-[#111418] text-lg font-bold mb-4">
      {{ searchTitle }}
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
      :options="countries"
    />
    <USelect
      color="white"
      placeholder="Выберите регион"
      variant="outline"
      :options="cities"
    />

    <div class="flex flex-col gap-5 my-4">
      <URadioGroup
        v-model="selected"
        legend="График работы"
        :options="workSchedule"
      /> <hr>
      <URadioGroup
        v-model="selected"
        legend="Уровень дохода"
        :options="salaries"
      /> <hr>
      <URadioGroup
        v-model="selected"
        legend="Требуемый опыт работы"
        :options="experience"
      />
    </div>
    <UButton color="teal" class="flex justify-center" variant="solid" size="lg"
      >Найти</UButton
    >
  </section>
</template>
