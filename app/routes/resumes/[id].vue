<script setup lang="ts">
import { ResumeDetailPage } from "~/src/pages/resume-detail";
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});
</script>
<template>
  <ResumeDetailPage />
</template>
<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  scale: 0.8;
  filter: blur(1rem);
}
</style>
