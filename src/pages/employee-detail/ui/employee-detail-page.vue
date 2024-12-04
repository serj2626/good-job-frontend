<script setup lang="ts">
import type { IEmployee } from "../model/employee.type";
import { BootstrapIcons } from "~/src/shared/types/icons/bootstrap-icons";
const config = useRuntimeConfig();
const {
  data: employee,
  pending,
  error,
  refresh,
} = await useAsyncData<IEmployee>("employee", () =>
  $fetch(config.public.apiUrl + `/api/employees/${useRoute().params.id}/`)
);

const showModal = ref<boolean>(false);
const selectDescr = ref<string>("");
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
  <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,300px),1fr] gap-5">
    <div class="left-block flex flex-col gap-6">
      <section
        id="profile"
        class="relative bg-gray-100 text-center shadow-md p-3"
      >
        <UButton
          v-if="employee?.user.online"
          class="absolute top-2 right-2"
          color="green"
          size="md"
          variant="solid"
          label="В сети"
          disabled
        />
        <UButton
          class="absolute top-2 right-2"
          v-else
          color="red"
          size="md"
          variant="solid"
          label="Не в сети"
          disabled
        />
        <div class="flex justify-between items-center mb-2">
          <p class="text-base font-bold px-4 pb-2 text-start text-teal-500">
            Ищу работу
          </p>
        </div>

        <img :src="employee?.avatar" class="mt-6 rounded-sm" />
        <h3 class="text-[#111418] text-2xl font-bold px-4 pb-2 pt-4 mb-3">
          {{ employee?.first_name }} {{ employee?.last_name }}
        </h3>
        <p class="text-[#111418] text-base font-normal px-4 pb-2 mb-4">
          {{ employee?.position }}
        </p>
        <div class="flex flex-col gap-2">
          <UButton
            class="flex justify-center"
            size="xl"
            variant="solid"
            label="Подружиться"
            loading
          />
          <UButton
            class="flex justify-center"
            size="xl"
            color="blue"
            variant="solid"
            label="Написать"
            icon="i-heroicons-chat-bubble-left-right"
          />
        </div>
      </section>

      <section id="contacts" class="bg-gray-100 shadow-md p-3">
        <h4 class="text-[#111418] text-lg font-bold mb-3 pb-2">Контакты</h4>
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <Icon :name="BootstrapIcons.PHONE" class="w-5 h-5 text-amber-800" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              {{ employee?.phone }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon :name="BootstrapIcons.GITHUB" class="w-5 h-5" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              Github
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon
              :name="BootstrapIcons.GITLAB"
              class="w-5 h-5 text-rose-600"
            />
            <p class="text-[#111418] text-base font-medium leading-normal">
              Gitlab
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon :name="BootstrapIcons.MAIL" class="w-5 h-5 text-sky-500" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              {{ employee?.user.email }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon
              :name="BootstrapIcons.LINKEDIN"
              class="w-5 h-5 text-sky-700"
            />
            <p class="text-[#111418] text-base font-medium leading-normal">
              serj2626
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon
              :name="BootstrapIcons.TELEGRAM"
              class="w-5 h-5 text-sky-700"
            />
            <p class="text-[#111418] text-base font-medium leading-normal">
              Telegram
            </p>
          </div>
        </div>
      </section>
      <section id="info" class="bg-gray-100 shadow-md flex flex-col gap-2 p-3">
        <h4 class="text-[#111418] text-lg font-bold pb-2 mb-3">
          Доп. информация
        </h4>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Возраст</span>
          <p>{{ employee?.age }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Страна</span>
          <p>{{ employee?.country }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Город</span>
          <p>{{ employee?.city }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Пол</span>
          <p>{{ employee?.gender }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Опыт</span>
          <p>3 года</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Мои резюме</span>
          <p>{{ employee?.resumes.length }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Проекты</span>
          <p>{{ employee?.projects.length }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Друзья</span>
          <p>{{ employee?.user.count_friends }}</p>
        </div>
      </section>
    </div>
    <main id="right" class="right-block flex flex-col gap-8">
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
          <NuxtLink
            v-for="item in employee?.resumes"
            :key="item.id"
            :to="{ name: 'resumes-id', params: { id: item.id } }"
          >
            <UCard
              class="hover:scale-105 transition-all duration-200 cursor-pointer ease-in"
            >
              <template #header>
                <img
                  class="rounded-md inline-block h-52 object-center w-full"
                  :src="item.avatar"
                />
              </template>
              <template #footer>
                <p class="text-center">{{ item.position }}</p>
              </template>
            </UCard>
          </NuxtLink>
        </div>
        <div v-else>Данные отсутствуют....</div>
      </section>
      <section id="projects" class="bg-gray-100 p-3 rounded-md shadow-2xl">
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-3"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
            Мои проекты
          </h3>
          <UButton
            icon="i-heroicons-plus"
            size="md"
            :to="'/projects/create'"
            color="amber"
            variant="outline"
            >Добавить проект</UButton
          >
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
    </main>
    <UModal v-model="showModal" :overlay="false">
      <UCard>
        <template #header>
          <h3 class="text-[#111418] text-lg font-bold">
            Вы действительно хотите удалить ?
          </h3>
        </template>

        <template #footer>
          <div class="flex justify-between">
            <UButton
              color="gray"
              size="md"
              variant="solid"
              @click="showModal = false"
              icon="i-heroicons-x-mark"
              >Отменить
            </UButton>
            <UButton
              color="red"
              size="md"
              variant="solid"
              icon="i-heroicons-trash"
              @click="showModal = false"
              >Удалить
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
