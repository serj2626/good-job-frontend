<script lang="ts" setup>
import ExperienceCard from './ExperienceCard.vue';

interface ICategory {
  id: number;
  name: string;
  slug: string;
}
interface IExperience {
  company: string;
  position: string;
  stacks: string[];
  start_date: string;
  end_date: string;
  category: ICategory;
  description: string;
  requirements: string;
}

const { experiences } = defineProps<{ experiences: IExperience[] }>();
</script>

<template>
  <section id="experience" class="bg-gray-100 p-3 rounded-md shadow-md">
    <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
      <h3 class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4 mb-4">
        Опыт работы
      </h3>
      <UButton
        icon="i-heroicons-plus"
        size="md"
        color="amber"
        variant="outline"
      >
        Добавить опыт
      </UButton>
    </div>

    <ExperienceCard
      v-if="experiences.length"
      v-for="(exp, index) in experiences"
      :key="index"
      :exp="exp"
    />

    <div v-else>Данные отсутствуют....</div>
  </section>
</template>

<style lang="scss" scoped></style>
