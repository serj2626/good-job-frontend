<script setup lang="ts"></script>
<template>
  <div class="flex flex-col shadow-2xl rounded-md px-3 py-12">
    <form id="resume-create" class="w-3/4 mx-auto">
      <section id="header">
        <div class="flex min-w-72 flex-col gap-3 mb-6 text-center">
          <p
            class="text-[#111418] text-4xl mb-5 font-black leading-tight tracking-[-0.033em]"
          >
            Добавление проекта
          </p>
          <p class="text-[#637588] text-base font-normal leading-normal">
            Хороший проект поможет вам выделиться среди конкурентов и обратить
            внимание к вашему резюме.
          </p>
        </div>
        <UAlert
          icon="i-heroicons-information-circle"
          color="indigo"
          variant="solid"
          title="Внимание!"
          description="Созданные проекты попадают автоматически в ваш профиль, также они будут отображены в ваших резюме.
          Редактирование или удаление проекта возможно только в личном кабинете."
        />
      </section>

      <div class="flex items-center justify-center w-full my-5">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                >Кликните здесь для загрузки постера</span
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

      <div class="flex items-center gap-3">
        <span class="text-[#111418] text-base font-bold">Название проекта</span>
        <UInput
          size="xl"
          class="flex-grow"
          color="white"
          variant="outline"
          placeholder="Начните вводить..."
        />
      </div>
      <div class="flex items-center gap-3 my-3">
        <span class="text-[#111418] text-base font-bold">Ссылка на проект</span>
        <UInput
          size="xl"
          class="flex-grow"
          color="white"
          variant="outline"
          placeholder="Начните вводить..."
        />
      </div>

      <div id="footer">
        <div class="flex flex-wrap items-end gap-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#111418] text-base font-medium leading-normal pb-2">
              Категория
            </p>
            <USelect
              size="xl"
              placeholder="Выберите..."
              :options="['United States', 'Canada', 'Mexico']"
            />
          </label>
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#111418] text-base font-medium leading-normal pb-2">
              Навыки
            </p>
            <USelect
              size="xl"
              placeholder="Выберите..."
              :options="[
                'Удалённая работа',
                'Гибридная работа',
                'Полная занятость',
              ]"
            />
          </label>
        </div>
      </div>

      <div class="flex w-full flex-wrap items-end gap-4 my-5py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#111418] text-base font-medium leading-normal pb-2">
            Описание
          </p>
          <UTextarea
            :rows="6"
            placeholder="Напишите о проекте..."
            color="white"
            variant="outline"
          />
        </label>
      </div>
      <div class="flex justify-between items-center mt-12">
        <UButton color="red" size="xl" variant="solid" label="Отменить" />
        <UButton color="sky" size="xl" variant="solid" label="Сохранить" />
      </div>
    </form>
  </div>
</template>
