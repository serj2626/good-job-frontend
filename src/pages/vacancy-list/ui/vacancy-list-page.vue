<script setup lang="ts">
import { Search } from "~/src/features/search";
import Grid from "~/src/shared/ui/grid/Grid.vue";
import Typography from "~/src/shared/ui/typography/Typography.vue";

import type { IVacancy } from "../model/vacancy.type";
import VacancyDetail from "./VacancyDetail.vue";

import { APIRoutes } from "~/src/shared/router/types";

const {$apiFetch} = useNuxtApp();

const { data: vacancies } = await useAsyncData<IVacancy[]>("vacancy-list",
  () => $apiFetch(APIRoutes.vacancies.list)
);
</script>

<template>
  <Grid>
    <template #left>
      <Search type="vacancy" />
    </template>
    <template #right>
      <div>
        <Typography
          class="text-[#111418] text-lg font-bold px-4 pb-2 mb-4"
          tag="h3"
        >
          Вакансии
        </Typography>
        <div class="flex flex-col gap-3">
          <VacancyDetail
            v-for="vacancy in vacancies"
            :key="vacancy.id"
            :vacancy="vacancy"
          />
        </div>
      </div>
    </template>
  </Grid>
</template>
