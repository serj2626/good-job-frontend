<script setup lang="ts">
import { HeroIcons } from '../../types/icons/hero-icons';

const emit = defineEmits(["update:model-value"]);

type PasswordInputType = "text" | "password";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    initType?: PasswordInputType;
    placeholder?: string;
    autocomplete?: string;
  }>(),
  {
    initType: "password",
    placeholder: "Пароль",
    autocomplete: "new-password",
  }
);

const currentModelValue = useVModel(props, "modelValue", emit);

const type = ref<PasswordInputType>(props.initType);

const isPasswordType = computed(() => type.value === "password");

function toggle() {
  type.value = isPasswordType.value ? "text" : "password";
}

const icon = computed(() =>
  isPasswordType.value ? HeroIcons.EYE_20_SOLID : HeroIcons.EYE_SLASH_20_SOLID
);
</script>
<template>
  <UInput
    v-model="currentModelValue"
    :ui="{
      icon: {
        trailing: {
          pointer: '',
        },
      },
    }"
    :type="type"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
  >
    <template #trailing>
      <UButton
        color="gray"
        size="2xs"
        variant="link"
        class="p-0 text-gray-400"
        :ui="{
          icon: {
            size: {
              '2xs': 'w-6 h-6',
            },
          },
        }"
        :icon="icon"
        @click="toggle"
      />
    </template>
  </UInput>
</template>
