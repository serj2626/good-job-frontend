<script lang="ts" setup>
import type { IResume } from '../model/employee.type';

defineProps<{ resume: IResume }>();
</script>

<template>
  <NuxtLink :to="{ name: 'resumes-id', params: { id: resume.id } }">
    <UCard
      class="hover:scale-105 transition-all duration-200 cursor-pointer ease-in"
    >
      <template #header>
        <img
          class="rounded-md inline-block h-52 object-center w-full"
          :src="resume.avatar"
        />
      </template>
      <template #footer>
        <p class="text-center">{{ resume.position }}</p>
      </template>
    </UCard>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
