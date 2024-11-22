<sript setup lang="ts">
withDefaults(
    defineProps<{
        label?: string
        variant?: ButtonVariant
        size?: ButtonSize
        color?: ButtonColor
    }>(),
    {
        label: '',
        variant: 'ghost',
        size: 'md',
        color: 'teal',
    }
)
</sript>
<template>
    <UButton :size="size" :color="color" :variant="variant" :label="label" />
</template>
