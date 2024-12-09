<script lang="ts" setup>
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
      <p>
        <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4">Тип: </span>
        {{ education.type }}
      </p>
      <p>
        <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
          >Учебное заведение:
        </span>
        {{ education.university }}
      </p>
      <p>
        <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
          >Специализация:
        </span>
        {{ education.specialization }}
      </p>
      <p>
        <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
          >Начало обучения:
        </span>
        {{ education.start_date }}
      </p>
      <p>
        <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4">Окончание: </span>
        {{ education.end_date ? education.end_date : "по настоящее время" }}
      </p>
      <div class="flex gap-3 ps-3">
        <Icon
          name="i-heroicons-pencil-square"
          class="cursor-pointer text-green-600"
          size="24"
        />
        <Icon
          name="i-heroicons-trash"
          class="cursor-pointer text-red-600"
          size="24"
        />
      </div>
    </div>
  </div>
</template>
