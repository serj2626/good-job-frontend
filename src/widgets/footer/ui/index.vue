<script setup lang="ts">
import { footerLinks } from "../model/footer.data";
</script>
<template>
  <footer class="flex justify-center gap-3 h-20 items-center bg-slate-50 text-slate-400">
    <a
      v-for="link in footerLinks"
      :key="link.title"
      :href="link.url"
      class="text-[#1C160C]"
      >{{ link.title }}</a
    >
  </footer>
</template>
<style scoped lang="scss">
</style>