<script lang="ts" setup>
interface Props {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  class: string;
}
defineProps<Props>();
</script>

<template>
  <component :class="class" :is="tag">
    <slot />
  </component>
</template>
