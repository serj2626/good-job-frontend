<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import BaseModal from "~/src/shared/ui/modal/BaseModal.vue";
import { subjects } from "../model/subject.data";
import { schemaFeedback, type SchemaFeedback } from "../model/validation";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

const state = reactive({
  subject: undefined,
  text: undefined,
  photo: undefined,
});

async function onSubmit(event: FormSubmitEvent<SchemaFeedback>) {
  console.log(event.data);
}
</script>

<template>
  <BaseModal>
    <UForm
      :schema="schemaFeedback"
      :state="state"
      class="space-y-4 p-6"
      @submit="onSubmit"
    >
      <h4 class="text-2xl font-bold mb-4">Форма обратной связи</h4>
      <UFormGroup label="Тема сообщения" name="subject">
        <USelect placeholder="Выберите..." v-model="state.subject" :options="subjects" />
      </UFormGroup>
      <UFormGroup label="Сообщение" name="text">
        <UTextarea placeholder="Введите текст..." v-model="state.text" />
      </UFormGroup>

      <UFormGroup label="Фото" name="photo">
        <UInput
          v-model="state.photo"
          type="file"
          size="md"
          class="cursor-pointer"
          :icon="HeroIcons.FOLDER"
        />
      </UFormGroup>

      <UButton size="lg" type="submit"> Отправить </UButton>
    </UForm>
  </BaseModal>
</template>

<style lang="scss" scoped></style>
