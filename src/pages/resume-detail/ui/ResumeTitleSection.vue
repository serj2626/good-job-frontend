<script lang="ts" setup>
type View =
  | "info"
  | "experiences"
  | "educations"
  | "skills"
  | "projects"
  | "links"
  | "about";

const { type, title } = defineProps<{ type: View; title: string }>();

const getIcon = computed(() => {
  switch (type) {
    case "info":
      return "i-heroicons:identification-solid";
    case "experiences":
      return "i-heroicons:building-office-solid";
    case "educations":
      return "i-heroicons:academic-cap-solid";
    case "skills":
      return "i-heroicons:identification-solid";
    case "projects":
      return "i-heroicons:code-brackets-solid";
    case "links":
      return "i-heroicons:link-solid";
    case "about":
      return "i-heroicons:information--solid";
  }
});
</script>
<template>
  <div class="flex items-center gap-2">
    <h2 class="text-[#111418] flex-shrink-0 text-[22px] font-bold px-4 pb-3">
      {{ title }}
    </h2>
    <div class="flex-grow h-2 bg-sky-600"></div>
    <div class="p-3 rounded-full border-2 border-sky-600 flex items-center">
      <Icon :name="getIcon" class="w-6 h-6 text-sky-600" />
    </div>
  </div>
</template>