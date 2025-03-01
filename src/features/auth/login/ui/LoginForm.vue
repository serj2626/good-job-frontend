<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import BaseModal from "~/src/shared/ui/modal/BaseModal.vue";
import PasswordInput from "~/src/shared/ui/form-field/PasswordInput.vue";
import { ApiRoutes } from "~/src/shared/router/types";

const schema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(8, "Пароль должен быть не менее 8 символов"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: "",
  password: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}
</script>

<template>
  <BaseModal>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 p-6"
      @submit="onSubmit"
    >
      <h4 class="text-2xl font-bold mb-4">Авторизация</h4>
      <UFormGroup label="Почта" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Пароль" name="password">
        <PasswordInput v-model="state.password" initType="password" />
      </UFormGroup>

      <UButton size="lg" type="submit"> Войти </UButton>
      <!-- <p class="text-sm text-end">
        Не зарегистрированы?
        <NuxtLink 
          :to="ApiRoutes.auth.registration"
          class="text-blue-600 hover:underline ml-2"
          >Создать аккаунт</NuxtLink>
      </p> -->
    </UForm>
  </BaseModal>
</template>

<style lang="scss" scoped></style>
