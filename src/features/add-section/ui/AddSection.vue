<script lang="ts" setup>
const emit = defineEmits(["add-section"]);
enum SectionEnum {
  experience = "Опыт работы",
  education = "Обучение",
  stacks = "Навыки",
  projects = "Проекты",
  resumes = "Резюме",
  vacancies = "Вакансии",
}

type SectionType =
  | "experience"
  | "education"
  | "stacks"
  | "projects"
  | "resumes"
  | "vacancies";

defineProps<{
  section: SectionType;
  type: "employee" | "company";
}>();
</script>

<template>
  <div class="flex flex-col sm:flex-row justify-between items-center mb-3">
    <h3 class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4 mb-3">
      {{ SectionEnum[section] }}
    </h3>
    <UButton icon="i-heroicons-plus" size="md" color="amber" variant="outline"
      >Добавить {{ SectionEnum[section].toLocaleLowerCase() }}
    </UButton>
  </div>
</template>
