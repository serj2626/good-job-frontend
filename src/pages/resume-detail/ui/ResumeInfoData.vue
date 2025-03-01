<script lang="ts" setup>
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
import type { IResume } from "../model/resume.type";
import { BootstrapIcons } from "~/src/shared/types/icons/bootstrap-icons";

const { resume } = defineProps<{ resume: IResume }>();

const getSalary = computed(() => {
  if (resume.min_salary && resume.max_salary) {
    return `${resume.min_salary} - ${resume.max_salary}`;
  } else if (resume.min_salary) {
    return `От ${resume.min_salary}`;
  } else {
    return `До ${resume.max_salary}`;
  }
});
</script>
<template>
  <div class="flex gap-3 dark:text-black">
    <Icon :name="HeroIcons.USER_SOLID" class="w-5 h-5" />
    <p class="text-[#637588] text-sm font-normal leading-normal">
      {{ resume?.employee?.first_name }} {{ resume?.employee?.last_name }}
    </p>
  </div>

  <div class="flex gap-3 dark:text-black">
    <Icon :name="BootstrapIcons.POSITION" class="w-5 h-5" />
    <p class="text-[#637588] text-sm font-normal leading-normal">
      {{ resume?.position }}
    </p>
  </div>

  <div class="flex gap-3 dark:text-black">
    <Icon :name="HeroIcons.CAKE_SOLID" class="w-5 h-5" />
    <p class="text-[#637588] text-sm font-normal leading-normal">
      {{ resume?.employee?.age ? resume?.employee?.age + " лет" : "не указано" }}
    </p>
  </div>

  <div class="flex gap-3 dark:text-black">
    <Icon :name="HeroIcons.LOCATION_SOLID" class="w-5 h-5" />
    <p class="text-[#637588] text-sm font-normal leading-normal">
      {{ resume?.employee?.city }}, {{ resume?.employee?.country }}
    </p>
  </div>
  <div class="flex gap-3 dark:text-black">
    <Icon :name="HeroIcons.PHONE_SOLID" class="w-5 h-5" />
    <p class="text-[#637588] text-sm font-normal leading-normal">
      {{ resume?.employee?.phone }}
    </p>
  </div>

  <div class="flex gap-3 dark:text-black">
    <Icon :name="HeroIcons.MAIL_SOLID" class="w-5 h-5" />
    <p class="text-[#637588] text-sm font-normal leading-normal">
      {{ resume?.employee?.user.email }}
    </p>
  </div>

  <div class="flex gap-3 dark:text-black">
    <Icon :name="HeroIcons.MONEY" class="w-5 h-5" />
    <p class="text-[#637588] text-sm font-normal leading-normal">
      {{ getSalary }}
    </p>
  </div>
</template>
