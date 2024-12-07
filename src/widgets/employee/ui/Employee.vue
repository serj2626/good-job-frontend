<script lang="ts" setup>
 import type { IEmployee } from '~/src/pages/employee-detail/model/employee.type';
import { BootstrapIcons } from '~/src/shared/types/icons/bootstrap-icons';

const { employee } = defineProps<{ employee: IEmployee }>();
</script>

<template>
     <section
        id="profile"
        class="relative bg-gray-100 text-center shadow-md p-3"
      >
        <UButton
          v-if="employee?.user.online"
          class="absolute top-2 right-2"
          color="green"
          size="md"
          variant="solid"
          label="В сети"
          disabled
        />
        <UButton
          class="absolute top-2 right-2"
          v-else
          color="red"
          size="md"
          variant="solid"
          label="Не в сети"
          disabled
        />
        <div class="flex justify-between items-center mb-2">
          <p class="text-base font-bold px-4 pb-2 text-start text-teal-500">
            Ищу работу
          </p>
        </div>

        <img :src="employee?.avatar" class="mt-6 rounded-sm" />
        <h3 class="text-[#111418] text-2xl font-bold px-4 pb-2 pt-4 mb-3">
          {{ employee?.first_name }} {{ employee?.last_name }}
        </h3>
        <p class="text-[#111418] text-base font-normal px-4 pb-2 mb-4">
          {{ employee?.position }}
        </p>
        <div class="flex flex-col gap-2">
          <UButton
            class="flex justify-center"
            size="xl"
            variant="solid"
            label="Подружиться"
            loading
          />
          <UButton
            class="flex justify-center"
            size="xl"
            color="blue"
            variant="solid"
            label="Написать"
            icon="i-heroicons-chat-bubble-left-right"
          />
        </div>
      </section>
      <section id="contacts" class="bg-gray-100 shadow-md p-3">
        <h4 class="text-[#111418] text-lg font-bold mb-3 pb-2">Контакты</h4>
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <Icon :name="BootstrapIcons.PHONE" class="w-5 h-5 text-amber-800" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              {{ employee?.phone }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon :name="BootstrapIcons.GITHUB" class="w-5 h-5" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              Github
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon
              :name="BootstrapIcons.GITLAB"
              class="w-5 h-5 text-rose-600"
            />
            <p class="text-[#111418] text-base font-medium leading-normal">
              Gitlab
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon :name="BootstrapIcons.MAIL" class="w-5 h-5 text-sky-500" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              {{ employee?.user.email }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon
              :name="BootstrapIcons.LINKEDIN"
              class="w-5 h-5 text-sky-700"
            />
            <p class="text-[#111418] text-base font-medium leading-normal">
              serj2626
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon
              :name="BootstrapIcons.TELEGRAM"
              class="w-5 h-5 text-sky-700"
            />
            <p class="text-[#111418] text-base font-medium leading-normal">
              Telegram
            </p>
          </div>
        </div>
      </section>
      <section id="info" class="bg-gray-100 shadow-md flex flex-col gap-2 p-3">
        <h4 class="text-[#111418] text-lg font-bold pb-2 mb-3">
          Доп. информация
        </h4>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Возраст</span>
          <p>{{ employee?.age }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Страна</span>
          <p>{{ employee?.country }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Город</span>
          <p>{{ employee?.city }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Пол</span>
          <p>{{ employee?.gender }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Опыт</span>
          <p>3 года</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Мои резюме</span>
          <p>{{ employee?.resumes.length }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Проекты</span>
          <p>{{ employee?.projects.length }}</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Друзья</span>
          <p>{{ employee?.user.count_friends }}</p>
        </div>
      </section>
</template>