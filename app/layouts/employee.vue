<script setup lang="ts">
import { EmployeeSidebar } from "~/src/widgets/employee-sidebar";
</script>
<template>
    <div class="grid grid-cols-[minmax(0,300px),1fr] h-screen py-12">
      <div class="left-sidebar">
        <EmployeeSidebar />
      </div>
      <div class="right-sidebar bg-gray-50">
        <slot></slot>
      </div>
    </div>
</template>
<style scoped lang="scss">
</style>
