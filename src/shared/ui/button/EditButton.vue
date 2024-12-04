<script setup lang="ts">
import type {
  ButtonVariant,
  ButtonSize,
  ButtonColor,
} from "~/node_modules/@nuxt/ui/dist/runtime/types/button";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

withDefaults(
  defineProps<{
    label?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
  }>(),
  {
    label: "",
    variant: "ghost",
    size: "md",
    color: "gray",
  }
);
</script>
<template>
  <UButton
    :size="size"
    :color="color"
    :icon="HeroIcons.PENCIL_SQUARE"
    :variant="variant"
    :label="label"
    type="button"
  />
</template>
