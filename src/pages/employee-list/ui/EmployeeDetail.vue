<script setup lang="ts">
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

import type { IEmployee } from "../../employee-detail/model/employee.type";

const { employee } = defineProps<{ employee: IEmployee }>();

const avatar = computed(() =>
  employee.avatar ? employee.avatar : "/image/user_none.png"
);
</script>
<template>
  <div class="flex flex-col gap-5 mb-6">
    <div class="flex justify-between items-center">
      <div class="flex gap-4">
        <UAvatar
          chip-color="emerald"
          chip-text="В сети"
          chip-position="top-right"
          size="3xl"
          :src="avatar"
          :alt="employee.first_name + ' ' + employee.last_name"
        />
        <div class="flex flex-col justify-center">
          <p
            class="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]"
          >
            {{ employee.first_name }} {{ employee.last_name }}
          </p>
          <p class="text-[#637588] text-base font-normal leading-normal">
            {{ employee.position }}
          </p>
          <p class="text-[#919ba3] text-base font-normal leading-normal">
            {{ employee.city }} / {{ employee.country }}
          </p>
        </div>
      </div>
      <div>
        <UButton
          :to="`/employees/${employee.id}`"
          label="Профиль"
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
