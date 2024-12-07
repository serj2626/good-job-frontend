<script setup lang="ts">
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
import type { IEmployee } from "../../employee-detail/model/employee.type";

defineProps<{ employee: IEmployee }>();
</script>
<template>
  <div class="flex flex-col gap-5 mb-6">
    <div class="flex justify-between items-center">
      <div class="flex gap-4">
        <div
          class="outline-double outline-offset-2 outline-6 outline-green-400 bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24"
          :style="'background-image: url(' + employee.avatar + ');'"></div>
        <div class="flex flex-col justify-center">
          <p class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">
            {{ employee.first_name }} {{ employee.last_name }}
          </p>
          <p class="text-[#637588] text-base font-normal leading-normal">
            {{ employee.position }}
          </p>
          <p class="text-[#73808d] text-base font-normal leading-normal">
            {{ employee.city }} / {{ employee.country }}
          </p>
        </div>
      </div>
      <div>
        <UButton :to="`/employees/${employee.id}`" label="Профиль" :icon="HeroIcons.EYE_20_SOLID" color="gray"
          variant="solid" size="lg" />
      </div>
    </div>
  </div>
</template>
