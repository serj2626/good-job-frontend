<script lang="ts" setup>
import type { ICategory } from "~/src/shared/api/v1/types/category/category";

interface IExperience {
  id: number;
  company: string;
  position: string;
  full_data: string;
  description: string;
}

defineProps<{ exp: IExperience }>();
</script>
<template>
  <div class="flex gap-6 mb-6 shadow-lg">
    <p class="text-[#637588] w-2/12 text-sm font-normal">
      {{ exp.full_data }}
    </p>
    <div class="flex flex-col gap-y-4 w-10/12">
      <div class="flex flex-1 flex-col justify-center">
        <p class="text-[#111418] text-base font-medium">
          {{ exp.position }}
        </p>
        <p class="text-[#637588] text-sm font-normal">
          {{ exp.company }}
        </p>
      </div>
      <div class="text-[#637588] text-base font-normal">
        {{ exp.description }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
