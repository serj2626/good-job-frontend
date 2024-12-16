<script setup lang="ts">
import Grid from "~/src/shared/ui/grid/Grid.vue";
import { Employee } from "~/src/widgets/employee";

import type { IEmployee } from "../model/employee.type";
import { EmployeeStackList } from "~/src/widgets/employee-stack-list";
import { EmployeeResumeList } from "~/src/widgets/employee-resume-list";
import { EmployeeProjectList } from "~/src/widgets/employee-project-list";
import { EmployeeEducationList } from "~/src/widgets/employee-education-list";
import { EmployeeExperienceList } from "~/src/widgets/employee-experience-list";
import { AboutSection } from "~/src/widgets/about-section";

const config = useRuntimeConfig();
const { data: employee } = await useAsyncData<IEmployee>("employee", () =>
  $fetch(config.public.apiUrl + `/api/employees/${useRoute().params.id}/`)
);
</script>
<template>
  <Grid>
    <template #left>
      <Employee :employee="employee" v-if="employee" />
    </template>
    <template #right>
      <EmployeeResumeList :resumes="employee?.resumes" v-if="employee" />
      <EmployeeProjectList :projects="employee?.projects" v-if="employee" />
      <EmployeeStackList :stacks="employee?.stacks" v-if="employee" />
      <EmployeeEducationList
        :educations="employee?.educations"
        v-if="employee"
      />
      <EmployeeExperienceList
        :experiences="employee?.experiences"
        v-if="employee"
      />
      <AboutSection :employee="employee" v-if="employee" />
    </template>
  </Grid>
</template>
<style lang="scss">
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
