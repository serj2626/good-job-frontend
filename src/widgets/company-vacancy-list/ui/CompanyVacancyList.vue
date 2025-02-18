<script lang="ts" setup>
import type { IVacancy } from "~/src/pages/vacancy-list/model/vacancy.type";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

const { vacancies } = defineProps<{ vacancies: IVacancy[] }>();
</script>

<template>
  <section id="vacancies" class="bg-gray-100 p-3 rounded-md shadow-2xl">
    <div class="flex flex-col sm:flex-row justify-between items-center mb-6">
      <h3
        class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4 mb-3"
      >
        Вакансии
      </h3>
      <UButton icon="i-heroicons-plus" size="md" color="amber" variant="outline"
        >Добавить вакансию
      </UButton>
    </div>

    <UCarousel
      :arrows="vacancies.length > 1"
      v-if="vacancies.length"
      :items="vacancies"
      v-slot="{ item: vacancy }"
      :ui="{
        item: 'basis-full md:basis-1/2 lg:basis-1/3',
      }"
      :prev-button="{
        color: 'lime',
        icon: `${HeroIcons.ARROW_LEFT_20_SOLID}`,
        size: 'xl',
      }"
      :next-button="{
        color: 'lime',
        icon: `${HeroIcons.ARROW_RIGHT_20_SOLID}`,
        size: 'xl',
      }"
      class="rounded-lg overflow-hidden"
    >
      <NuxtLink :to="{ name: 'vacancies-id', params: { id: vacancy.id } }">
        <UCard
          class="w-[300px] cursor-pointer ease-in dark:shadow-[5px_5px_10px_2px_rgba(0,140,128,0.8)] mx-1"
        >
          <template #header>
            <p class="text-center">{{ vacancy.position }}</p>
          </template>
          <template #footer>
            <p class="text-center">{{ vacancy.position }}</p>
          </template>
        </UCard>
      </NuxtLink>
    </UCarousel>
  </section>
</template>
