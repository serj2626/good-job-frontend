<script setup lang="ts"></script>
<template>
  <div class="flex flex-col shadow-2xl rounded-md px-3 py-12">
    <div class="max-w-[960px] mx-auto">
      <section id="header">
        <div class="flex min-w-72 flex-col gap-3 mb-6 text-center">
          <p
            class="text-[#111418] text-4xl mb-5 font-black leading-tight tracking-[-0.033em]"
          >
            Составить резюме
          </p>
          <p class="text-[#637588] text-base font-normal leading-normal">
            Отличное резюме поможет вам выделиться. Давайте начнем с нескольких
            советов о том, как составить отличное резюме.
          </p>
        </div>
        <UAlert
          icon="i-heroicons-information-circle"
          color="lime"
          variant="solid"
          title="Внимание!"
          description="Разделы с опытом работы, образованием и проектами будут добавлены автоматически.
          Изменить или добавить их можно в своем профиле."
        />
      </section>

      <div class="flex items-center justify-center w-full my-5">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold"
                >Кликните здесь для загрузки аватара</span
              >
              или перетащите файл
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>

      <section id="main" class="flex flex-col gap-8 mt-5">
        <div class="flex items-center gap-3">
          <span class="text-[#111418] text-base font-bold"
            >Желаемая должность</span
          >
          <UInput
            size="xl"
            class="flex-grow"
            color="white"
            variant="outline"
            placeholder="Начните вводить..."
          />
        </div>
        <div class="flex items-center justify-around">
          <div class="flex items-center gap-3">
            <span class="text-[#111418] text-base font-bold">Категория</span>
            <USelect
              size="xl"
              placeholder="Выберите..."
              :options="['United States', 'Canada', 'Mexico']"
            />
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#111418] text-base font-bold"
              >График работы</span
            >
            <USelect
              size="xl"
              placeholder="Выберите..."
              :options="[
                'Удалённая работа',
                'Гибридная работа',
                'Полная занятость',
              ]"
            />
          </div>
        </div>
      </section>
      <section id="footer">
        <div class="flex flex-wrap items-end gap-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#111418] text-base font-medium leading-normal pb-2">
              Минимальная зарплата
            </p>
            <UInput
              type="number"
              size="xl"
              color="white"
              variant="outline"
              placeholder="...."
            />
          </label>
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#111418] text-base font-medium leading-normal pb-2">
              Максимальная зарплата
            </p>
            <UInput
              type="number"
              size="xl"
              color="white"
              variant="outline"
              placeholder="...."
            />
          </label>
        </div>
      </section>
      <div class="flex w-full flex-wrap items-end gap-4 my-5py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#111418] text-base font-medium leading-normal pb-2">
            О себе
          </p>
          <UTextarea
            :rows="6"
            placeholder="Напишите о себе"
            color="white"
            variant="outline"
          />
        </label>
      </div>
    </div>
  </div>
</template>
