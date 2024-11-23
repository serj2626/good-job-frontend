<script setup lang="ts">
const hasVacancy = [
  "Не имеет значения",
  "Да",
  "Нет"
]
const selected = ref('sms')
const isVerified = [
  "Не имеет значения",
  "Да",
  "Нет"
]
const countEmployees = [
  "Не имеет значения ",
  " до 10 человек",
  " от 10 человек",
  " от 20 человек",
  " от 30 человек",
  " более 50 человек"
]
</script>

<template>
  <div class="grid grid-cols-[minmax(0,300px),1fr] gap-3 pb-3 pt-6">
    <div class="left-block flex flex-col gap-8">
    <section id="search" class="bg-gray-100 text-center shadow-md px-3 pb-4 flex flex-col gap-2">
      <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 mb-4">
        Поиск компаний
      </h3>
      <UInput color="white" variant="outline" placeholder="Введите название компании..." />
      <USelect color="white" variant="outline" :options="['Россия', 'Беларусь', 'Казахстан']" />
      <USelect color="white" variant="outline" :options="['Санкт-Петербург', 'Москва', 'Самара', 'Казань']" />

      <div class="flex flex-col gap-5 my-4">
        <URadioGroup v-model="selected" legend="Наличие вакансий" :options="hasVacancy" />
        <URadioGroup v-model="selected" legend="Проверенная компания" :options="isVerified" />
        <URadioGroup v-model="selected" legend="Количество сотрудников" :options="countEmployees" />
      </div>
      <UButton color="teal" variant="outline" size="lg">Найти</UButton>
      </section>
      <section id="sorting"></section>
    </div>
    <div class="right-block px-5 flex flex-col gap-8 shadow-md bg-gray-100">
      <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 mb-4">Компании</h3>
      <div class="flex flex-col gap-5">
      <div class="flex justify-between items-center">
        <div class="flex gap-4">
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24" style="
              background-image: url('https://cdn.usegalileo.ai/stability/ad0a124e-2a95-47b3-9bca-bf23f247c39c.png');
            "></div>
          <div class="flex flex-col justify-center">
            <p class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Acme Inc.
            </p>
            <p class="text-[#637588] text-base font-normal leading-normal">
              Санкт-Петербург / Россия
            </p>
            <p class="text-[#637588] text-base font-normal leading-normal">
              5 вакансий
            </p>
          </div>
        </div>
        <div>
          <UButton label="Подробнее" color="gray" variant="solid" size="lg" />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-4">
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24" style="
              background-image: url('https://cdn.usegalileo.ai/stability/c4bb0cbb-48e6-46d3-9900-7d7f83e3c8b0.png');
            "></div>
          <div class="flex flex-col justify-center">
            <p class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Acme Inc.
            </p>
            <p class="text-[#637588] text-base font-normal leading-normal">
              Санкт-Петербург / Россия
            </p>
            <p class="text-[#637588] text-base font-normal leading-normal">
              5 вакансий
            </p>
          </div>
        </div>
        <div>
          <UButton label="Подробнее" color="gray" variant="solid" size="lg" />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="flex gap-4">
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24" style="
              background-image: url('https://cdn.usegalileo.ai/stability/c4bb0cbb-48e6-46d3-9900-7d7f83e3c8b0.png');
            "></div>
          <div class="flex flex-col justify-center">
            <p class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Acme Inc.
            </p>
            <p class="text-[#637588] text-base font-normal leading-normal">
              Санкт-Петербург / Россия
            </p>
            <p class="text-[#637588] text-base font-normal leading-normal">
              5 вакансий
            </p>
          </div>
        </div>
        <div>
          <UButton label="Подробнее" color="gray" variant="solid" size="lg" />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="flex gap-4">
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24" style="
              background-image: url('https://cdn.usegalileo.ai/stability/c4bb0cbb-48e6-46d3-9900-7d7f83e3c8b0.png');
            "></div>
          <div class="flex flex-col justify-center">
            <p class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Acme Inc.
            </p>
            <p class="text-[#637588] text-base font-normal leading-normal">
              Санкт-Петербург / Россия
            </p>
            <p class="text-[#637588] text-base font-normal leading-normal">
              5 вакансий
            </p>
          </div>
        </div>
        <div>
          <UButton label="Подробнее" color="gray" variant="solid" size="lg" />
        </div>
      </div>
      <UPagination size="sm" :model-value="1" :total="100" show-last show-first class="flex justify-center my-2">
      </UPagination>
      </div>


    </div>
  </div>
</template>
