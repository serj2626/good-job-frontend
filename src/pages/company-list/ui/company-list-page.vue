<script setup lang="ts">
import { Search } from '~/src/features/search';
import Grid from '~/src/shared/ui/grid/Grid.vue';

import type { ICompany } from '../../company-detail/model/company.type';
import CompanyDetail from './CompanyDetail.vue';
import Typography from '~/src/shared/ui/typography/Typography.vue';

const config = useRuntimeConfig();
const { data: companies } = await useLazyAsyncData<ICompany[]>(
  "companies",
  async () => $fetch(config.public.apiUrl + `/api/companies/`)
);
</script>

<template>
  <Grid>
    <template #left>
      <Search type="company" />
    </template>
    <template #right>
      <div>
        <Typography
          class="text-[#111418] text-lg font-bold px-4 pb-2 mb-4"
          tag="h3"
        >
        Компании
        </Typography>
        <CompanyDetail
          v-for="(company, index) in companies"
          :key="index"
          :company="company"
        />
      </div>
    </template>
  </Grid>
</template>
