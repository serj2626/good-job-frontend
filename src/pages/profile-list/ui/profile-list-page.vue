<script setup lang="ts">
const options = [{
  value: 'full',
  label: 'Полный день'
}, {
  value: 'part',
  label: 'Частичная занятость'
}, {
  value: 'remote',
  label: 'Удаленная работа'
}]
const categories = ['Разработка', 'Дизайн', 'Бизнес', 'Продажи', 'Маркетинг', 'Другое']
const selected = ref('sms')
const salaries = [

  "Не имеет значения",
  "От 10 000 ₽",
  "от 25 000 ₽",
  "от 60 000 ₽",
  "от 100 000 ₽",
  "от 140 000 ₽",
  "от 180 000 ₽",
  "от 220 000 ₽"
]
const experience = [
  "Не имеет значения ",
  "Нет опыта ",
  "От 1 года до 3 лет ",
  "От 3 до 6 лет ",
  "Более 6 лет"
]
</script>

<template>
  <div class="grid grid-cols-[minmax(0,300px),1fr] gap-2">
    <div class="left-block flex flex-col gap-8"">
    <section id=" search" class="bg-gray-100 text-center shadow-md p-3 flex flex-col gap-2">
      <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
        Поиск вакансий
      </h3>
      <UInput color="white" variant="outline" placeholder="Введите название должности..." />
      <USelect color="white" variant="outline" :options="['United States', 'Canada', 'Mexico']" />
      <USelect color="white" variant="outline" :options="['Санкт-Петербург', 'Москва', 'Самара', 'Казань']" />

      <div class="flex flex-col gap-5 my-4">
        <URadioGroup v-model="selected" legend="График работы" :options="options" />
        <URadioGroup v-model="selected" legend="Специализации" :options="categories" />
        <URadioGroup v-model="selected" legend="Уровень дохода" :options="salaries" />
        <URadioGroup v-model="selected" legend="Требуемый опыт работы" :options="experience" />
      </div>
      <UButton color="teal" variant="outline" size="lg">Найти</UButton>
      </section>
      <section id="sorting"></section>
    </div>
    <div class="right-block px-5 flex flex-col gap-8 shadow-md bg-gray-100">
      <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">Вакансии</h3>
      <UAccordion color="teal" variant="solid" size="xl" open-icon="i-heroicons-plus" close-icon="i-heroicons-minus"
        :items="[
          {
            label: '1. Frontend Development / Saint-Petersburg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
          {
            label: '2. Backend Development / Moscow',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
          {
            label: '3. Fullstack Development / Samara',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
          {
            label: '4. Testing / Kazan',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
        ]" />
    </div>
  </div>
</template>
