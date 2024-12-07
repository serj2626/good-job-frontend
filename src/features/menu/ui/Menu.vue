<script lang="ts" setup>
import { MenuLinks } from "../model/menu.data";
</script>

<template>
  <menu
    class="flex justify-center flex-wrap items-center gap-3 sm:gap-10 py-3 mt-2"
  >
    <NuxtLink
      v-for="link in MenuLinks"
      :key="link.title"
      :to="link.url"
      class="menu-link py-2"
    >
      {{ link.title }}
    </NuxtLink>
  </menu>
</template>

<style lang="scss" scoped></style>
