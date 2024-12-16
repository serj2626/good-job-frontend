<script lang="ts" setup>
import Editor from "primevue/editor";

const showEditor = ref<boolean>(false);
const about = ref("");
</script>

<template>
  <section id="reviews" class="bg-gray-100 p-3 rounded-md shadow-2xl">
    <Transition name="fade" mode="out-in">
      <UTextarea
        v-if="showEditor"
        v-model="about"
        :rows="5"
        :autoResize="true"
        :placeholder="'Напишите отзыв о компании...'"
      />
    </Transition>
    <div class="flex justify-between mb-8 mt-2">
      <h3 class="text-[#111418] dark:text-white text-lg font-bold px-4">
        Отзывы
      </h3>
      <UButton
        v-if="!showEditor"
        @click="showEditor = true"
        icon="i-heroicons-plus"
        size="md"
        color="amber"
        variant="outline"
        >Оставить отзыв
      </UButton>
      <UButton
        v-else
        @click="showEditor = false"
        icon="i-heroicons-check"
        size="md"
        color="sky"
        variant="outline"
        >Отправить
      </UButton>
    </div>
    <div class="flex w-full items-start justify-start gap-3 p-4">
      <UAvatar
        chip-color="emerald"
        chip-text=""
        chip-position="top-left"
        size="2xl"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="flex h-full flex-1 flex-col items-start justify-start">
        <div class="flex w-full items-start justify-between">
          <div class="flex gap-x-4 items-center">
            <p
              class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Alice
            </p>
            <NuxtRating
              :read-only="true"
              :rating-size="16"
              :rating-value="3.5"
            />
          </div>
          <p class="text-[#A18249] text-sm font-normal leading-normal">
            2 days ago
          </p>
        </div>
        <p class="text-[#1C160C] text-sm font-normal leading-normal">
          I'm a big fan of Acme's products and I've been using them for years.
          I'd love to work with you! I'm a full-stack developer with experience
          in React, Node.js, and AWS. Here's my resume: [link]
        </p>
        <div class="flex w-full flex-row items-center justify-start gap-9 pt-2">
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
            <p class="text-[#A18249] text-sm font-normal leading-normal">12</p>
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
    <div class="flex w-full items-start justify-start gap-3 p-4">
      <UAvatar
        chip-color="emerald"
        chip-text=""
        chip-position="top-left"
        size="2xl"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="flex h-full flex-1 flex-col items-start justify-start">
        <div class="flex w-full items-start justify-between">
          <div class="flex gap-x-4 items-center">
            <p
              class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Alice
            </p>
            <NuxtRating
              :read-only="true"
              :rating-size="16"
              :rating-value="3.5"
            />
          </div>
          <p class="text-[#A18249] text-sm font-normal leading-normal">
            2 days ago
          </p>
        </div>
        <p class="text-[#1C160C] text-sm font-normal leading-normal">
          I'm a big fan of Acme's products and I've been using them for years.
          I'd love to work with you! I'm a full-stack developer with experience
          in React, Node.js, and AWS. Here's my resume: [link]
        </p>
        <div class="flex w-full flex-row items-center justify-start gap-9 pt-2">
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
            <p class="text-[#A18249] text-sm font-normal leading-normal">12</p>
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
    <div class="flex w-full items-start justify-start gap-3 p-4">
      <UAvatar
        chip-color="emerald"
        chip-text=""
        chip-position="top-left"
        size="2xl"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="flex h-full flex-1 flex-col items-start justify-start">
        <div class="flex w-full items-start justify-between">
          <div class="flex gap-x-4 items-center">
            <p
              class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Alice
            </p>
            <NuxtRating
              :read-only="true"
              :rating-size="16"
              :rating-value="3.5"
            />
          </div>
          <p class="text-[#A18249] text-sm font-normal leading-normal">
            2 days ago
          </p>
        </div>
        <p class="text-[#1C160C] text-sm font-normal leading-normal">
          I'm a big fan of Acme's products and I've been using them for years.
          I'd love to work with you! I'm a full-stack developer with experience
          in React, Node.js, and AWS. Here's my resume: [link]
        </p>
        <div class="flex w-full flex-row items-center justify-start gap-9 pt-2">
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
            <p class="text-[#A18249] text-sm font-normal leading-normal">12</p>
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
    <div class="flex w-full items-start justify-start gap-3 p-4">
      <UAvatar
        chip-color="emerald"
        chip-text=""
        chip-position="top-left"
        size="2xl"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="flex h-full flex-1 flex-col items-start justify-start">
        <div class="flex w-full items-start justify-between">
          <div class="flex gap-x-4 items-center">
            <p
              class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Alice
            </p>
            <NuxtRating
              :read-only="true"
              :rating-size="16"
              :rating-value="3.5"
            />
          </div>
          <p class="text-[#A18249] text-sm font-normal leading-normal">
            2 days ago
          </p>
        </div>
        <p class="text-[#1C160C] text-sm font-normal leading-normal">
          I'm a big fan of Acme's products and I've been using them for years.
          I'd love to work with you! I'm a full-stack developer with experience
          in React, Node.js, and AWS. Here's my resume: [link]
        </p>
        <div class="flex w-full flex-row items-center justify-start gap-9 pt-2">
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
            <p class="text-[#A18249] text-sm font-normal leading-normal">12</p>
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
    <div class="flex w-full items-start justify-start gap-3 p-4">
      <UAvatar
        chip-color="emerald"
        chip-text=""
        chip-position="top-left"
        size="2xl"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="flex h-full flex-1 flex-col items-start justify-start">
        <div class="flex w-full items-start justify-between">
          <div class="flex gap-x-4 items-center">
            <p
              class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Alice
            </p>
            <NuxtRating
              :read-only="true"
              :rating-size="16"
              :rating-value="3.5"
            />
          </div>
          <p class="text-[#A18249] text-sm font-normal leading-normal">
            2 days ago
          </p>
        </div>
        <p class="text-[#1C160C] text-sm font-normal leading-normal">
          I'm a big fan of Acme's products and I've been using them for years.
          I'd love to work with you! I'm a full-stack developer with experience
          in React, Node.js, and AWS. Here's my resume: [link]
        </p>
        <div class="flex w-full flex-row items-center justify-start gap-9 pt-2">
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
            <p class="text-[#A18249] text-sm font-normal leading-normal">12</p>
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
    <div class="flex w-full items-start justify-start gap-3 p-4">
      <UAvatar
        chip-color="emerald"
        chip-text=""
        chip-position="top-left"
        size="2xl"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <div class="flex h-full flex-1 flex-col items-start justify-start">
        <div class="flex w-full items-start justify-between">
          <div class="flex gap-x-4 items-center">
            <p
              class="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Alice
            </p>
            <NuxtRating
              :read-only="true"
              :rating-size="16"
              :rating-value="3.5"
            />
          </div>
          <p class="text-[#A18249] text-sm font-normal leading-normal">
            2 days ago
          </p>
        </div>
        <p class="text-[#1C160C] text-sm font-normal leading-normal">
          I'm a big fan of Acme's products and I've been using them for years.
          I'd love to work with you! I'm a full-stack developer with experience
          in React, Node.js, and AWS. Here's my resume: [link]
        </p>
        <div class="flex w-full flex-row items-center justify-start gap-9 pt-2">
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
            <p class="text-[#A18249] text-sm font-normal leading-normal">12</p>
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
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
