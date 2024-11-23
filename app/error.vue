<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{ error: NuxtError }>();
</script>
<template>
  <h1>{{ error.message }}</h1>
  <pre>{{ error }}</pre>
</template>
<style scoped lang="scss"></style>
