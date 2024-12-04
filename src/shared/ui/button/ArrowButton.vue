<script setup lang="ts">
import type { ButtonSize } from "#ui/types";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

const props = withDefaults(
  defineProps<{
    type: "prev" | "next";
    size?: ButtonSize;
    disabled?: boolean;
    direction?: "horizontal" | "vertical";
  }>(),
  {
    type: "prev",
    size: "lg",
    disabled: false,
    direction: "horizontal",
  }
);

const icon = computed(() => {
  if (props.direction === "horizontal") {
    return props.type === "prev" ? HeroIcons.ARROW_LEFT : HeroIcons.ARROW_RIGHT;
  }

  return props.type === "prev" ? HeroIcons.ARROW_UP : HeroIcons.ARROW_DOWN;
});
</script>

<template>
  <UButton
    class="arrow-button"
    :size="size"
    variant="solid"
    color="gray"
    :icon="icon"
    :disabled="disabled"
    :padded="true"
    :ui="{
      color: {
        gray: {
          solid:
            'bg-gray-500 hover:bg-gray-400 disabled:bg-gray-600 text-white dark:text-black dark:bg-gray-500 dark:hover:bg-gray-400 rounded-full dark:disabled:bg-gray-400',
        },
      },
    }"
  />
</template>

<style scoped lang="scss">
.arrow-button {
  box-shadow: none !important;
}
</style>
