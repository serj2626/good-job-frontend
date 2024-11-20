<script setup lang="ts">
import { DefaultSidebar } from "~/src/widgets/default-sidebar";
import { Footer } from "~/src/widgets/footer";
</script>
<template>
  <header class="flex-col items-center inline-flex shadow-2xl bg-slate-300 text-center p-4 rounded-md">
    <h1 class="text-6xl font-bold py-6">GJ</h1>
    <p>Good Job - Сайт для программистов и дизайнеров</p>
  </header>

  <div class="flex flex-col justify-between h-full min-h-screen">
    <div class="grid grid-cols-[minmax(0,300px),1fr] h-full py-12">
      <div class="left-sidebar">
        <DefaultSidebar />
      </div>
      <div class="right-sidebar">
        <slot></slot>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style scoped lang="scss"></style>
