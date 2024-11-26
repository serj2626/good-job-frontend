<script setup lang="ts">
import { DefaultSidebar } from "~/src/widgets/default-sidebar";
import { Footer } from "~/src/widgets/footer";
import { Header } from "~/src/widgets/header";
</script>
<template>
  <UContainer>
    <div class="flex flex-col justify-between h-full min-h-screen">
      <Header />
      <div class="h-full pb-12">
        <DefaultSidebar />
        <slot></slot>
      </div>
      <Footer />
    </div>
  </UContainer>
</template>
