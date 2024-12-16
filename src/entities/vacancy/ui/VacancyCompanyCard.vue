<script lang="ts" setup>
import { Card } from "primevue";
import type { IVacancy } from "~/src/pages/vacancy-list/model/vacancy.type";
defineProps<{ vacancy: IVacancy }>();
</script>

<template>
  <Card>
    <template #title>{{ vacancy?.position }}</template>
    <template #subtitle>
      {{ vacancy?.min_salary }} - {{ vacancy?.max_salary }} ₽</template
    >
    <template #content>
      <p class="m-0">{{ vacancy.city }} / {{ vacancy.country }}</p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <UButton label="Cancel" severity="secondary" outlined />
        <UButton
          :to="{ name: 'vacancies-id', params: { id: vacancy.id } }"
          label="Смотреть"
        />
      </div>
    </template>
  </Card>
</template>

<style lang="scss" scoped></style>
