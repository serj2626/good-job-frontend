<script lang="ts" setup>
interface IProject {
  id: number;
  category: string;
  title: string;
  image: string;
  stacks: string[];
  link: string | null;
  description: string;
  likes: number;
  dislikes: number;
}

defineProps<{ project: IProject }>();
</script>
<template>
  <div class="flex gap-6 bg-white px-4 py-3 shadow-md">
    <div
      class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
      :style="'background-image: url(' + project.image + ');'"
    ></div>
    <div class="flex flex-1 flex-col gap-1 justify-center">
      <p class="text-[#111418] text-base font-medium">
        <span class="text-[#637588]">Название:</span> {{ project.title }}
      </p>
      <p class="text-[#111418] text-base font-medium">
        <span class="text-[#637588]">Категория:</span> {{ project.category }}
      </p>
      <p class="text-[#637588] text-sm font-normal">
        <span class="text-[#637588]">Описание:</span> {{ project.description }}
      </p>
      <a class="text-[#637588] text-sm font-normal" href="">{{
        project.link
      }}</a>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
