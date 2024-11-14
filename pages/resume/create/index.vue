<script setup lang="ts">
</script>
<template>
   <div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style='font-family: Manrope, "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
          <div class="flex items-center gap-4 text-[#111418]">
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">CodeJobs</h2>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a class="text-[#111418] text-sm font-medium leading-normal" href="#">Jobs</a>
              <a class="text-[#111418] text-sm font-medium leading-normal" href="#">Companies</a>
              <a class="text-[#111418] text-sm font-medium leading-normal" href="#">Remote</a>
              <a class="text-[#111418] text-sm font-medium leading-normal" href="#">Salaries</a>
              <a class="text-[#111418] text-sm font-medium leading-normal" href="#">Resources</a>
            </div>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#3289e7] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Post a job</span>
            </button>
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style='background-image: url("https://cdn.usegalileo.ai/stability/1f73ee23-c8c6-4796-b0aa-79c90b8a943e.png");'
            ></div>
          </div>
        </header>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap gap-2 p-4">
              <a class="text-[#637588] text-base font-medium leading-normal" href="#">Home</a>
              <span class="text-[#637588] text-base font-medium leading-normal">/</span>
              <span class="text-[#111418] text-base font-medium leading-normal">Resumes</span>
            </div>
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">Create a resume</p>
                <p class="text-[#637588] text-base font-normal leading-normal">
                  A great resume can help you stand out. Let's get started with some tips on how to write a great resume.
                </p>
              </div>
            </div>
            <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Personal information</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">First name</p>
                <input
                  placeholder="John"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Last name</p>
                <input
                  placeholder="Doe"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Location</p>
                <input
                  placeholder="San Francisco, CA"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Summary</p>
                <textarea
                  placeholder="Write a short summary about yourself"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Work experience</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Job title</p>
                <input
                  placeholder="Software Engineer"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Company</p>
                <input
                  placeholder="Google"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Location</p>
                <input
                  placeholder="Mountain View, CA"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Start date</p>
                <input
                  placeholder="June 2022"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">End date</p>
                <input
                  placeholder="June 2023"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Description</p>
                <textarea
                  placeholder="Write a short description of your role and responsibilities"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Education</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">School</p>
                <input
                  placeholder="Stanford University"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Degree</p>
                <input
                  placeholder="B.S. Computer Science"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Graduation date</p>
                <input
                  placeholder="June 2018"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Technical skills</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Skills</p>
                <textarea
                  placeholder="Python, Java, React, etc."
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Projects</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Project title</p>
                <input
                  placeholder="E-commerce website"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#111418] text-base font-medium leading-normal pb-2">Link to project</p>
                <input
                  placeholder="https://example.com"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex justify-stretch">
              <div class="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Preview resume</span>
                </button>
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#3289e7] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Save resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped></style>