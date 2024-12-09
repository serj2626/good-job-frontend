<script lang="ts" setup>
import type { ICompany } from "~/src/pages/company-detail/model/company.type";
import { BootstrapIcons } from "~/src/shared/types/icons/bootstrap-icons";
import type { IEmployee } from "~/src/pages/employee-detail/model/employee.type";

const { employee, company } = defineProps<{
  employee?: IEmployee;
  company?: ICompany;
}>();
</script>

<template>
  <section id="profile" class="relative bg-gray-100 text-center shadow-md p-3">
    <div v-if="employee">
      <div class="flex justify-between items-center mb-2">
        <p class="text-base font-bold px-4 pb-2 text-start text-teal-500">
          Ищу работу
        </p>
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
      </div>

      <img
        :src="employee?.avatar ? employee?.avatar : '/image/user_none.png'"
        class="mt-6 rounded-sm"
      />
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
    </div>

    <div v-if="company">
      <div class="flex justify-between items-center">
        <UTooltip
          v-if="company?.is_verified"
          text="Компания предоставила все документы"
          :popper="{ placement: 'top' }"
        >
          <span class="text-green-500"
            >Проверена
            <Icon
              :name="BootstrapIcons.CHECK_COMPANY"
              class="w-6 h-6 text-green-500"
            />
          </span>
        </UTooltip>
        <UTooltip
          v-else
          text="Компания не предоставила документы"
          :popper="{ placement: 'top-end' }"
        >
          <span class="text-red-600">Не проверена</span>
        </UTooltip>

        <UButton
          v-if="company?.user.online"
          color="green"
          size="md"
          variant="solid"
          label="В сети"
          disabled
        />
        <UButton
          v-else
          color="red"
          size="md"
          variant="solid"
          label="Не в сети"
          disabled
        />
      </div>

      <img
        :src="company?.avatar ? company?.avatar : '/image/company_none.png'"
        :alt="company?.name"
        class="rounded-xl mb-2 mt-3"
      />
      <h3 class="text-[#111418] text-2xl font-bold px-4 pb-2 pt-4 mb-3">
        {{ company?.full_name }}
      </h3>
      <div
        class="text-[#111418] text-base font-normal mb-4 flex justify-center items-center gap-2"
      >
        {{ company?.user.type }}
      </div>
      <UButton
        size="xl"
        loading
        color="teal"
        variant="solid"
        class="w-full flex justify-center"
      >
        Подружиться
      </UButton>
    </div>
  </section>
</template>
