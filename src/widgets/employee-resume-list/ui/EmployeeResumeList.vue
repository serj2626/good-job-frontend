<script lang="ts" setup>
import type { IResume } from "~/src/pages/employee-detail/model/employee.type";

const { resumes } = defineProps<{ resumes: IResume[] }>();
</script>

<template>
  <section id="resumes" class="bg-gray-100 px-3 pb-8 rounded-md shadow-2xl">
    <div class="flex flex-col sm:flex-row justify-between items-center mb-3">
      <h3
        class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4 mb-3"
      >
        Резюме
      </h3>
      <UButton icon="i-heroicons-plus" size="md" color="amber" variant="outline"
        >Добавить резюме</UButton
      >
    </div>

    <div class="grid grid-cols-3 md:grid-cols-3 gap-6">
      <NuxtLink
        v-for="resume in resumes"
        :key="resume.id"
        :to="{ name: 'resumes-id', params: { id: resume.id } }"
      >
        <UCard
          class="hover:scale-105 transition-all duration-200 cursor-pointer ease-in dark:shadow-[5px_5px_10px_2px_rgba(0,140,128,0.8)]"
        >
          <template #header>
            <img
              class="rounded-md inline-block h-56 object-center w-full"
              :src="resume.avatar"
            />
          </template>
          <template #footer>
            <p class="text-center">{{ resume.position }}</p>
          </template>
        </UCard>
      </NuxtLink>
    </div>
  </section>
</template>
