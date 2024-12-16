<script setup lang="ts">
import Grid from "~/src/shared/ui/grid/Grid.vue";
import { Company } from "~/src/widgets/company";

import type { ICompany } from "../model/company.type";
import { AboutSection } from "~/src/widgets/about-section";
import { CompanyVacancyList } from "~/src/widgets/company-vacancy-list";
import { CompanyReviewList } from "~/src/widgets/company-review-list";

const config = useRuntimeConfig();
const { data: company } = await useAsyncData<ICompany>("company", () =>
  $fetch(config.public.apiUrl + `/api/companies/${useRoute().params.id}`)
);
</script>
<template>
  <Grid>
    <template #left>
      <Company :company="company" v-if="company" />
    </template>
    <template #right>
      <AboutSection :company="company" v-if="company" />
      <CompanyVacancyList v-if="company" :vacancies="company?.vacancies" />
      <CompanyReviewList />
    </template>
  </Grid>
</template>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

section {
  @apply dark:bg-transparent dark:shadow-[5px_5px_14px_rgb(248,254,247)];
}
</style>
