<script setup lang="ts">
import { DefaultSidebar } from "~/src/widgets/default-sidebar";
import { Footer } from "~/src/widgets/footer";
import { Header } from "~/src/widgets/header";
</script>
<template>
  <Header />

  <!-- <div class="flex flex-col justify-between h-full min-h-screen">
    <div class="grid grid-cols-[minmax(0,300px),1fr] h-full py-12">
      <div class="left-sidebar">
        <DefaultSidebar />
      </div>
      <div class="right-sidebar">
        <slot></slot>
      </div>
    </div>
    <Footer />
  </div> -->
  <div class="flex flex-col justify-between h-full min-h-screen">
    <div class=" h-full py-12">
        <DefaultSidebar />
      <div class="">
        <slot></slot>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style scoped lang="scss"></style>
