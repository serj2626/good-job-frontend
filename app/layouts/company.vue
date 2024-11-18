<script setup lang="ts">
import { CompanySidebar } from "~/src/widgets/company-sidebar";
</script>
<template>
    <div class="grid grid-cols-[minmax(0,300px),1fr] h-screen py-12">
      <div class="left-sidebar">
        <CompanySidebar />
      </div>
      <div class="right-sidebar bg-gray-50">
        <slot></slot>
      </div>
    </div>
</template>
<style scoped lang="scss">
</style>
