<script setup lang="ts">
import { Search } from '~/src/features/search';
import Grid from '~/src/shared/ui/grid/Grid.vue';

import type { IEmployee } from '../../employee-detail/model/employee.type';
import EmployeeDetail from './EmployeeDetail.vue';
import Typography from '~/src/shared/ui/typography/Typography.vue';
import { APIRoutes } from '~/src/shared/router/types';

const { $apiFetch } = useNuxtApp();

const { data: employees } = await useAsyncData<IEmployee[]>(
  "employees-page-data", () => $apiFetch(APIRoutes.employees.list)
);
</script>
<template>
  <Grid>
    <template #left>
      <Search type="employee" />
    </template>
    <template #right>
      <div>
        <Typography
          class="text-[#111418] text-lg font-bold px-4 pb-2 mb-4"
          tag="h3"
        >
          Специалисты
        </Typography>
        <EmployeeDetail
          v-for="(employee, index) in employees"
          :key="index"
          :employee="employee"
        />
      </div>
    </template>
  </Grid>
</template>
