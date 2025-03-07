<script setup lang="ts">
import { APIRoutes, AppPaths } from "~/src/shared/router/types";
import { BootstrapIcons } from "~/src/shared/types/icons/bootstrap-icons";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

interface IEmployee {
  id: string;
  city: string;
  country: string;
  age: number;
  first_name: string;
  last_name: string;
}

interface IResume {
  id: string;
  avatar: string;
  position: string;
  employee: IEmployee;
  stacks: string[];
}
const { resume } = defineProps<{ resume: IResume }>();

const countStacks = computed(() => {
  if (resume.stacks.length > 3) {
    return "+ " + (resume.stacks.length - 3);
  }
});
</script>
<template>
  <div
    class="resume mb-10 rounded-md shadow-[5px_5px_1px_2px_rgba(0,0,0,0.115)] dark:shadow-[5px_5px_10px_2px_rgba(0,140,128,0.8)]"
  >
    <NuxtImg
      format="webp"
      sizes="sm:100vw md:50vw lg:400px"
      :src="resume.avatar"
      class="resume__avatar"
    />

    <div class="flex flex-col justify-between w-full">
      <div class="flex flex-col gap-3 text-black">
        <div class="flex justify-between items-center">
          <div class="flex gap-2 items-center dark:text-white">
            <Icon :name="HeroIcons.USER_SOLID" />
            {{ resume.employee.first_name }} {{ resume.employee.last_name }}
          </div>
          <UButton
            label="Подробнее"
            :to="{name: AppPaths.resumesId, params: { id: resume.id }}"
            size="md"
            color="gray"
            variant="solid"
            class="dark:bg-teal-600 dark:hover:bg-teal-500 dark:text-white"
          >
            <template #trailing>
              <UIcon :name="HeroIcons.ARROW_RIGHT_20_SOLID" class="w-5 h-5" />
            </template>
          </UButton>
        </div>

        <div class="flex gap-2 items-center dark:text-white">
          <Icon :name="BootstrapIcons.POSITION" class="w-5 h-5" />
          <p
            class="text-[#637588] dark:text-white text-sm font-normal leading-normal"
          >
            {{ resume?.position }}
          </p>
        </div>

        <div class="flex gap-3 dark:text-white">
          <Icon :name="HeroIcons.LOCATION_SOLID" class="w-5 h-5" />
          <p
            class="text-[#637588] dark:text-white text-sm font-normal leading-normal"
          >
            {{ resume.employee?.city }} / {{ resume.employee?.country }}
          </p>
        </div>

        <div class="flex gap-3 dark:text-white">
          <Icon :name="HeroIcons.CAKE_SOLID" class="w-5 h-5" />
          <p
            class="text-[#637588] dark:text-white text-sm font-normal leading-normal"
          >
            {{ resume.employee?.age }} лет
          </p>
        </div>
      </div>
      <div class="flex flex-nowrap gap-3">
        <UButton
          v-for="(icon, index) in resume.stacks.slice(0, 3)"
          :key="index"
          disabled
          :title="icon"
          :label="icon"
          size="sm"
          color="gray"
        />
        <UButton disabled :label="countStacks" size="sm" color="gray" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.resume {
  display: flex;
  column-gap: 50px;
  padding: 20px 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
  }
}

.resume__avatar {
  width: 300px;
  height: 300px;
  border-radius: 10%;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
}
</style>
