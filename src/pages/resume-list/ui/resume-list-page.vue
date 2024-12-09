<script setup lang="ts">
import { Search } from '~/src/features/search';
import Grid from '~/src/shared/ui/grid/Grid.vue';

import type { IResume } from '../../employee-detail/model/employee.type';
import ResumeDetail from './ResumeDetail.vue';

const config = useRuntimeConfig();
const { data: resumes } = await useAsyncData<IResume[]>("resumes", () =>
  $fetch(config.public.apiUrl + `/api/employees/resume/`)
);
</script>

<template>
  <Grid>
    <template #left>
      <Search />
    </template>
    <template #right>
      <div>
        <h3 class="text-[#111418] text-lg text-center font-bold px-4 pb-2 mb-4">
          Резюме
        </h3>
        <section id="resumes" class="bg-gray-100 p-3 rounded-md">
          <div class="grid grid-cols-3 gap-4 py-5">
            <ResumeDetail
              v-for="resume in resumes"
              :key="resume.id"
              :resume="resume"
            />
          </div>
        </section>
      </div>
    </template>
  </Grid>
</template>
