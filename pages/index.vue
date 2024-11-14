<script setup lang="ts"></script>
<template>

<div
          class="layout-content-container flex flex-col max-w-[960px] flex-1"
        >
          <div class="flex flex-wrap justify-between gap-3 p-4">
            <div class="flex min-w-72 flex-col gap-3">
              <p
                class="text-[#111418] tracking-light text-[32px] font-bold leading-tight"
              >
                Find your next job
              </p>
              <p class="text-[#637588] text-sm font-normal leading-normal">
                Search hundreds of thousands of job listings to find the perfect
                job for you
              </p>
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
          <h3
            class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
          >
            Filter by
          </h3>
          <div class="flex flex-wrap gap-3 p-4">
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              All
              <input
                type="radio"
                class="invisible absolute"
                name="78a6c972-cfc1-414f-bf78-e3469e166ce8"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              1+
              <input
                type="radio"
                class="invisible absolute"
                name="78a6c972-cfc1-414f-bf78-e3469e166ce8"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              2+
              <input
                type="radio"
                class="invisible absolute"
                name="78a6c972-cfc1-414f-bf78-e3469e166ce8"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              3+
              <input
                type="radio"
                class="invisible absolute"
                name="78a6c972-cfc1-414f-bf78-e3469e166ce8"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              4+
              <input
                type="radio"
                class="invisible absolute"
                name="78a6c972-cfc1-414f-bf78-e3469e166ce8"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              5+
              <input
                type="radio"
                class="invisible absolute"
                name="78a6c972-cfc1-414f-bf78-e3469e166ce8"
              />
            </label>
          </div>
          <div class="flex flex-wrap gap-3 p-4">
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              All
              <input
                type="radio"
                class="invisible absolute"
                name="40e16bbe-4692-4152-9b57-f5230da2d742"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              Internship
              <input
                type="radio"
                class="invisible absolute"
                name="40e16bbe-4692-4152-9b57-f5230da2d742"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              Entry Level
              <input
                type="radio"
                class="invisible absolute"
                name="40e16bbe-4692-4152-9b57-f5230da2d742"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              Associate
              <input
                type="radio"
                class="invisible absolute"
                name="40e16bbe-4692-4152-9b57-f5230da2d742"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              Mid Senior
              <input
                type="radio"
                class="invisible absolute"
                name="40e16bbe-4692-4152-9b57-f5230da2d742"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              Director
              <input
                type="radio"
                class="invisible absolute"
                name="40e16bbe-4692-4152-9b57-f5230da2d742"
              />
            </label>
            <label
              class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3289e7] relative cursor-pointer"
            >
              Executive
              <input
                type="radio"
                class="invisible absolute"
                name="40e16bbe-4692-4152-9b57-f5230da2d742"
              />
            </label>
          </div>
          <div class="flex gap-3 p-3 flex-wrap pr-4">
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                JavaScript
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                Python
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                Java
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                C++
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                C#
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                TypeScript
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                Swift
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                Ruby
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                Go
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                PHP
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                Rust
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                Kotlin
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                Objective-C
              </p>
            </div>
            <div
              class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
            >
              <p class="text-[#111418] text-sm font-medium leading-normal">
                VimL
              </p>
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
</template>
<style scoped></style>
