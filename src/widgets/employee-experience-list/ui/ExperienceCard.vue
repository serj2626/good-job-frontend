<script lang="ts" setup>
import { SelectAction } from '~/src/features/select-action';


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

const { exp } = defineProps<{ exp: IExperience }>();

let itemsAccordion = [
  {
    label: "Требования",
    content: exp.requirements,
  },
  {
    label: "Подробное описание",
    content: exp.description,
  },
];

</script>

<template>
  <div
    class="flex flex-col gap-6 border-b border-slate-300 px-3 py-5 shadow-md"
  >
    <div class="flex items-center justify-between">
      <h4 class="">
        <span class="font-bold">{{ exp.company }}</span> -
        {{ exp.position }}
      </h4>
      <SelectAction action="section" />
    </div>
    <p>
      <span class="bg-slate-200  data__info rounded-2xl px-3 py-2 me-4">Категория: </span>
      {{ exp.category.name }}
    </p>
    <p>
      <span class="bg-slate-200 data__info rounded-2xl px-3 py-2 me-4"
        >Начало работы:
      </span>
      {{ exp.start_date }}
    </p>
    <p>
      <span class="bg-slate-200 data__info rounded-2xl px-3 py-2 me-4">Окончание: </span>
      {{ exp.end_date ? exp.end_date : "по настоящее время" }}
    </p>
    <div class="flex items-center gap-3 flex-wrap my-5">
      <div v-for="(stack, index) in exp.stacks" :key="index">
        <UButton disabled color="white" size="lg" ariant="solid">
          {{ stack }}
        </UButton>
      </div>
    </div>

    <UAccordion
      multiple
      color="gray"
      size="md"
      variant="ghost"
      :items="itemsAccordion"
    />
  </div>
</template>
<style scoped lang="scss">
.data__info {
  @apply bg-slate-200 dark:bg-neutral-700 dark:text-white rounded-2xl px-3 py-2;
}
</style>
