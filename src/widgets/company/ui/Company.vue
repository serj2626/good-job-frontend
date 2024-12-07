<script lang="ts" setup>
 import type { ICompany } from '~/src/pages/company-detail/model/company.type';
import { BootstrapIcons } from '~/src/shared/types/icons/bootstrap-icons';

defineProps<{ company: ICompany }>();
</script>

<template>
       <section
        id="profile"
        class="relative bg-gray-100 text-center shadow-md p-3"
      >
        <div class="flex justify-between items-center">
          <span v-if="company?.is_verified" class="text-green-500"
            >Проверена
            <Icon
              :name="BootstrapIcons.CHECK_COMPANY"
              class="w-6 h-6 text-green-500"
            />
          </span>
          <span v-else class="text-red-600">Не проверена</span>
          <UButton
            v-if="company?.user.online"
            color="green"
            size="md"
            variant="solid"
            label="В сети"
            disabled
          />
          <UButton
            v-else
            color="red"
            size="md"
            variant="solid"
            label="Не в сети"
            disabled
          />
        </div>

        <img
          :src="company?.avatar"
          :alt="company?.name"
          class="rounded-xl mb-2 mt-3"
        />
        <h3 class="text-[#111418] text-2xl font-bold px-4 pb-2 pt-4 mb-3">
          {{ company?.full_name }}
        </h3>
        <div
          class="text-[#111418] text-base font-normal mb-4 flex justify-center items-center gap-2"
        >
          {{ company?.user.type }}
        </div>
        <UButton size="xl" loading color="teal" variant="solid">
          Подружиться
        </UButton>
      </section>
      <section id="info" class="bg-gray-100 shadow-md flex flex-col gap-3 p-3">
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Страна:</span>
          <p>{{ company?.country }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Город:</span>
          <p>{{ company?.city }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Почта:</span>
          <p>{{ company?.user.email }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Телефон:</span>
          <p>{{ company?.phone }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2"
            >Кол-во сотрудников</span
          >
          <p>{{ company?.count_employees }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2"
            >Кол-во вакансий</span
          >
          <p>{{ company?.vacancies.length }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Кол-во друзей</span>
          <p>26</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Сайт</span>
          <p>{{ company?.site || "Не указан" }}</p>
        </div>
      </section>
</template>