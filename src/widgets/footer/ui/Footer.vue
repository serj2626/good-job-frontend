<script setup lang="ts">
import {
  footerContacts,
  footerIcons,
} from '../model/footer.data';
</script>
<template>
  <footer class="bg-white dark:bg-transparent">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between items-center">
        <div class="flex gap-12 items-start">
          <div class="mb-6 md:mb-0">
            <a class="flex flex-col gap-2 items-center">
              <p class="font-bold my-4 text-teal-600 dark:text-teal-400 text-5xl">GJ</p>
              <p class="text-base text-teal-600 dark:text-teal-500">
                Good Job - Сайт для людей из мира IT
              </p>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div v-for="item in footerContacts" :key="item.title">
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                {{ item.title }}
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-2" v-for="contact in item.links">
                  <a :href="contact.url" class="hover:underline text-sm">
                    {{ contact.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto "
      />
      <section id="footer-links" class="dark:shadow-none">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
            >© 2024
            <a class="hover:underline">Good Job</a
            >. Все права защищены.
          </span>
          <div class="flex gap-5 mt-4 sm:justify-center sm:mt-0">
            <Icon
              v-for="icon in footerIcons"
              :to="icon.link"
              :title="icon.title"
              :key="icon.title"
              :name="icon.icon"
              :class="icon.class"
              class="w-5 h-5 cursor-pointer transition-all duration-200 ease-in hover:scale-125"
            />
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>