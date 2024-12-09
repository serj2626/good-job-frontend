<script setup lang="ts">
import Editor from "primevue/editor";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
import Grid from "~/src/shared/ui/grid/Grid.vue";
import { Employee } from "~/src/widgets/employee";

import type { IEmployee } from "../model/employee.type";
import ResumeCard from "./ResumeCard.vue";
import EducationCard from "./EducationCard.vue";
import ExperienceCard from "./ExperienceCard.vue";

const config = useRuntimeConfig();
const { data: employee } = await useAsyncData<IEmployee>("employee", () =>
  $fetch(config.public.apiUrl + `/api/employees/${useRoute().params.id}/`)
);

const showModal = ref<boolean>(false);
const selectRequir = ref<string>("");

const setRequirements = (data: string) => {
  alert(data);
  showModal.value = true;
  selectRequir.value = data;
};
const setDescription = (data: string) => {
  alert(data);
  showModal.value = true;
  selectRequir.value = data;
};

const deleteExperience = (id: number) => {
  showModal.value = true;
};

const about = ref<string>("");
const showEditor = ref<boolean>(false);
</script>
<template>
  <Grid>
    <template #left>
      <Employee :employee="employee" v-if="employee" />
    </template>
    <template #right>
      <section id="resumes" class="bg-gray-100 p-3 rounded-md shadow-2xl">
        <div
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
        </div>

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
        <div class="flex flex-col sm:flex-row justify-between items-center">
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
        </div>
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
        <div
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
        </div>
        <div
          v-if="employee?.stacks.length"
          class="flex items-center gap-3 flex-wrap"
        >
          <div v-for="(stack, index) in employee?.stacks" :key="index">
            <UButton disabled color="teal" size="md" ariant="solid">
              {{ stack }}</UButton
            >
          </div>
        </div>
        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="education" class="bg-gray-100 p-3 rounded-md shadow-md">
        <div
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
        </div>

        <EducationCard
          v-if="employee?.educations.length"
          v-for="edu in employee?.educations"
          :key="edu.id"
          :education="edu"
        />

        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="experience" class="bg-gray-100 p-3 rounded-md shadow-md">
        <div
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
        </div>

        <ExperienceCard
          v-if="employee?.experiences.length"
          v-for="exp in employee?.experiences"
          :key="exp.id"
          :exp="exp"
        />

        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="about" class="bg-gray-100 rounded-md shadow-md">
        <Transition name="fade" mode="out-in">
          <Editor
            v-if="showEditor"
            v-model="about"
            editorStyle="height: 320px"
            :autoResize="true"
          />
        </Transition>
        <div class="p-3">
          <div
            class="flex flex-col sm:flex-row justify-between items-center mb-3"
          >
            <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
              Обо мне
            </h3>
            <UButton
              v-if="!showEditor"
              @click="showEditor = !showEditor"
              :icon="
                !employee?.about ? 'i-heroicons-plus' : 'i-heroicons-pencil'
              "
              size="md"
              :color="employee?.about ? 'teal' : 'amber'"
              variant="outline"
            >
              {{ employee?.about ? "Редактировать" : "Добавить" }}
            </UButton>
            <div v-else class="flex gap-3">
              <UButton
                @click="showEditor = !showEditor"
                :icon="HeroIcons.CHECK"
                size="md"
                color="green"
                variant="outline"
              >
                Сохранить
              </UButton>
              <UButton
                @click="showEditor = !showEditor"
                :icon="HeroIcons.X_MARK"
                size="md"
                color="red"
                variant="outline"
              >
                Закрыть
              </UButton>
            </div>
          </div>
          <ClientOnly>
            <p class="tracking-wide about">
              {{
                employee?.about
                  ? employee?.about
                  : "Пользователь не указал информацию о себе...."
              }}
            </p>
          </ClientOnly>
        </div>
      </section>
    </template>
  </Grid>
</template>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
