<script setup lang="ts">
import { LeftSidebar } from "~/src/widgets/sidebar";
</script>
<template>
  <UContainer>
    <div class="grid grid-cols-[minmax(0,300px),1fr] h-screen">
      <div class="left-sidebar">
        <LeftSidebar />
      </div>
      <div class="right-sidebar bg-gray-50">
        <slot></slot>
      </div>
    </div>
  </UContainer>
</template>
<style scoped lang="scss">
</style>
