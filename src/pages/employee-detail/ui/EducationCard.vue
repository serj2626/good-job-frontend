<script lang="ts" setup>
import { SelectAction } from "~/src/features/select-action";

interface IEducation {
  id: number;
  type: string;
  university: string;
  specialization: string;
  start_date: Date;
  end_date: Date;
}

defineProps<{
  education: IEducation;
}>();
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col ps-3 gap-5 py-5 border-b border-slate-300">
      <div class="flex justify-between items-center">
        <p>
          <span class="bg-slate-200 data__info rounded-2xl px-3 py-2 me-4"
            >Тип:
          </span>
          {{ education.type }}
        </p>
        <SelectAction action="section" />
      </div>

      <p>
        <span class="bg-slate-200 data__info rounded-2xl px-3 py-2 me-4"
          >Учебное заведение:
        </span>
        {{ education.university }}
      </p>
      <p>
        <span class="bg-slate-200 data__info rounded-2xl px-3 py-2 me-4"
          >Специализация:
        </span>
        {{ education.specialization }}
      </p>
      <p>
        <span class="bg-slate-200 data__info rounded-2xl px-3 py-2 me-4"
          >Начало обучения:
        </span>
        {{ education.start_date }}
      </p>
      <p>
        <span class="bg-slate-200 data__info rounded-2xl px-3 py-2 me-4"
          >Окончание:
        </span>
        {{ education.end_date ? education.end_date : "по настоящее время" }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.data__info {
  @apply bg-slate-200 dark:bg-neutral-700 dark:text-white rounded-2xl px-3 py-2;
}
</style>
