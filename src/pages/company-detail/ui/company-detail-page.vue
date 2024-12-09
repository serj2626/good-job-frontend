<script setup lang="ts">
import Editor from 'primevue/editor';
import { HeroIcons } from '~/src/shared/types/icons/hero-icons';
import Grid from '~/src/shared/ui/grid/Grid.vue';
import { Company } from '~/src/widgets/company';

import type { ICompany } from '../model/company.type';
import CompanyCard from './CompanyCard.vue';

const config = useRuntimeConfig();
const { data: company } = await useAsyncData<ICompany>("company", () =>
  $fetch(config.public.apiUrl + `/api/companies/${useRoute().params.id}`)
);

const about = ref<string>("");
const showEditor = ref<boolean>(false);
</script>
<template>
  <Grid>
    <template #left>
      <Company :company="company" v-if="company" />
    </template>
    <template #right>
      <Transition name="fade" mode="out-in">
        <Editor
          v-if="showEditor"
          v-model="about"
          editorStyle="height: 320px"
          :autoResize="true"
        />
      </Transition>
      <section id="about" class="bg-gray-100 p-3 rounded-md shadow-2xl">
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-3"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
            О компании
          </h3>
          <UButton
            v-if="!showEditor"
            @click="showEditor = !showEditor"
            :icon="!company?.about ? 'i-heroicons-plus' : 'i-heroicons-pencil'"
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
      </section>

      <section id="vacancies" class="bg-gray-100 p-3 rounded-md shadow-2xl">
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-3"
        >
          <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
            Активные вакансии
          </h3>
          <UButton
            icon="i-heroicons-plus"
            size="md"
            :to="'/vacancies/create'"
            color="amber"
            variant="outline"
            >Добавить вакансию</UButton
          >
        </div>
        <div class="grid grid-cols-4 gap-4 py-5">
          <CompanyCard
            v-for="vacancy in company?.vacancies"
            :key="vacancy.id"
            :vacancy="vacancy"
          />
        </div>
      </section>

      <section id="reviews" class="bg-gray-100 p-3 rounded-md shadow-2xl">
        <div class="flex justify-between mb-8">
          <h3 class="text-[#111418] text-lg font-bold px-4">Отзывы</h3>
          <UButton
            icon="i-heroicons-plus"
            size="md"
            color="amber"
            variant="outline"
            >Оставить отзыв
          </UButton>
        </div>

        <div class="flex w-full flex-row items-start justify-start gap-3 p-4">
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            style="
              background-image: url('https://cdn.usegalileo.ai/stability/80889025-fa76-44d8-ac2d-a688423ee7d6.png');
            "
          ></div>
          <div class="flex h-full flex-1 flex-col items-start justify-start">
            <div class="flex w-full flex-row items-start justify-start gap-x-3">
              <p
                class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                Alice
              </p>
              <p class="text-[#A18249] text-sm font-normal leading-normal">
                2 days ago
              </p>
            </div>
            <p class="text-[#1C160C] text-sm font-normal leading-normal">
              I'm a big fan of Acme's products and I've been using them for
              years. I'd love to work with you! I'm a full-stack developer with
              experience in React, Node.js, and AWS. Here's my resume: [link]
            </p>
            <div
              class="flex w-full flex-row items-center justify-start gap-9 pt-2"
            >
              <div class="flex items-center gap-2">
                <div
                  class="text-[#A18249]"
                  data-icon="ThumbsUp"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                    ></path>
                  </svg>
                </div>
                <p class="text-[#A18249] text-sm font-normal leading-normal">
                  12
                </p>
              </div>
              <div class="flex items-center gap-2">
                <div
                  class="text-[#A18249]"
                  data-icon="ThumbsDown"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UPagination
          size="sm"
          color="teal"
          :model-value="1"
          :total="100"
          show-last
          show-first
          class="flex justify-center my-2"
        >
        </UPagination>
      </section>
    </template>
  </Grid>
</template>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
