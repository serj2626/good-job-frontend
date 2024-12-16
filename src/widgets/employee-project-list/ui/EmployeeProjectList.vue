<script lang="ts" setup>
import type { IProject } from "~/src/pages/employee-detail/model/employee.type";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

const { projects } = defineProps<{ projects: IProject[] }>();
</script>

<template>
  <section id="projects" class="bg-gray-100 p-3 rounded-md shadow-2xl">
    <div class="flex flex-col sm:flex-row justify-between items-center mb-3">
      <h3
        class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4 mb-3"
      >
        Проекты
      </h3>
      <UButton icon="i-heroicons-plus" size="md" color="amber" variant="outline"
        >Добавить проект
      </UButton>
    </div>

    <UCarousel
      :arrows="projects.length > 3"
      v-if="projects.length"
      :items="projects"
      v-slot="{ item: project }"
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
      <NuxtLink :to="{ name: 'projects-id', params: { id: project.id } }">
        <UCard
          class="cursor-pointer ease-in dark:shadow-[5px_5px_10px_2px_rgba(0,140,128,0.8)] mx-1"
        >
          <template #header>
            <img
              class="rounded-md inline-block h-52 object-center w-full"
              :src="project.image"
            />
          </template>
          <template #footer>
            <p class="text-center">{{ project.title }}</p>
          </template>
        </UCard>
      </NuxtLink>
    </UCarousel>
  </section>
</template>
