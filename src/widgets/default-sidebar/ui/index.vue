<script setup lang="ts">
const items = [
  [
    {
      label: "serj2626@mail.ru",
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Настройки",
      icon: "i-heroicons-cog-8-tooth",
    },
  ],
  [
    {
      label: "Избранное",
      icon: "i-heroicons-heart",
    },
    {
      label: "Отклики",
      icon: "i-heroicons-clipboard-document-list",
    },
    {
      label: "Профиль",
      icon: "i-heroicons-user",
    },
    {
      label: "Сообщения",
      icon: "i-heroicons-chat-bubble-left-right",
    },
    {
      label: "Обратная связь",
      icon: "i-heroicons-chat-bubble-left-right",
    },
  ],
  [
    {
      label: "Войти",
      icon: "i-heroicons-arrow-right-on-rectangle",
    },
    {
      label: "Выход",
      icon: "i-heroicons-arrow-left-on-rectangle",
    },
  ],
];
</script>
<template>
  <UDropdown
    class="max-[450px]:hidden fixed max-[760px]:top-6 max-[760px]:right-4 max-[760px]:mb-0 bottom-6 left-10 mb-4 mr-4"
    :items="items"
    :ui="{ item: { disabled: 'cursor-text select-text' } }"
    :popper="{ placement: 'bottom-start' }"
  >
    <UAvatar
      size="xl"
      src="https://avatars.githubusercontent.com/u/739984?v=4"
    />

    <template #account="{ item }">
      <div class="text-left">
        <p>Signed in as</p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon
        :name="item.icon"
        class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
      />
    </template>
  </UDropdown>
</template>
<style scoped></style>
