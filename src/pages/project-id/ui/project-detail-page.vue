<script setup lang="ts">
import type { IProject } from "../model/project.type";
const config = useRuntimeConfig();
const {
  data: project,
  pending,
  error,
  refresh,
} = await useAsyncData<IProject>("project", () =>
  $fetch(
    config.public.apiUrl + `/api/employees/projects/${useRoute().params.id}/`
  )
);
console.log("project", project.value);
</script>
<template>
  <div class="grid grid-cols-[minmax(0,300px),1fr] gap-4">
    <div class="left-block flex flex-col gap-4">
      <section id=" profile" class="bg-gray-100 text-center shadow-md p-3">
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
          Сергей Бойцов
        </h3>
        <p class="text-[#111418] text-base font-normal px-4 pb-2 mb-4">
          Frontend Developer
        </p>
        <UButton size="xl" color="fuchsia" variant="solid">Подписаться</UButton>
      </section>
      <section id="contacts" class="bg-gray-100 shadow-md p-3">
        <h4>Контакты</h4>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <i class="fa-solid fa-phone fa-lg" style="color: #b197fc"></i>
            <p class="text-[#111418] text-base font-medium leading-normal">
              +7 (999) 999-99-99
            </p>
          </div>
          <div class="flex items-center justify-between">
            <i class="fa-brands fa-github fa-lg"></i>
            <p class="text-[#111418] text-base font-medium leading-normal">
              Github
            </p>
          </div>
          <div class="flex items-center justify-between">
            <i class="fa-brands fa-telegram fa-lg" style="color: #74c0fc"></i>
            <p class="text-[#111418] text-base font-medium leading-normal">
              serj2626
            </p>
          </div>
          <div class="flex items-center justify-between">
            <i class="fa-solid fa-envelope fa-lg" style="color: #74c0fc"></i>
            <p class="text-[#111418] text-base font-medium leading-normal">
              serj2626@mail.ru
            </p>
          </div>
          <div class="flex items-center justify-between">
            <i class="fa-brands fa-linkedin fa-lg" style="color: #058df5"></i>
            <p class="text-[#111418] text-base font-medium leading-normal">
              serj2626
            </p>
          </div>
        </div>
      </section>
      <section id="info" class="bg-gray-100 shadow-md flex flex-col gap-2 p-3">
        <p><span>Возраст:</span> 31</p>
        <p><span>Страна:</span> Россия</p>
        <p><span>Город:</span> Москва</p>
        <p><span>Пол:</span> Мужской</p>
        <p><span>Опыт:</span> 3 года</p>
        <p><span>Мои резюме:</span> 3</p>
      </section>
    </div>
    <div class="right-block flex flex-col gap-8">
      <section id="projects" class="bg-gray-100 p-3 rounded-md shadow-2xl">
        <div class="flex flex-col gap-3">
          <div class="flex justify-between items-center">
            <h3 class="">Проект: {{ project?.title }}</h3>
            <span>{{ project?.time_ago }}</span>
          </div>

          <p>Категория: Frontend</p>
          <p>
            Понравилось: {{ project?.likes?.length ? project.likes.length : 0 }}
          </p>
          <p>Ссылка: {{ project?.link }}</p>
          <div class="flex gap-2 items-center">
            <UIcon name="i-heroicons-hand-thumb-up" class="w-5 h-5" />
            <UIcon name="i-heroicons-hand-thumb-down" class="w-5 h-5" />
          </div>
          <img class="w-full h-auto block" :src="project?.image" alt="" />
        </div>
      </section>
      <section id="stacks" class="bg-gray-100 p-3 rounded-md shadow-md">
        <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-3">
          Стек
        </h3>
        <div class="flex items-center gap-3 flex-wrap">
          <div v-for="(stack, index) in project?.stacks" :key="index">
            <UButton disabled color="teal" size="md" ariant="solid">
              {{ stack }}</UButton
            >
          </div>
        </div>
      </section>
      <section id="description" class="bg-gray-100 p-3 rounded-md shadow-md">
        <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-3">
          Описание
        </h3>
        {{
          project?.description ? project?.description : "Описание отсутствует"
        }}
      </section>
      <section id="reviews" class="bg-gray-100 p-3 rounded-md shadow-2xl">
        <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4">
          Комментарии
        </h3>
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
        <div class="flex w-full flex-row items-start justify-start gap-3 p-4">
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            style="
              background-image: url('https://cdn.usegalileo.ai/stability/ca2e6ca8-a7c0-4040-b0d4-13d07a34316d.png');
            "
          ></div>
          <div class="flex h-full flex-1 flex-col items-start justify-start">
            <div class="flex w-full flex-row items-start justify-start gap-x-3">
              <p
                class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                Bob
              </p>
              <p class="text-[#A18249] text-sm font-normal leading-normal">
                2 days ago
              </p>
            </div>
            <p class="text-[#1C160C] text-sm font-normal leading-normal">
              I'm a software engineer with 5 years of experience, currently
              working at Google. I'm interested in learning more about
              opportunities at Acme. Here's my LinkedIn profile: [link]
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
                  7
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
        <div class="flex w-full flex-row items-start justify-start gap-3 p-4">
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            style="
              background-image: url('https://cdn.usegalileo.ai/stability/79ba1435-97b5-4274-9827-8e4727bb2c5b.png');
            "
          ></div>
          <div class="flex h-full flex-1 flex-col items-start justify-start">
            <div class="flex w-full flex-row items-start justify-start gap-x-3">
              <p
                class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                Charlie
              </p>
              <p class="text-[#A18249] text-sm font-normal leading-normal">
                3 days ago
              </p>
            </div>
            <p class="text-[#1C160C] text-sm font-normal leading-normal">
              Hi, I'm a product manager with a background in SaaS and
              e-commerce. I'm interested in joining Acme to help build and grow
              your developer tools. Let's chat!
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
                  5
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
        <div class="flex w-full flex-row items-start justify-start gap-3 p-4">
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            style="
              background-image: url('https://cdn.usegalileo.ai/stability/79ba1435-97b5-4274-9827-8e4727bb2c5b.png');
            "
          ></div>
          <div class="flex h-full flex-1 flex-col items-start justify-start">
            <div class="flex w-full flex-row items-start justify-start gap-x-3">
              <p
                class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                Charlie
              </p>
              <p class="text-[#A18249] text-sm font-normal leading-normal">
                3 days ago
              </p>
            </div>
            <p class="text-[#1C160C] text-sm font-normal leading-normal">
              Hi, I'm a product manager with a background in SaaS and
              e-commerce. I'm interested in joining Acme to help build and grow
              your developer tools. Let's chat!
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
                  5
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
        <div class="flex w-full flex-row items-start justify-start gap-3 p-4">
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            style="
              background-image: url('https://cdn.usegalileo.ai/stability/79ba1435-97b5-4274-9827-8e4727bb2c5b.png');
            "
          ></div>
          <div class="flex h-full flex-1 flex-col items-start justify-start">
            <div class="flex w-full flex-row items-start justify-start gap-x-3">
              <p
                class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                Charlie
              </p>
              <p class="text-[#A18249] text-sm font-normal leading-normal">
                3 days ago
              </p>
            </div>
            <p class="text-[#1C160C] text-sm font-normal leading-normal">
              Hi, I'm a product manager with a background in SaaS and
              e-commerce. I'm interested in joining Acme to help build and grow
              your developer tools. Let's chat!
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
                  5
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
    </div>
  </div>
</template>
