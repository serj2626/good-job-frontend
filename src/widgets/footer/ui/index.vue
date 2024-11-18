<script setup lang="ts">
import { footerLinks } from "../model/footer.data";
</script>
<template>
  <div class="flex justify-center flex-row gap-x-3 h-20 bg-yellow-200 items-center">
    <div v-for="link in footerLinks" :key="link.title">
      <a :href="link.url" class="text-[#1C160C]">{{ link.title }}</a>
    </div>
  </div>
</template>
