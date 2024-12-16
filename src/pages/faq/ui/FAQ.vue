<script lang="ts" setup>
import { questions } from "../model/faq.data";
</script>

<template>
  <div class="w-3/4 mx-auto">
    <h1 class="text-3xl text-center font-bold my-6">FAQ</h1>
    <div>
      <UAccordion
        open-icon="i-heroicons-plus"
        close-icon="i-heroicons-minus"
        variant="outline"
        size="xl"
        :items="questions"
      />
    </div>
  </div>
</template>
