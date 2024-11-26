<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{ error: NuxtError }>();
console.log("error", error);
</script>
<template>
  <h1>{{ error }}</h1>
  <pre>{{ error.statusCode }}</pre>
</template>
<style scoped lang="scss"></style>
