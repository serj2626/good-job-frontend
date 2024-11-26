<script setup lang="ts">
</script>
<template>
  <div class="grid grid-cols-[minmax(0,300px),1fr] gap-3">
    <div class="left-sidebar flex flex-col gap-3">
      <section id="profile" class="bg-gray-100 text-center shadow-md p-3">
        <div class="flex justify-between items-center mb-2">
          <p class="text-base font-bold px-4 pb-2 text-start text-teal-500">
            Ищу работу
          </p>

          <UToggle size="xl" color="teal" :model-value="true" />
        </div>
        <img
          src="https://cdn.usegalileo.ai/stability/37c54038-755b-4fdd-bffb-3b5b2334dfcc.png"
          class="w-3/4 mx-auto rounded-full"
        />
        <h3 class="text-[#111418] text-2xl font-bold px-4 pb-2 pt-4 mb-3">
          Acme Inc.
        </h3>
        <p class="text-[#111418] text-base font-normal px-4 pb-2 mb-4">
          Компания
        </p>
        <UButton size="xl" color="teal" variant="solid"
          >Добавить в друзья</UButton
        >
      </section>
      <section id="info" class="bg-gray-100 shadow-md flex flex-col gap-3 p-3">
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Страна:</span>
          <p>Россия</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Город:</span>
          <p>Москва</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Почта:</span>
          <p>eKx0U@example.com</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Телефон:</span>
          <p>+7 (123) 456-78-90</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2"
            >Кол-во сотрудников</span
          >
          <p>14</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2"
            >Кол-во вакансий</span
          >
          <p>5</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Кол-во друзей</span>
          <p>26</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Сайт</span>
          <p>acme.com</p>
        </div>
      </section>
    </div>
    <div class="right-block flex flex-col gap-8">
     <slot />
    </div>
  </div>
</template>
