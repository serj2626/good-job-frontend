<script lang="ts" setup>
import { MenuLinks } from "../model/menu.data";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <menu
    class="flex justify-center flex-wrap items-center gap-3 sm:gap-10 py-3 mt-2"
  >
    <NuxtLink
      v-for="link in MenuLinks"
      :key="link.title"
      :to="{name: link.url}"
      class="menu-link py-2"
    >
      {{ link.title }}
    </NuxtLink>
    <ClientOnly>
      <UButton
        :icon="
          isDark ? `${HeroIcons.MOON_20_SOLID}` : `${HeroIcons.SUN_20_SOLID}`
        "
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </menu>
</template>