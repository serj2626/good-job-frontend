<script setup lang="ts">
import { UserMenu } from "~/src/features/menu/user-menu";
import { Footer } from "~/src/widgets/footer";
import { Header } from "~/src/widgets/header";
</script>
<template>
  <div class="flex flex-col justify-between h-full min-h-screen">
    <Header />
    <div class="h-full pb-12">
      <UserMenu />
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
