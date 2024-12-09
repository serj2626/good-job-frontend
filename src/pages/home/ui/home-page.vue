<script setup lang="ts">
const config = useRuntimeConfig();
const { data: categories } = await useFetch(
  config.public.apiUrl + "/api/category"
);
</script>
<template>
  <div class="flex flex-col justify-center items-center gap-8">
    <div class="flex min-w-72 flex-col gap-3 items-center">
      <p
        class="text-[#111418] dark:text-white text-[32px] font-bold bg-gradient-to-tr from-[#787a7c] to-[#38414d] bg-clip-text text-transparent leading-tight tracking-[-0.015em]"
      >
        Найди свою работу мечты
      </p>
      <p class="text-[#637588] dark:text-white text-sm font-normal leading-normal">
        Просмотри сотни тысяч объявлений о вакансиях, чтобы найти идеальную
        работу для себя
      </p>
    </div>
    <UButton
      :to="'/vacancies/list'"
      label="Найти работу"
      size="xl"
      color="teal"
      variant="solid"
      class="dark:bg-teal-400 dark:hover:bg-teal-500"
    >
      <template #trailing>
        <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
      </template>
    </UButton>
  </div>
</template>
<style scoped lang="scss"></style>
