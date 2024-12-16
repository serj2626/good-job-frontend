<script lang="ts" setup>
import EducationCard from "./EducationCard.vue";

interface IEducation {
  id: number;
  type: string;
  university: string;
  specialization: string;
  start_date: Date;
  end_date: Date;
}

const { educations } = defineProps<{ educations: IEducation[] }>();
</script>

<template>
  <section id="education" class="bg-gray-100 p-3 rounded-md shadow-md">
    <div class="flex flex-col sm:flex-row justify-between items-center mb-3">
      <h3 class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4 mb-3">
        Образование
      </h3>
      <UButton icon="i-heroicons-plus" size="md" color="amber" variant="outline"
        >Добавить образование</UButton
      >
    </div>

    <EducationCard
      v-if="educations.length"
      v-for="edu in educations"
      :key="edu.id"
      :education="edu"
    />

    <div v-else>Данные отсутствуют....</div>
  </section>
</template>

<style lang="scss" scoped></style>
