<script lang="ts" setup>
interface IEducation {
  id: number;
  university: string;
  specialization: string;
  full_data: string;
  type: string;
}

defineProps<{ edu: IEducation }>();
</script>
<template>
  <div class="flex gap-6 my-6 shadow-md">
    <p class="text-[#637588] w-2/12 text-sm font-normal">
      {{ edu.full_data }}
    </p>
    <div class="flex flex-col gap-y-4 w-10/12 flex-grow">
      <p class="text-[#111418] text-base font-medium">
        {{ edu.university }}
      </p>
      <p class="text-[#637588] text-sm font-normal">
        {{ edu.specialization }}
      </p>
      <UButton class="" disabled size="sm" variant="solid" color="amber">
        {{ edu.type }}</UButton
      >
    </div>
  </div>
</template>
