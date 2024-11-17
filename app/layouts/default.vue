<script setup lang="ts">
import { DefaultSidebar } from "~/src/widgets/DefaultSideBar";
</script>
<template>
    <div class="grid grid-cols-[minmax(0,300px),1fr] h-screen py-12">
      <div class="left-sidebar">
        <DefaultSidebar />
      </div>
      <div class="right-sidebar bg-gray-200">
        <slot></slot>
      </div>
    </div>
</template>
<style scoped lang="scss">
</style>
