<script setup lang="ts">
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
</script>

<template>
  <UButton
    type="button"
    size="xl"
    variant="link"
    color="black"
    :ui="{
      color: {
        black: {
          link: 'text-gray-400',
        },
      },
    }"
    :icon="HeroIcons.X_MARK"
  />
</template>
