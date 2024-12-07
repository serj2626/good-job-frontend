<script setup lang="ts">
import { Employee } from "~/src/widgets/employee";
import type { IEmployee } from "../model/employee.type";
import Grid from "~/src/shared/ui/grid/Grid.vue";
import ResumeCard from "./ResumeCard.vue";
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

const deleteEducation = (id: number) => {
  showModal.value = true;
};

const deleteExperience = (id: number) => {
  showModal.value = true;
};
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

        <div v-if="employee?.educations.length" class="flex flex-col gap-3">
          <div
            v-for="edu in employee?.educations"
            :key="edu.id"
            class="flex flex-col ps-3 gap-5 py-5 border-b border-slate-300"
          >
            <p>
              <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4">Тип: </span>
              {{ edu.type }}
            </p>
            <p>
              <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
                >Учебное заведение:
              </span>
              {{ edu.university }}
            </p>
            <p>
              <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
                >Специализация:
              </span>
              {{ edu.specialization }}
            </p>
            <p>
              <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
                >Начало обучения:
              </span>
              {{ edu.start_date }}
            </p>
            <p>
              <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
                >Окончание:
              </span>
              {{ edu.end_date ? edu.end_date : "по настоящее время" }}
            </p>
            <div class="flex gap-3 ps-3">
              <Icon
                name="i-heroicons-pencil-square"
                class="cursor-pointer text-green-600"
                size="24"
              />
              <Icon
                @click="deleteEducation(edu.id)"
                name="i-heroicons-trash"
                class="cursor-pointer text-red-600"
                size="24"
              />
            </div>
          </div>
        </div>
        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="experience" class="bg-gray-100 p-3 rounded-md shadow-md">
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-3"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
            Опыт работы
          </h3>
          <UButton
            icon="i-heroicons-plus"
            size="md"
            color="amber"
            variant="outline"
            >Добавить опыт</UButton
          >
        </div>
        <div v-if="employee?.experiences.length" class="flex flex-col gap-2">
          <div v-for="exp in employee?.experiences" :key="exp.id">
            <div class="flex flex-col gap-4 border-b border-slate-300 py-3">
              <div class="flex items-center justify-between">
                <h4 class="ps-3">
                  <span class="font-bold">{{ exp.company }}</span> -
                  {{ exp.position }}
                </h4>
                <div class="flex gap-2">
                  <UButton
                    @click="setRequirements(exp.requirements)"
                    size="md"
                    color="red"
                    variant="outline"
                    >Требования
                  </UButton>
                  <UButton
                    @click="setDescription(exp.description)"
                    size="md"
                    color="indigo"
                    variant="outline"
                    >Описание
                  </UButton>
                </div>
              </div>
              <p>
                <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
                  >Начало работы:
                </span>
                {{ exp.start_date }}
              </p>
              <p>
                <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
                  >Окончание:
                </span>
                {{ exp.end_date ? exp.end_date : "по настоящее время" }}
              </p>
              <div class="flex items-center gap-3 flex-wrap">
                <div v-for="(stack, index) in exp.stacks" :key="index">
                  <UButton disabled color="cyan" size="md" ariant="solid">
                    {{ stack }}
                  </UButton>
                </div>
              </div>
              <div class="flex gap-3 ps-3 mt-4">
                <Icon
                  name="i-heroicons-pencil-square"
                  class="cursor-pointer text-green-600"
                  size="24"
                />
                <Icon
                  @click="deleteExperience(exp.id)"
                  name="i-heroicons-trash"
                  class="cursor-pointer text-red-600"
                  size="24"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="about" class="bg-gray-100 p-3 rounded-md shadow-md">
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-3"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
            Обо мне
          </h3>
          <UButton
            :icon="!employee?.about ? 'i-heroicons-plus' : 'i-heroicons-pencil'"
            size="md"
            :color="employee?.about ? 'teal' : 'amber'"
            variant="outline"
          >
            {{ employee?.about ? "Редактировать" : "Добавить" }}
          </UButton>
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
      </section>
    </template>
  </Grid>
</template>
