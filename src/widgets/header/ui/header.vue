<script setup lang="ts">
import { Menu } from "~/src/features/menu";
</script>
<template>
  <header
    class="flex-col items-center flex text-center p-2 rounded-lg mb-3 shadow-2xl"
  >
    <h1 class="font-bold my-4 text-teal-600 text-6xl">GJ</h1>
    <p class="app-title">Good Job - Сайт для людей из мира IT</p>

    <Menu />
  </header>
</template>
<style scoped lang="scss">
// header {
//   box-shadow: 12px 16px 1px rgba(143, 141, 141, 0.19);
// }
h1 {
  text-shadow: 8px 2px 1px rgba(0, 0, 0, 0.19);
}
.app-title {
  @apply font-bold;
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(45deg, #354e42, #07bd7b);
}
</style>
