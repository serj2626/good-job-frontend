<script setup lang="ts">
import { Menu } from '~/src/features/menu';
</script>
<template>
  <header class="flex-col items-center flex text-center p-2 mb-3 shadow-lg">
    <h1 class="font-bold my-4 text-teal-600 text-6xl dark:text-teal-400">GJ</h1>

    <Menu />
  </header>
</template>
<style scoped lang="scss">
h1 {
  text-shadow: 8px 2px 1px rgba(0, 0, 0, 0.19);
}


header{
 
}
</style>
