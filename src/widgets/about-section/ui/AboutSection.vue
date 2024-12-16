<script lang="ts" setup>
import type { ICompany } from "~/src/pages/company-detail/model/company.type";
import type { IEmployee } from "~/src/pages/employee-detail/model/employee.type";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

const { employee, company } = defineProps<{
  employee?: IEmployee;
  company?: ICompany;
}>();

const about = defineModel<string>();

const showEditor = ref<boolean>(false);
</script>

<template>
  <section id="about" class="bg-gray-100 rounded-md p-3 shadow-md">
    <div v-if="company">
      <Transition name="fade" mode="out-in">
        <Editor
          v-if="showEditor"
          v-model="about"
          editorStyle="height: 320px"
          :autoResize="true"
        />
      </Transition>
      <div class="">
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-3"
        >
          <h3
            class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4 mb-4"
          >
            О компании
          </h3>
          <UButton
            v-if="!showEditor"
            @click="showEditor = !showEditor"
            :icon="!company?.about ? `${HeroIcons.PLUS}` : `${HeroIcons.EDIT}`"
            size="md"
            :color="company?.about ? 'teal' : 'amber'"
            variant="outline"
          >
            {{ company?.about ? "Редактировать" : "Добавить" }}
          </UButton>
          <div v-else class="flex gap-3">
            <UButton
              @click="showEditor = !showEditor"
              :icon="HeroIcons.CHECK"
              size="md"
              color="green"
              variant="outline"
            >
              Сохранить
            </UButton>
            <UButton
              @click="showEditor = !showEditor"
              :icon="HeroIcons.X_MARK"
              size="md"
              color="red"
              variant="outline"
            >
              Закрыть
            </UButton>
          </div>
        </div>

        <ClientOnly>
          {{ company?.about ? company?.about : "Описание отсутствует......." }}
        </ClientOnly>
      </div>
    </div>
    <div v-if="employee">
      <Transition name="fade" mode="out-in">
        <Editor
          v-if="showEditor"
          v-model="about"
          editorStyle="height: 320px"
          :autoResize="true"
        />
      </Transition>
      <div class="">
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-3"
        >
          <h3
            class="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4 mb-4"
          >
            Обо мне
          </h3>
          <UButton
            v-if="!showEditor"
            @click="showEditor = !showEditor"
            :icon="!employee?.about ? 'i-heroicons-plus' : 'i-heroicons-pencil'"
            size="md"
            :color="employee?.about ? 'teal' : 'amber'"
            variant="outline"
          >
            {{ employee?.about ? "Редактировать" : "Добавить" }}
          </UButton>
          <div v-else class="flex gap-3">
            <UButton
              @click="showEditor = !showEditor"
              :icon="HeroIcons.CHECK"
              size="md"
              color="green"
              variant="outline"
            >
              Сохранить
            </UButton>
            <UButton
              @click="showEditor = !showEditor"
              :icon="HeroIcons.X_MARK"
              size="md"
              color="red"
              variant="outline"
            >
              Закрыть
            </UButton>
          </div>
        </div>
        <ClientOnly>
          <p class="tracking-wide about">
            {{
              employee?.about
                ? employee?.about
                : "Пользователь не указал информацию о себе...."
            }}
          </p>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>
