<script setup lang="ts">
import type { IResume } from "../model/resume.type";
import { SelectAction } from "~/src/features/select-action";
import ResumeInfoData from "./ResumeInfoData.vue";
import ResumeExperienceList from "./ResumeExperienceList.vue";
import ResumeEducationList from "./ResumeEducationList.vue";
import ResumeProjectList from "./ResumeProjectList.vue";
import ResumeTitleSection from "./ResumeTitleSection.vue";

import { APIRoutes } from "~/src/shared/router/types";

const { $apiFetch } = useNuxtApp();

const { data: resume } = await useAsyncData<IResume>(
  "resume-detail-page-data",
  () => $apiFetch(APIRoutes.resumes.getResume(useRoute().params.id as string))
);
</script>

<template>
  <div class="relative px-3 pb-5 rounded-md shadow-2xl dark:bg-slate-50">
    <div class="flex flex-col w-3/4 mx-auto">
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
              {{ resume?.employee?.first_name }}
              {{ resume?.employee?.last_name }}
            </NuxtLink>
            <p class="text-[#637588] text-base font-normal">
              {{ resume?.position }}
            </p>
          </div>
        </div>
        <div>
          <SelectAction action="resume" />
        </div>
      </div>
      <section id="info">
        <ResumeTitleSection type="info" title="Личная информация" />
        <div class="flex gap-4 bg-white px-4 py-3">
          <div class="flex flex-col gap-3 justify-center">
            <ResumeInfoData v-if="resume" :resume="resume" />
          </div>
        </div>
      </section>

      <section id="experience">
        <ResumeTitleSection type="experiences" title="Опыт работы" />
        <ResumeExperienceList
          class="px-4 py-3"
          v-for="exp in resume?.employee?.experiences"
          :exp="exp"
          :key="exp.id"
        />
      </section>

      <section id="education">
        <ResumeTitleSection type="educations" title="Образование" />

        <ResumeEducationList
          class="bg-white px-4 py-3"
          v-for="edu in resume?.employee?.educations"
          :edu="edu"
          :key="edu.id"
        />
      </section>

      <section id="skills" class="pb-5">
        <ResumeTitleSection type="skills" title="Технологии" />
        <div class="flex items-center gap-3 flex-wrap px-4 py-5">
          <UButton
            v-for="(stack, index) in resume?.stacks"
            :key="index"
            disabled
            color="gray"
            size="md"
            variant="solid"
          >
            {{ stack }}
          </UButton>
        </div>
      </section>

      <section id="projects">
        <ResumeTitleSection type="projects" title="Проекты" />

        <div class="flex flex-col gap-3">
          <ResumeProjectList
            class="bg-white px-4 py-3"
            v-for="project in resume?.employee?.projects"
            :project="project"
            :key="project.id"
          />
        </div>
      </section>
      <section id="links">
        <ResumeTitleSection type="links" title="Ссылки" />

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
            <p class="text-[#111418] text-base font-medium line-clamp-1">
              LinkedIn
            </p>
            <p class="text-[#637588] text-sm font-normal line-clamp-2">
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
            <p class="text-[#111418] text-base font-medium line-clamp-1">
              GitHub
            </p>
            <p class="text-[#637588] text-sm font-normal line-clamp-2">
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
            <p class="text-[#111418] text-base font-medium line-clamp-1">
              CodeSandbox
            </p>
            <p class="text-[#637588] text-sm font-normal line-clamp-2">
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
            <p class="text-[#111418] text-base font-medium line-clamp-1">
              Dribbble
            </p>
            <p class="text-[#637588] text-sm font-normal line-clamp-2">
              dribbble.com/johnsmith
            </p>
          </div>
        </div>
        <!-- <div class="flex px-4 py-3 justify-start">
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] gap-2 pl-4 text-sm font-bold  tracking-[0.015em]"
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
        </div> -->
      </section>

      <section id="about">
        <ResumeTitleSection type="about" title="Обо мне" />
        <div
          class="px-4 py-5 text-gray-600 text-base leading-normal before:pl-8"
        >
          {{ resume?.about ? resume.about : "Данные отсутствуют" }}
        </div>
      </section>
    </div>
  </div>
</template>
