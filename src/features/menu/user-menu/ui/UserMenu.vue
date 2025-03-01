<script setup lang="ts">
import { userMenuLins } from "../model/user.menu.data";
import { LoginForm } from "~/src/features/auth/login";

const modal = useModal();

function openModal() {
  modal.open(LoginForm, {});
}
</script>
<template>
  <UDropdown
    class="max-[450px]:hidden fixed max-[760px]:top-6 max-[760px]:right-4 max-[760px]:mb-0 bottom-6 left-10 mb-4 mr-4"
    :items="userMenuLins"
    :ui="{ item: { disabled: 'cursor-text select-text' } }"
    :popper="{ placement: 'bottom-start' }"
  >
    <UAvatar
      size="xl"
      src="https://avatars.githubusercontent.com/u/739984?v=4"
    />

    <template #account="{ item }">
      <div class="text-left">
        <p>Вы вошли как</p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <div @click="item.label === 'Войти' && openModal()"  class="w-full flex items-center justify-between">
        <span class="truncate">{{
          item.label
        }}</span>

        <UIcon
          :name="item.icon"
          class="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500 ms-auto"
        />
      </div>
    </template>
  </UDropdown>
</template>
