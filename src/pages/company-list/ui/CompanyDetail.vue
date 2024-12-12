<script setup lang="ts">
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

import type { ICompany } from "../../company-detail/model/company.type";

const { company } = defineProps<{ company: ICompany }>();

const avatar = computed(() =>
  company.avatar ? company.avatar : "/image/company_none.png"
);
</script>
<template>
  <div class="flex flex-col gap-5 mb-6">
    <div class="flex justify-between items-center">
      <div class="flex gap-4">
        <div
          class="outline-double outline-offset-2 outline-green-400 relative bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24"
          :style="'background-image: url(' + avatar + ');'"
        ></div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]"
          >
            {{ company.full_name }}
          </p>
          <p class="text-[#637588] text-base font-normal leading-normal">
            {{ company.city }} / {{ company.country }}
          </p>
          <p class="text-[#637588] text-base font-normal leading-normal">
            {{ company.count_vacancies }} вакансий
          </p>
        </div>
      </div>
      <div>
        <UButton
          :to="{ name: 'companies-id', params: { id: company.id } }"
          label="Подробнее"
          :icon="HeroIcons.EYE_20_SOLID"
          class="dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200"
          color="gray"
          variant="solid"
          size="lg"
        />
      </div>
    </div>
  </div>
</template>
