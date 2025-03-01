<script setup lang="ts">
import { Search } from "~/src/features/search";
import Grid from "~/src/shared/ui/grid/Grid.vue";

import type { IResume } from "../../employee-detail/model/employee.type";
import ResumeDetail from "./ResumeDetail.vue";
import Typography from "~/src/shared/ui/typography/Typography.vue";

const config = useRuntimeConfig();
const { data: resumes } = await useLazyAsyncData("resumes-list", () =>
  $fetch(config.public.apiUrl + `/api/employees/resume/list/`, {})
);
</script>

<template>
  <Grid>
    <template #left>
      <Search type="resume" />
    </template>
    <template #right>
      <div>
        <Typography
          class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 mb-4"
          tag="h3"
        >
          Резюме
        </Typography>
        <section id="resumes" class="p-3 rounded-md">
          <div class="">
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
