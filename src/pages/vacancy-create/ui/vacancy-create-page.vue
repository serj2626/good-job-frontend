<script setup lang="ts"></script>
<template>

    <div
      class="flex flex-col  pb-5  flex-1"
    >
      <div class="flex flex-wrap justify-center gap-3 p-4">
        <p
          class="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72"
        >
          Создание вакансии
        </p>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#111418] text-base font-medium leading-normal pb-2">
            Должность
          </p>
          <input
            placeholder="Engineering Manager, Senior Software Engineer, etc..."
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <h3
        class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Компания
      </h3>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#111418] text-base font-medium leading-normal pb-2">
            Название компании
          </p>
          <input
            placeholder="Acme Inc."
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#111418] text-base font-medium leading-normal pb-2">
            Ссылка на сайт
          </p>
          <input
            placeholder="https://example.com"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <h3
        class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Описание
      </h3>
      <div class="px-4">
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
            checked="true"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">
            I am looking for a candidate with 3+ years of experience
          </p>
        </label>
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
            checked="true"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">
            I am looking for a candidate with a degree in computer science or
            related field
          </p>
        </label>
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">
            I am looking for a candidate with experience working in a specific
            industry
          </p>
        </label>
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">
            I am looking for a candidate who has worked at a company of a
            specific size
          </p>
        </label>
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">
            I am looking for a candidate who has experience with a specific
            technology
          </p>
        </label>
      </div>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#111418] text-base font-medium leading-normal pb-2">
            Опыт работы
          </p>
          <textarea
            placeholder="My job description..."
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] min-h-36 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <h3
        class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Стек
      </h3>
      <div class="px-4">
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
            checked="true"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">
            JavaScript
          </p>
        </label>
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
            checked="true"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">
            Python
          </p>
        </label>
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">
            Java
          </p>
        </label>
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">
            Ruby
          </p>
        </label>
        <label class="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
          />
          <p class="text-[#111418] text-base font-normal leading-normal">C++</p>
        </label>
      </div>
      <h3
        class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Тип занятости
      </h3>
      <div class="flex gap-3 p-3 flex-wrap pr-4">
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Full time
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Part time
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Contract
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Internship
          </p>
        </div>
      </div>
      <h3
        class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Страна
      </h3>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <input
            placeholder="City, state, country"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <h3
        class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Зарплата
      </h3>
      <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Min"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
        <label class="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Max"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <h3
        class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
      >
        Benefits
      </h3>
      <div class="flex gap-3 p-3 flex-wrap pr-4">
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Health Insurance
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Retirement Plan
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Flexible Hours
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Paid Time Off
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Professional Development
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Remote Work
          </p>
        </div>
        <div
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4"
        >
          <p class="text-[#111418] text-sm font-medium leading-normal">
            Wellness Programs
          </p>
        </div>
      </div>
      <div class="flex px-4 py-3">
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#1980e6] text-white text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span class="truncate">Post Job</span>
        </button>
      </div>
    </div>

</template>
<style scoped lang="scss"></style>
