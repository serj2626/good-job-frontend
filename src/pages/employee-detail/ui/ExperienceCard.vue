<script lang="ts" setup>
interface IExperience {
  company: string;
  position: string;
  stacks: string[];
  start_date: string;
  end_date: string;
}

defineProps<{ exp: IExperience }>();
</script>

<template>
  <div class="flex flex-col gap-4 border-b border-slate-300 py-3">
    <div class="flex items-center justify-between">
      <h4 class="ps-3">
        <span class="font-bold">{{ exp.company }}</span> -
        {{ exp.position }}
      </h4>
      <div class="flex gap-2">
        <UButton size="md" color="red" variant="outline">Требования </UButton>
        <UButton size="md" color="indigo" variant="outline">Описание </UButton>
      </div>
    </div>
    <p>
      <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4"
        >Начало работы:
      </span>
      {{ exp.start_date }}
    </p>
    <p>
      <span class="bg-slate-200 rounded-2xl px-3 py-2 me-4">Окончание: </span>
      {{ exp.end_date ? exp.end_date : "по настоящее время" }}
    </p>
    <div class="flex items-center gap-3 flex-wrap">
      <div v-for="(stack, index) in exp.stacks" :key="index">
        <UButton disabled color="cyan" size="md" ariant="solid">
          {{ stack }}
        </UButton>
      </div>
    </div>
    <div class="flex gap-3 ps-3 mt-4">
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
</template>

<style lang="scss" scoped></style>
