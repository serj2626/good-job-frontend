<script lang="ts" setup>
type ViewType = "input" | "textarea";
type ColorType =

  | "green"
  | "lime"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "black"
  | "white";

type SizeType = "2xs" | "xs" | "sm" | "md" | "lg" | "xl";

interface IProps {
  view: ViewType;
  disabled?: boolean;
  loading?: boolean;
  size?: SizeType;
  variant?: "outline" | "none";
  color?: ColorType;
  placeholder: string;
  icon?: string;
}

defineProps<IProps>();

// withDefaults(defineProps<IProps>(), {
//   view: "input",
//   disabled: false,
//   loading: false,
//   size: "md",
//   variant: "outline",
//   color: "black",
//   placeholder: "",
//   icon: "",
// });
</script>

<template>
  <UInput

    v-if="view === 'input'"
    :disabled="disabled"
    :loading="loading"
    :size="size"
    :variant="variant"
    :color="`teal`"
    :placeholder="placeholder"
    :icon="icon"
  />

  <UTextarea
    v-else
    :disabled="disabled"
    :loading="loading"
    :size="size"
    :variant="variant"
    :color="`teal`"
    :placeholder="placeholder"
    :icon="icon"
  />
</template>