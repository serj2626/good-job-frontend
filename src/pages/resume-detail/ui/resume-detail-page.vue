<script setup lang="ts">
import { BootstrapIcons } from "~/src/shared/types/icons/bootstrap-icons";
import type { IResume } from "../model/resume.type";
import { HeroIcons } from "~/src/shared/types/icons/hero-icons";
const config = useRuntimeConfig();
const {
  data: resume,
  pending,
  error,
  refresh,
} = await useAsyncData<IResume>("resume", () =>
  $fetch(
    config.public.apiUrl + `/api/employees/resume/${useRoute().params.id}/`
  )
);
</script>
<template>
  <div class="relative px-3 flex flex-1 justify-center pb-5 shadow-2xl rounded-md">
    <Icon :name="HeroIcons.FAVORITE" class="w-6 h-6 absolute top-3 right-4" />
    <div class="flex flex-col max-w-[960px]">
      <div class="flex justify-between items-center py-5">
        <div class="flex gap-4">
          <div
            class="bg-no-repeat aspect-square bg-cover bg-center rounded-full min-h-32 w-32"
            :style="{
              backgroundImage: 'url(' + resume?.avatar + ')',
            }"
          ></div>
          <div class="flex flex-col justify-center">
            <NuxtLink
              :to="{
                name: 'employees-id',
                params: { id: resume?.employee?.id },
              }"
              class="text-[#111418] hover:text-emerald-600 transition-colors duration-200 cursor-pointer ease-in text-[22px] font-bold leading-tight tracking-[-0.015em]"
            >
              {{ resume?.full_name }}
            </NuxtLink>
            <p class="text-[#637588] text-base font-normal leading-normal">
              {{ resume?.position }}
            </p>
          </div>
        </div>
        <div>
          <UButton
            label="Скачать резюме"
            color="gray"
            variant="solid"
            size="lg"
            :icon="HeroIcons.DOWNLOAD"
          />
        </div>
      </div>

      <!-- <div class="pb-3">
        <div class="flex border-b border-[#dce0e5] px-4 gap-8">
          <a
            class="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4"
            href="#"
          >
            <p
              class="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Личная информация
            </p>
          </a>
          <a
            class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
            href="experience"
          >
            <p
              class="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Опыт работы
            </p>
          </a>
          <a
            class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
            href="education"
          >
            <p
              class="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Образование
            </p>
          </a>
          <a
            class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
            href="skills"
          >
            <p
              class="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Стек
            </p>
          </a>
          <a
            class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
            href="projects"
          >
            <p
              class="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Проекты
            </p>
          </a>
          <a
            class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
            href="links"
          >
            <p
              class="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              Ссылки
            </p>
          </a>
          <a
            class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4"
            href="about"
          >
            <p
              class="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              О себе
            </p>
          </a>
        </div>
      </div> -->
      <section id="info" class="border-t-2 border-[#dce0e5]">
        <h2
          class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
        >
          Личная информация
        </h2>
        <div class="flex gap-4 bg-white px-4 py-3">
          <div class="flex flex-col gap-3 justify-center">
            <div class="flex gap-3">
              <Icon :name="HeroIcons.USER_SOLID" class="w-5 h-5" />
              <p class="text-[#637588] text-sm font-normal leading-normal">
                {{ resume?.full_name }}
              </p>
            </div>

            <div class="flex gap-3">
              <Icon :name="BootstrapIcons.POSITION" class="w-5 h-5" />
              <p class="text-[#637588] text-sm font-normal leading-normal">
                {{ resume?.position }}
              </p>
            </div>

            <div class="flex gap-3">
              <Icon :name="HeroIcons.CAKE_SOLID" class="w-5 h-5" />
              <p class="text-[#637588] text-sm font-normal leading-normal">
                {{ resume?.employee?.age }} лет
              </p>
            </div>

            <div class="flex gap-3">
              <Icon :name="HeroIcons.LOCATION_SOLID" class="w-5 h-5" />
              <p class="text-[#637588] text-sm font-normal leading-normal">
                {{ resume?.employee?.city }}, {{ resume?.employee?.country }}
              </p>
            </div>
            <div class="flex gap-3">
              <Icon :name="HeroIcons.PHONE_SOLID" class="w-5 h-5" />
              <p class="text-[#637588] text-sm font-normal leading-normal">
                {{ resume?.employee?.phone }}
              </p>
            </div>

            <div class="flex gap-3">
              <Icon :name="HeroIcons.MAIL_SOLID" class="w-5 h-5" />
              <p class="text-[#637588] text-sm font-normal leading-normal">
                {{ resume?.employee?.user.email }}
              </p>
            </div>

            <div class="flex gap-3">
              <Icon :name="HeroIcons.MONEY" class="w-5 h-5" />
              <p
                v-if="resume?.max_salary"
                class="text-[#637588] text-sm font-normal leading-normal"
              >
                {{ resume?.min_salary }} - {{ resume?.max_salary }}
              </p>
              <p
                v-else
                class="text-[#637588] text-sm font-normal leading-normal"
              >
                от {{ resume?.min_salary }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2
          class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
        >
          Опыт работы
        </h2>
        <div
          v-for="exp in resume?.employee?.experiences"
          :key="exp.id"
          class="flex gap-4 bg-white px-4 py-3"
        >
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
            style="
              background-image: url('https://cdn.usegalileo.ai/sdxl10/e0bd9c1b-4226-429a-a9ca-6725d1a2fc96.png');
            "
          ></div>
          <div class="flex flex-1 flex-col justify-center">
            <p class="text-[#111418] text-base font-medium leading-normal">
              {{ exp.position }}
            </p>
            <p class="text-[#637588] text-sm font-normal leading-normal">
              {{ exp.company }}
            </p>
            <p class="text-[#637588] text-sm font-normal leading-normal">
              {{ exp.start_date }} - {{ exp.end_date || "По настоящее время" }}
            </p>
          </div>
        </div>

        <div class="flex px-4 py-3 justify-start">
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <div
              class="text-[#111418]"
              data-icon="Plus"
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
                  d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
                ></path>
              </svg>
            </div>
            <span class="truncate">Добавить опыт</span>
          </button>
        </div>
      </section>

      <section id="education">
        <h2
          class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
        >
          Образование
        </h2>

        <div
          v-for="edu in resume?.employee?.educations"
          :key="edu.id"
          class="flex gap-4 bg-white px-4 py-3"
        >
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
            style="
              background-image: url('https://cdn.usegalileo.ai/sdxl10/807f4e8d-759d-4e00-9fff-c7819f880405.png');
            "
          ></div>
          <div class="flex flex-1 flex-col justify-center">
            <p class="text-[#111418] text-base font-medium leading-normal">
              {{ edu.university }}
            </p>
            <p class="text-[#637588] text-sm font-normal leading-normal">
              {{ edu.specialization }}
            </p>
            <p class="text-[#637588] text-sm font-normal leading-normal">
              {{ edu.start_date }} - {{ edu.end_date || "По настоящее время" }}
            </p>
          </div>
        </div>
        <div class="flex px-4 py-3 justify-start">
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <div
              class="text-[#111418]"
              data-icon="Plus"
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
                  d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
                ></path>
              </svg>
            </div>
            <span class="truncate">Добавить образование</span>
          </button>
        </div>
      </section>

      <section id="skills" class="pb-5">
        <h2
          class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
        >
          Стек
        </h2>
        <div class="flex items-center gap-3 flex-wrap ps-3">
          <div v-for="(stack, index) in resume?.stacks" :key="index">
            <UButton disabled color="gray" size="md" variant="solid">
              {{ stack }}</UButton
            >
          </div>
        </div>
        <div class="flex px-4 py-3 justify-start my-3">
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <div
              class="text-[#111418]"
              data-icon="Plus"
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
                  d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
                ></path>
              </svg>
            </div>
            <span class="truncate">Добавить навык</span>
          </button>
        </div>
      </section>

      <section id="projects">
        <h2
          class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
        >
          Проекты
        </h2>
        <div class="flex flex-col gap-3">
          <div
            class="flex gap-4 bg-white px-4 py-3"
            v-for="project in resume?.employee?.projects"
            :key="project.id"
          >
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[70px]"
              :style="'background-image: url(' + project.image + ');'"
            ></div>
            <div class="flex flex-1 flex-col gap-1 justify-center">
              <p class="text-[#111418] text-base font-medium leading-normal">
                {{ project.title }}
              </p>
              <p class="text-[#637588] text-sm font-normal leading-normal">
                {{ project.description.slice(0, 60) + "..." }}
              </p>
              <a
                class="text-[#637588] text-sm font-normal leading-normal"
                href=""
                >{{ project.link }}</a
              >
            </div>
          </div>
        </div>
      </section>

      <section id="links">
        <h2
          class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
        >
          Ссылки
        </h2>
        <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div
            class="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
            data-icon="LinkedinLogo"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path
                d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <p
              class="text-[#111418] text-base font-medium leading-normal line-clamp-1"
            >
              LinkedIn
            </p>
            <p
              class="text-[#637588] text-sm font-normal leading-normal line-clamp-2"
            >
              linkedin.com/in/john-smith
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div
            class="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
            data-icon="GithubLogo"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path
                d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <p
              class="text-[#111418] text-base font-medium leading-normal line-clamp-1"
            >
              GitHub
            </p>
            <p
              class="text-[#637588] text-sm font-normal leading-normal line-clamp-2"
            >
              github.com/johnsmith
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div
            class="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
            data-icon="CodesandboxLogo"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path
                d="M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <p
              class="text-[#111418] text-base font-medium leading-normal line-clamp-1"
            >
              CodeSandbox
            </p>
            <p
              class="text-[#637588] text-sm font-normal leading-normal line-clamp-2"
            >
              codesandbox.io/u/johnsmith
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div
            class="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
            data-icon="DribbbleLogo"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path
                d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.65,96.18Q211.83,120,208,120a168.58,168.58,0,0,0-43.94,5.84A166.52,166.52,0,0,0,150.61,96a168.32,168.32,0,0,0,38.2-31.55A87.78,87.78,0,0,1,215.65,120.18ZM176.28,54.46A151.75,151.75,0,0,1,142,82.52a169.22,169.22,0,0,0-38.63-39,88,88,0,0,1,73,10.94ZM85.65,50.88a153.13,153.13,0,0,1,42,39.18A151.82,151.82,0,0,1,64,104a154.19,154.19,0,0,1-20.28-1.35A88.39,88.39,0,0,1,85.65,50.88ZM40,128a87.73,87.73,0,0,1,.53-9.64A168.85,168.85,0,0,0,64,120a167.84,167.84,0,0,0,72.52-16.4,150.82,150.82,0,0,1,12.31,27.13,167.11,167.11,0,0,0-24.59,11.6,169.22,169.22,0,0,0-55.07,51.06A87.8,87.8,0,0,1,40,128Zm42,75a152.91,152.91,0,0,1,50.24-46.79,148.81,148.81,0,0,1,20.95-10,152.48,152.48,0,0,1,3.73,33.47,152.93,152.93,0,0,1-3.49,32.56A87.92,87.92,0,0,1,82,203Zm89.06,1.73a170,170,0,0,0,1.86-25,168.69,168.69,0,0,0-4.45-38.47A152.31,152.31,0,0,1,208,136q3.8,0,7.61.19A88.13,88.13,0,0,1,171.06,204.72Z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col justify-center">
            <p
              class="text-[#111418] text-base font-medium leading-normal line-clamp-1"
            >
              Dribbble
            </p>
            <p
              class="text-[#637588] text-sm font-normal leading-normal line-clamp-2"
            >
              dribbble.com/johnsmith
            </p>
          </div>
        </div>
        <div class="flex px-4 py-3 justify-start">
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <div
              class="text-[#111418]"
              data-icon="Plus"
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
                  d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
                ></path>
              </svg>
            </div>
            <span class="truncate">Добавить ссылку</span>
          </button>
        </div>
      </section>

      <section id="about">
        <h2
          class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
        >
          О себе
        </h2>
        <div class="px-4 py-3">
          {{ resume?.about ? resume.about : "Данные отсутствуют" }}
        </div>
      </section>
    </div>
  </div>
</template>
