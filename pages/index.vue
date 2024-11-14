<script setup lang="ts">
</script>
<template>
<div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style='font-family: Manrope, "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <div class="gap-1 px-6 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-80">
            <div class="flex h-full min-h-[700px] flex-col justify-between bg-white p-4">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f0f2f4]">
                    <div class="text-[#111418]" data-icon="House" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Home</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="Bookmark" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Saved Jobs</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Applied Jobs</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="Buildings" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Company Directory</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="Money" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Salary</p>
                  </div>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <div class="text-[#111418]" data-icon="ChatCircle" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
                        ></path>
                      </svg>
                    </div>
                    <p class="text-[#111418] text-sm font-medium leading-normal">Interview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Find your next job</p>
                <p class="text-[#637588] text-sm font-normal leading-normal">Search hundreds of thousands of job listings to find the perfect job for you</p>
              </div>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Job title, keywords, or company"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="City, state, or zip code"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex justify-stretch">
              <div class="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Remote</span>
                </button>
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Full-time</span>
                </button>
              </div>
            </div>
            <h3 class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Filter by</h3>
            <div class="flex flex-wrap gap-3 p-4">
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                All
                <input type="radio" class="invisible absolute" name="78a6c972-cfc1-414f-bf78-e3469e166ce8" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                1+
                <input type="radio" class="invisible absolute" name="78a6c972-cfc1-414f-bf78-e3469e166ce8" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                2+
                <input type="radio" class="invisible absolute" name="78a6c972-cfc1-414f-bf78-e3469e166ce8" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                3+
                <input type="radio" class="invisible absolute" name="78a6c972-cfc1-414f-bf78-e3469e166ce8" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                4+
                <input type="radio" class="invisible absolute" name="78a6c972-cfc1-414f-bf78-e3469e166ce8" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                5+
                <input type="radio" class="invisible absolute" name="78a6c972-cfc1-414f-bf78-e3469e166ce8" />
              </label>
            </div>
            <div class="flex flex-wrap gap-3 p-4">
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                All
                <input type="radio" class="invisible absolute" name="40e16bbe-4692-4152-9b57-f5230da2d742" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                Internship
                <input type="radio" class="invisible absolute" name="40e16bbe-4692-4152-9b57-f5230da2d742" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                Entry Level
                <input type="radio" class="invisible absolute" name="40e16bbe-4692-4152-9b57-f5230da2d742" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                Associate
                <input type="radio" class="invisible absolute" name="40e16bbe-4692-4152-9b57-f5230da2d742" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                Mid Senior
                <input type="radio" class="invisible absolute" name="40e16bbe-4692-4152-9b57-f5230da2d742" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                Director
                <input type="radio" class="invisible absolute" name="40e16bbe-4692-4152-9b57-f5230da2d742" />
              </label>
              <label
                class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
              >
                Executive
                <input type="radio" class="invisible absolute" name="40e16bbe-4692-4152-9b57-f5230da2d742" />
              </label>
            </div>
            <div class="flex gap-3 p-3 flex-wrap pr-4">
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">JavaScript</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">Python</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">Java</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">C++</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">C#</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">TypeScript</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">Swift</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">Ruby</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">Go</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">PHP</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">Rust</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">Kotlin</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">Objective-C</p>
              </div>
              <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p class="text-[#111418] text-sm font-medium leading-normal">VimL</p>
              </div>
            </div>
            <div class="flex justify-stretch">
              <div class="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-transparent text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Clear filters</span>
                </button>
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#3289e7] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped></style>