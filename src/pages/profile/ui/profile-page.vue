<script setup lang="ts">
</script>
<template>
    <div class="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'>
        <div class="layout-container flex h-full grow flex-col">
          <div class="gap-1 px-6 flex flex-1 justify-center py-5">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div class="flex p-4 @container">
                <div class="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                  <div class="flex gap-4">
                    <div
                      class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                      style='background-image: url("https://cdn.usegalileo.ai/stability/37c54038-755b-4fdd-bffb-3b5b2334dfcc.png");'
                    ></div>
                    <div class="flex flex-col justify-center">
                      <p class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em]">John Smith</p>
                      <p class="text-[#A18249] text-base font-normal leading-normal">Senior Software Engineer</p>
                    </div>
                  </div>
                  <button
                    class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
                  >
                    <span class="truncate">Edit Profile</span>
                  </button>
                </div>
              </div>
              <h2 class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
              <div class="flex gap-3 p-3 flex-wrap pr-4">
                <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#F4EFE6] pl-4 pr-4">
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">React</p>
                </div>
                <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#F4EFE6] pl-4 pr-4">
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">TypeScript</p>
                </div>
                <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#F4EFE6] pl-4 pr-4">
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">Node.js</p>
                </div>
                <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#F4EFE6] pl-4 pr-4">
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">GraphQL</p>
                </div>
                <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#F4EFE6] pl-4 pr-4">
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">Docker</p>
                </div>
                <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#F4EFE6] pl-4 pr-4">
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">AWS</p>
                </div>
                <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#F4EFE6] pl-4 pr-4">
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">Kubernetes</p>
                </div>
                <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#F4EFE6] pl-4 pr-4">
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">Jest</p>
                </div>
                <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#F4EFE6] pl-4 pr-4">
                  <p class="text-[#1C160C] text-sm font-medium leading-normal">Cypress</p>
                </div>
              </div>
              <h2 class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience</h2>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="Briefcase" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">Senior Software Engineer</p>
                    <p class="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">Aug 2020 - Present</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit"
                  >
                    <span class="truncate">Edit</span>
                  </button>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="Briefcase" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">Software Engineer II</p>
                    <p class="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">Jul 2018 - Aug 2020</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit"
                  >
                    <span class="truncate">Edit</span>
                  </button>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="Briefcase" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">Software Engineer I</p>
                    <p class="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">Jul 2016 - Jul 2018</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit"
                  >
                    <span class="truncate">Edit</span>
                  </button>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="Briefcase" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">Software Engineering Intern</p>
                    <p class="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">May 2015 - Aug 2015</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit"
                  >
                    <span class="truncate">Edit</span>
                  </button>
                </div>
              </div>
              <h2 class="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Education</h2>
              <div class="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2 justify-between">
                <div class="flex items-center gap-4">
                  <div class="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-12" data-icon="Student" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">Bachelor of Science in Computer Science</p>
                    <p class="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">Aug 2012 - May 2016</p>
                  </div>
                </div>
                <div class="shrink-0">
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-fit"
                  >
                    <span class="truncate">Edit</span>
                  </button>
                </div>
              </div>
              <div class="flex px-4 py-3 justify-end">
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Save Profile</span>
                </button>
              </div>
              <p class="text-[#A18249] text-sm font-normal leading-normal pb-3 pt-1 px-4">
                Your profile is visible to employers. Only share personal information you're comfortable with.
              </p>
            </div>
          </div>
        </div>
      </div>
</template>