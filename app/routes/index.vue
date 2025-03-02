<script setup lang="ts">
import { HomePage } from "~/src/pages/home";
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});
</script>
<template>
  <HomePage />
</template>
<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  transform: translateY(-100px);
  opacity: 0;
  filter: blur(1rem);
}
</style>