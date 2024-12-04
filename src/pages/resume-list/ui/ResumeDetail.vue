<script setup lang="ts">
import type { IResume } from "../../employee-detail/model/employee.type";

defineProps<{ resume: IResume }>();
</script>
<template>
  <NuxtLink :to="{ name: 'resumes-id', params: { id: resume.id } }">
    <UCard class="transition-all duration-300 ease-in hover:scale-105 hover:shadow-2xl">
      <template #header>
        <NuxtImg
          class="h-56 w-full rounded-md object-cover mx-auto"
          :src="resume.avatar"
        />
      </template>
      <template #footer>
        <div class="flex flex-col gap-2 text-black">
          {{ resume.position }}
        </div>
      </template>
    </UCard>
  </NuxtLink>
</template>
