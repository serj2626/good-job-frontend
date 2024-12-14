<script setup lang="ts">
import XButton from '../button/XButton.vue'; 

const props = defineProps<{
  modelValue?: boolean;
  title?: string;
  description?: string;
  preventClose?: boolean;
  withoutCloseButton?: boolean;
}>();

const emit = defineEmits(["update:model-value"]);

const currentModelValue = useVModel(props, "modelValue", emit);

function close() {
  if (currentModelValue.value) {
    return emit("update:model-value", false);
  }

  useModal().close();
}
</script>

<template>
  <UModal
    v-model="currentModelValue"
    :ui="{
      base: 'pt-6 px-8 pb-8',
      width: 'sm:max-w-[480px]',
    }"
    :prevent-close="preventClose"
  >
    <slot name="close" :close="close">
      <XButton
        v-if="preventClose ? false : !withoutCloseButton"
        class="absolute right-0.5 top-3 px-3.5"
        @click="close"
      />
    </slot>

    <div v-if="title || description" class="flex flex-col gap-2 mb-7">
      <h3 v-if="title" class="text-2xl font-semibold text-gray-900 mr-3">
        {{ title }}
      </h3>

      <slot name="description">
        <div v-if="description" class="text-gray-600">
          {{ description }}
        </div>
      </slot>
    </div>

    <slot :close="close" />
  </UModal>
</template>
