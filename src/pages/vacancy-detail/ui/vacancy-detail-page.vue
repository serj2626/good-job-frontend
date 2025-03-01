<script setup lang="ts">
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
import { MoneyIcons } from "~/src/shared/types/icons/money-icons";
import { SelectAction } from "~/src/features/select-action";
import type { IVacancy } from "../../vacancy-list/model/vacancy.type";

import { APIRoutes } from "~/src/shared/router/types";

const { $apiFetch } = useNuxtApp();

const config = useRuntimeConfig();
// const { data: vacancy } = await useAsyncData<IVacancy>("vacancy", () =>
//   $fetch(
//     config.public.apiUrl + `/api/companies/vacancy/${useRoute().params.id}/`
//   )
// );

const { data: vacancy } = await useAsyncData<IVacancy>(
  "vacancy-detail-page-data",
  () => $apiFetch(APIRoutes.vacancies.getVacancy(useRoute().params.id as string))
);

const typeCurrency = computed(() => {
  if (vacancy.value?.currency === "RUB") {
    return MoneyIcons.RUB;
  }
  if (vacancy.value?.currency === "USD") {
    return MoneyIcons.USD;
  }
  return MoneyIcons.EUR;
});

const salary = computed(() => {
  if (vacancy.value?.min_salary && vacancy.value?.max_salary) {
    return (
      "от " + vacancy.value?.min_salary + " до " + vacancy.value?.max_salary
    );
  }
  if (vacancy.value?.min_salary) {
    return "от " + vacancy.value?.min_salary;
  }
  if (vacancy.value?.max_salary) {
    return "до " + vacancy.value?.max_salary;
  } else {
    return "Заработная плата не указана";
  }
});

const items = [
  [
    {
      label: "Frontend Developer",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
    {
      label: "Fullstack Developer",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
    {
      label: "Backend Developer",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
];
</script>
<template>
  <div class="px-3 py-8 rounded-md shadow-2xl dark:bg-white">
    <div class="flex flex-col w-3/4 mx-auto relative">
      <div class="flex justify-between items-center gap-3 p-4">
        <p
          class="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72"
        >
          {{ vacancy?.position }}
        </p>
        <SelectAction action="resume" />
      </div>
      <div
        class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between"
      >
        <div class="flex items-center gap-4">
          <div
            class="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
            data-icon="Buildings"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path
                d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <NuxtLink
              :to="{
                name: 'companies-id',
                params: { id: vacancy?.company.id },
              }"
              class="text-[#111418] text-base font-medium leading-normal line-clamp-1"
            >
              {{ vacancy?.company.name }}
            </NuxtLink>
            <p
              class="text-[#637588] text-sm font-normal leading-normal line-clamp-2"
            >
              {{ vacancy?.work_schedule }}
            </p>
          </div>
        </div>
        <div class="">
          <div class="text-[#111418] text-base font-normal flex items-center">
            {{ salary }}
            <Icon :name="typeCurrency" class="w-5 h-5" color="#111418" />
          </div>
        </div>
      </div>
      <section id="description">
        <h3
          class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
        >
          Описание
        </h3>
        <p
          class="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4"
        >
          {{
            vacancy?.description ? vacancy?.description : "Описание отсутствует"
          }}
        </p>
      </section>
      <section id="requirements">
        <h3
          class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
        >
          Требования
        </h3>
        <p
          class="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4"
        >
          {{
            vacancy?.description ? vacancy?.description : "Описание отсутствует"
          }}
        </p>
      </section>
      <section id="stacks">
        <h3
          class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
        >
          Необходимые навыки
        </h3>
        <div class="flex flex-wrap items-center gap-2 px-4">
          <UButton
            v-for="(skill, index) in vacancy?.stacks"
            :key="index"
            disabled
            color="gray"
            size="md"
            ariant="solid"
          >
            {{ skill }}
          </UButton>
        </div>
      </section>

      <section id="contacts">
        <h3
          class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 my-4"
        >
          Контакты
        </h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-6 px-4">
            <Icon :name="HeroIcons.PHONE" class="w-5 h-5 ps-4" />
            <p class="text-[#111418] text-base font-normal leading-normal">
              {{ vacancy?.company.phone }}
            </p>
          </div>
          <div class="flex items-center gap-6 px-4">
            <Icon :name="HeroIcons.MAIL" class="w-5 h-5 ps-4" />
            <p class="text-[#111418] text-base font-normal leading-normal">
              {{ vacancy?.company.user.email }}
            </p>
          </div>
          <div class="flex items-center gap-6 px-4">
            <Icon :name="HeroIcons.LINK" class="w-5 h-5 ps-4" />
            <p class="text-[#111418] text-base font-normal leading-normal">
              {{
                vacancy?.company.site ? vacancy?.company.site : "Сайт не указан"
              }}
            </p>
          </div>
        </div>
      </section>
      <section id="info">
        <div class="flex flex-wrap gap-3 items-center my-10 px-4 pb-10">
          <UButton
            v-if="vacancy?.level"
            disabled
            color="rose"
            size="sm"
            variant="outline"
          >
            {{ vacancy?.level }}
          </UButton>
          <UButton
            v-if="vacancy?.work_experience"
            disabled
            color="rose"
            size="sm"
            variant="outline"
          >
            Требуемый стаж: от {{ vacancy?.work_experience }} лет
          </UButton>
          <UButton
            v-if="vacancy?.work_schedule"
            disabled
            color="rose"
            size="sm"
            variant="outline"
          >
            {{ vacancy?.work_schedule }}
          </UButton>
          <UButton
            v-if="vacancy?.category"
            disabled
            color="rose"
            size="sm"
            variant="outline"
          >
            {{ vacancy?.category }}
          </UButton>
          <UButton
            v-if="vacancy?.country"
            disabled
            color="rose"
            size="sm"
            variant="outline"
          >
            {{ vacancy?.country }}
          </UButton>
          <UButton
            v-if="vacancy?.city"
            disabled
            color="rose"
            size="sm"
            variant="outline"
          >
            {{ vacancy?.city }}
          </UButton>
          <UButton
            disabled
            v-if="vacancy?.metro"
            color="rose"
            size="sm"
            variant="outline"
          >
            Метро: {{ vacancy?.metro }}
          </UButton>
        </div>
      </section>
      <UDropdown
        :items="items"
        mode="click"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          color="sky"
          size="md"
          class="dark:text-white"
          label="Откликнуться"
          :trailing-icon="HeroIcons.CHEVRON_DOWN"
        />
      </UDropdown>
      <p class="absolute bottom-0 right-[50%] translate-x-[50%]">
        Опубликовано: {{ vacancy?.time_ago }} назад
      </p>
    </div>
  </div>
</template>
