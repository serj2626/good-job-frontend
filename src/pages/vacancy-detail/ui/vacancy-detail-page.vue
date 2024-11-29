<script setup lang="ts">
import type { IVacancy } from "../../vacancy-list/model/vacancy.type";

const config = useRuntimeConfig();
const {
  data: vacancy,
  pending,
  error,
  refresh,
} = await useAsyncData<IVacancy>("vacancy", () =>
  $fetch(
    config.public.apiUrl + `/api/companies/vacancy/${useRoute().params.id}/`
  )
);
</script>
<template>
  <div class="px-3 py-8 shadow-2xl">
    <div class="flex flex-col w-3/4 mx-auto relative">
      <div class="flex justify-between items-center gap-3 p-4">
        <p
          class="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72"
        >
          {{ vacancy?.position }}
        </p>
        <UButton size="md" label="Откликнуться" color="sky" />
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
            :to="{name: 'companies-id', params: {id: vacancy?.company.id}}"
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
          <p class="text-[#111418] text-base font-normal leading-normal">
            {{ vacancy?.min_salary }} - {{ vacancy?.max_salary }} ₽
          </p>
        </div>
      </div>
      <section id="description" class="">
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
        <div class="flex flex-wrap items-center gap-x-2 px-4">
          <UButton
            v-for="(skill, index) in vacancy?.stacks"
            :key="index"
            disabled
            color="teal"
            size="md"
            ariant="solid"
          >
            {{ skill }}</UButton
          >
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
            <Icon
              name="i-heroicons-phone"
              class="w-5 h-5 ps-4"
              color="#111418"
            />
            <p class="text-[#111418] text-base font-normal leading-normal">
              {{ vacancy?.company.phone }}
            </p>
          </div>
          <div class="flex items-center gap-6 px-4">
            <Icon
              name="i-heroicons-envelope"
              class="w-5 h-5 ps-4"
              color="#111418"
            />
            <p class="text-[#111418] text-base font-normal leading-normal">
              {{ vacancy?.company.user.email }}
            </p>
          </div>
          <div class="flex items-center gap-6 px-4">
            <Icon
              name="i-heroicons-link"
              class="w-5 h-5 ps-4"
              color="#111418"
            />
            <p class="text-[#111418] text-base font-normal leading-normal">
              {{
                vacancy?.company.site ? vacancy?.company.site : "Сайт не указан"
              }}
            </p>
          </div>
        </div>
      </section>
      <section id="info">
        <div class="flex flex-wrap gap-3 items-center my-10 px-4">
          <UButton color="fuchsia" size="sm" variant="solid">
            {{vacancy?.level}}
          </UButton>
          <UButton color="fuchsia" size="sm" variant="solid">
            Требуемый стаж: от {{vacancy?.work_experience}} лет
          </UButton>
          <UButton color="fuchsia" size="sm" variant="solid">
            {{vacancy?.work_schedule}}
          </UButton>
          <UButton color="fuchsia" size="sm" variant="solid">
            {{vacancy?.category}}
          </UButton>
          <UButton color="fuchsia" size="sm" variant="solid">
            {{vacancy?.country}}
          </UButton>
          <UButton color="fuchsia" size="sm" variant="solid">
            {{vacancy?.city}}
          </UButton>
          <UButton v-if="vacancy?.metro" color="fuchsia" size="sm" variant="solid">
            Метро: {{vacancy?.metro }}
          </UButton>
        </div>
      </section>
      <p class="absolute bottom-0 right-0">
        Опубликовано: {{ vacancy?.time_ago }} назад
      </p>
    </div>
  </div>
</template>
