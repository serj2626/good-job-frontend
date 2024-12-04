<script setup lang="ts">
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
</script>
<template>
  <UButton
    size="md"
    class="shrink-0 dark:hover:bg-transparent dark:hover:text-gray-950"
    :padded="false"
    color="gray"
    variant="ghost"
    type="button"
    :icon="HeroIcons.ELLIPSIS_VERTICAL"
  />
</template>
