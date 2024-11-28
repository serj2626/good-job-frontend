<script setup lang="ts"></script>
<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
    style="
      --checkbox-tick-svg: url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(255,255,255)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e');
      font-family: Manrope, 'Noto Sans', sans-serif;
    "
  >
    <div class="layout-container flex h-full grow flex-col">
      <div class="px-40 flex flex-1 justify-center py-5">
        <div
          class="layout-content-container flex flex-col max-w-[960px] flex-1"
        >
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <p
              class="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72"
            >
              Create your resume
            </p>
          </div>
          <div class="flex flex-col gap-3 p-4">
            <div class="flex gap-6 justify-between">
              <p class="text-[#111418] text-base font-medium leading-normal">
                50% complete
              </p>
            </div>
            <div class="rounded bg-[#dce0e5]">
              <div class="h-2 rounded bg-[#111418]" style="width: 50%"></div>
            </div>
            <p class="text-[#637588] text-sm font-normal leading-normal">
              Add more details to your resume so employers can find you
            </p>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Full name
              </p>
              <input
                placeholder="John Smith"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Title
              </p>
              <input
                placeholder="Software Developer"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Location
              </p>
              <input
                placeholder="New York, NY"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Summary
              </p>
              <textarea
                placeholder="Explain the type of work you're looking for, and why you're great at it"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
              ></textarea>
            </label>
          </div>
          <h2
            class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
          >
            Work Experience
          </h2>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Company
              </p>
              <input
                placeholder="Acme Corp"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Title
              </p>
              <input
                placeholder="Software Engineer"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Start date
              </p>
              <input
                placeholder="Apr 2020"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                End date
              </p>
              <input
                placeholder="Present"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Description
              </p>
              <textarea
                placeholder="Describe the work you did here"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
              ></textarea>
            </label>
          </div>
          <h2
            class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
          >
            Education
          </h2>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                School
              </p>
              <input
                placeholder="University of Texas"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Degree
              </p>
              <input
                placeholder="B.S. Computer Science"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Start date
              </p>
              <input
                placeholder="Aug 2016"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                End date
              </p>
              <input
                placeholder="May 2020"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <h2
            class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
          >
            Technical Skills
          </h2>
          <div class="px-4">
            <label class="flex gap-x-3 py-3 flex-row">
              <input
                type="checkbox"
                class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#3289e7] checked:bg-[#3289e7] checked:border-[#3289e7] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
                checked="true"
              />
              <p class="text-[#111418] text-base font-normal leading-normal">
                JavaScript
              </p>
            </label>
            <label class="flex gap-x-3 py-3 flex-row">
              <input
                type="checkbox"
                class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#3289e7] checked:bg-[#3289e7] checked:border-[#3289e7] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
                checked="true"
              />
              <p class="text-[#111418] text-base font-normal leading-normal">
                Python
              </p>
            </label>
            <label class="flex gap-x-3 py-3 flex-row">
              <input
                type="checkbox"
                class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#3289e7] checked:bg-[#3289e7] checked:border-[#3289e7] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
                checked="true"
              />
              <p class="text-[#111418] text-base font-normal leading-normal">
                React
              </p>
            </label>
          </div>
          <h2
            class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
          >
            Projects (optional)
          </h2>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Project title
              </p>
              <input
                placeholder="e.g. Twitter clone"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Description
              </p>
              <textarea
                placeholder="Describe what you built and why"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
              ></textarea>
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Link (optional)
              </p>
              <input
                placeholder="https://"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex px-4 py-3 justify-end">
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-transparent text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Add project</span>
            </button>
          </div>
          <div class="flex justify-stretch">
            <div class="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#3289e7] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Preview</span>
              </button>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
