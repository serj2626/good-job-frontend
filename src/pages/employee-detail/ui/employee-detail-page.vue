<script setup lang="ts">
import Grid from "~/src/shared/ui/grid/Grid.vue";
import { Employee } from "~/src/widgets/employee";

import type { IEmployee } from "../model/employee.type";
import ResumeCard from "./ResumeCard.vue";
import EducationCard from "./EducationCard.vue";
import ExperienceCard from "./ExperienceCard.vue";
import { AddSection } from "~/src/features/add-section";
import { EditAboutSection } from "~/src/features/edit-about-section";

const config = useRuntimeConfig();
const { data: employee } = await useAsyncData<IEmployee>("employee", () =>
  $fetch(config.public.apiUrl + `/api/employees/${useRoute().params.id}/`)
);

const about = ref<string>("");
</script>
<template>
  <Grid>
    <template #left>
      <Employee :employee="employee" v-if="employee" />
    </template>
    <template #right>
      <section id="resumes" class="bg-gray-100 px-3 pb-8 rounded-md shadow-2xl">
        <AddSection type="employee" section="resumes" />
        <!-- <div
          class="flex flex-col sm:flex-row justify-between items-center mb-3"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
            Мои резюме
          </h3>
          <UButton
            icon="i-heroicons-plus"
            size="md"
            :to="'/resumes/create'"
            color="amber"
            variant="outline"
            >Добавить резюме</UButton
          >
        </div> -->

        <div
          v-if="employee?.resumes.length"
          class="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <ResumeCard
            v-for="item in employee?.resumes"
            :key="item.id"
            :resume="item"
          />
        </div>
        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="projects" class="bg-gray-100 p-3 rounded-md shadow-2xl">
        <AddSection type="employee" section="projects" />
        <!-- <div class="flex flex-col sm:flex-row justify-between items-center">
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
            Мои проекты
          </h3>
          <UButton
            icon="i-heroicons-plus"
            size="md"
            :to="'/projects/create'"
            color="amber"
            variant="outline"
            >Добавить проект
          </UButton>
        </div> -->
        <div v-if="employee?.projects.length" class="flex gap-3">
          <NuxtLink
            v-for="item in employee?.projects"
            :key="item.id"
            :to="'/projects/' + item.id"
          >
            <UCard class="">
              <template #header>
                <img
                  class="rounded-md inline-block h-52 object-cover w-full cursor-pointer"
                  :src="item.image"
                />
              </template>
              <template #footer>
                <p class="text-center">{{ item.title }}</p>
              </template>
            </UCard>
          </NuxtLink>
        </div>
        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="stacks" class="bg-gray-100 p-3 rounded-md shadow-md">
        <AddSection type="employee" section="stacks" />
        <!-- <div
          class="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-3"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-3">
            Навыки
          </h3>
          <UButton
            icon="i-heroicons-plus"
            size="md"
            color="amber"
            variant="outline"
            >Добавить навык</UButton
          >
        </div> -->
        <div
          v-if="employee?.stacks.length"
          class="flex items-center gap-3 flex-wrap"
        >
          <div v-for="(stack, index) in employee?.stacks" :key="index">
            <UButton disabled class="dark:text-white" size="md" ariant="solid">
              {{ stack }}
            </UButton>
          </div>
        </div>
        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="education" class="bg-gray-100 p-3 rounded-md shadow-md">
        <AddSection type="employee" section="education" />
        <!-- <div
          class="flex flex-col sm:flex-row justify-between items-center mb-3"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-3">
            Образование
          </h3>
          <UButton
            icon="i-heroicons-plus"
            size="md"
            color="amber"
            variant="outline"
            >Добавить образование</UButton
          >
        </div> -->

        <EducationCard
          v-if="employee?.educations.length"
          v-for="edu in employee?.educations"
          :key="edu.id"
          :education="edu"
        />

        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="experience" class="bg-gray-100 p-3 rounded-md shadow-md">
        <AddSection type="employee" section="experience" />
        <!-- <div
          class="flex flex-col sm:flex-row justify-between items-center mb-8"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
            Опыт работы
          </h3>
          <UButton
            icon="i-heroicons-plus"
            size="md"
            color="amber"
            variant="outline"
          >
            Добавить опыт
          </UButton>
        </div> -->

        <ExperienceCard
          v-if="employee?.experiences.length"
          v-for="exp in employee?.experiences"
          :key="exp.id"
          :exp="exp"
        />

        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="about" class="bg-gray-100 rounded-md p-3 shadow-md">
        <EditAboutSection
          v-if="employee"
          :employee="employee"
          v-model="about"
        />
      </section>
    </template>
  </Grid>
</template>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

section {
  @apply dark:bg-transparent dark:shadow-[5px_5px_14px_rgb(248,254,247)];
}
</style>
