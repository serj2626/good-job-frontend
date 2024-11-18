<script setup lang="ts">
import { DefaultSidebar } from "~/src/widgets/default-sidebar";
import { Footer } from "~/src/widgets/footer";
</script>
<template>
    <div class="grid grid-cols-[minmax(0,300px),1fr] h-screen py-12">
      <div class="left-sidebar">
        <DefaultSidebar />
      </div>
      <div class="right-sidebar bg-gray-50">
        <slot></slot>
      </div>
    </div>
    <Footer />
</template>
<style scoped lang="scss">
</style>
