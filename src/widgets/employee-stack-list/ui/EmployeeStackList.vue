<script lang="ts" setup>
defineProps<{ stacks: string[] }>();
</script>

<template>
  <section id="stacks" class="bg-gray-100 p-3 rounded-md shadow-md">
    <div
      class="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-3"
    >
      <h3 class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4 mb-3">
        Навыки
      </h3>
      <UButton icon="i-heroicons-plus" size="md" color="amber" variant="outline"
        >Добавить навык</UButton
      >
    </div>
    <div v-if="stacks.length" class="flex items-center gap-3 flex-wrap">
      <div v-for="(stack, index) in stacks" :key="index">
        <UButton disabled class="dark:text-white" size="md" ariant="solid">
          {{ stack }}
        </UButton>
      </div>
    </div>
    <div v-else>Данные отсутствуют....</div>
  </section>
</template>

<style lang="scss" scoped></style>
