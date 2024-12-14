<script setup lang="ts">
import { Navigation } from "~/src/features/menu/navigation";
</script>
<template>
  <header
    class="flex-col items-center flex text-center p-2 mb-3 rounded-md shadow-[5px_5px_1px_2px_rgba(0,0,0,0.115)] dark:shadow-teal-300"
  >
    <h1 class="font-bold my-2 text-teal-600 text-6xl dark:text-teal-400">GJ</h1>
    <Navigation />
  </header>
</template>
<style scoped lang="scss">
h1 {
  text-shadow: 8px 2px 1px rgba(0, 0, 0, 0.19);
}
</style>
