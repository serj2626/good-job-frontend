<script lang="ts" setup>
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
import {
  resumeActions,
  sectionActions,
  responseActions,
  interviewActions,
} from "../model/actions.data";
type SectionType = "section" | "resume" | "response" | "interview";

defineProps<{
  action: SectionType;
}>();
</script>

<template>
  <UDropdown
    :items="
      action === 'resume'
        ? resumeActions
        : action === 'section'
        ? sectionActions
        : action === 'response'
        ? responseActions
        : interviewActions
    "
    class="border-none"
    mode="click"
    :popper="{ placement: 'bottom-start' }"
  >
    <Icon
      :name="HeroIcons.ELLIPSIS_VERTICAL"
      class="w-6 h-6 hover:scale-125 transition-all duration-200 ease-in"
    />
  </UDropdown>
</template>

<style lang="scss" scoped></style>
