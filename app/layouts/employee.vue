<script setup lang="ts">
</script>
<template>
  <div class="grid grid-cols-[minmax(0,300px),1fr] gap-3">
    <div class="left-block flex flex-col gap-4">
        <section id="profile" class="bg-gray-100 text-center shadow-md p-3">
        <div class="flex justify-between items-center mb-2">
          <p class="text-base font-bold px-4 pb-2 text-start text-teal-500">
            Ищу работу
          </p>
          <UToggle size="xl" color="teal" :model-value="true" />
        </div>

        <img src="https://cdn.usegalileo.ai/stability/37c54038-755b-4fdd-bffb-3b5b2334dfcc.png" class="mt-6 rounded-sm" />
        <h3 class="text-[#111418] text-2xl font-bold px-4 pb-2 pt-4 mb-3">
         adsadasdadsasd
        </h3>
        <p class="text-[#111418] text-base font-normal px-4 pb-2 mb-4">
          frontend dev
        </p>
        <UIButton />
        <UButton size="xl" variant="solid">Добавить в друзья</UButton>
        </section>
        <section id="contacts" class="bg-gray-100 shadow-md p-3"">
          <h4>Контакты</h4>
          <div class=" flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <UIcon name="i-heroicons-phone" class="w-5 h-5" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              23423432
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon name="i-heroicons-github" class="w-5 h-5" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              Github
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon name="i-heroicons-user" class="w-5 h-5" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              serj2626
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon name="i-heroicons-mail" class="w-5 h-5" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              serj2626@mail.ru
            </p>
          </div>
          <div class="flex items-center justify-between">
            <UIcon name="i-heroicons-linkedin" class="w-5 h-5" />
            <p class="text-[#111418] text-base font-medium leading-normal">
              serj2626
            </p>
          </div>
      </div>
      </section>
      <section id="info" class="bg-gray-100 shadow-md flex flex-col gap-2 p-3">
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Возраст</span>
          <p>33</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Страна</span>
          <p> russia</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Город</span>
          <p>la</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Пол</span>
          <p>male</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Опыт</span>
          <p>3 года</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Мои резюме</span>
          <p>2</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Проекты</span>
          <p>2</p>
        </div>
        <div class="flex justify-between items-center">
          <span class="bg-slate-200 rounded-2xl px-3 py-2">Друзья</span>
          <p>0</p>
        </div>
      </section>
    </div>
    <div class="right-block flex flex-col gap-8">
     <slot />
    </div>
  </div>
</template>
