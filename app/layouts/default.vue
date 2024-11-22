<script setup lang="ts">
import { DefaultSidebar } from "~/src/widgets/default-sidebar";
import { Footer } from "~/src/widgets/footer";
import { Header } from "~/src/widgets/header";
import { Menu } from "~/src/widgets/menu";
</script>
<template>
  <div class="flex flex-col justify-between h-full min-h-screen">
    <Header />
    <div class="h-full pb-12">
      <DefaultSidebar />
      <Menu />
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>