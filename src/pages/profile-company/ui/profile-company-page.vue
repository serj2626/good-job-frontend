<script setup lang="ts"></script>
<template>
  <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
    <div class="flex flex-wrap justify-between gap-3 p-4">
      <p
        class="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72"
      >
        Acme Inc.
      </p>
    </div>
    <div class="flex flex-wrap gap-3 px-4 py-3">
      <div
        class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#E9DFCE] p-3 items-center text-center"
      >
        <p
          class="text-[#1C160C] tracking-light text-2xl font-bold leading-tight"
        >
        Россия, Санкт-Петербург
        </p>
        <div class="flex items-center gap-2">
          <p class="text-[#A18249] text-sm font-normal leading-normal">
            Страна
          </p>
        </div>
      </div>
      <div
        class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#E9DFCE] p-3 items-center text-center"
      >
        <p
          class="text-[#1C160C] tracking-light text-2xl font-bold leading-tight"
        >
          example.com
        </p>
        <div class="flex items-center gap-2">
          <p class="text-[#A18249] text-sm font-normal leading-normal">
            Сайт
          </p>
        </div>
      </div>
      <div
        class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#E9DFCE] p-3 items-center text-center"
      >
        <p
          class="text-[#1C160C] tracking-light text-2xl font-bold leading-tight"
        >
          2
        </p>
        <div class="flex items-center gap-2">
          <p class="text-[#A18249] text-sm font-normal leading-normal">
            Открытые вакансии
          </p>
        </div>
      </div>
    </div>
    <h3
      class="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
    >
      О компании
    </h3>
    <p
      class="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4"
    >
      Acme Inc. is a software company that builds tools for developers. We have
      a friendly, remote-first culture and are committed to building a diverse,
      inclusive team. Our products are used by millions of developers worldwide,
      and we're proud to be helping them build amazing things.
    </p>
    <h3
      class="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
    >
      Отзывы
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
          I'm a software engineer with 5 years of experience, currently working
          at Google. I'm interested in learning more about opportunities at
          Acme. Here's my LinkedIn profile: [link]
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
            <p class="text-[#A18249] text-sm font-normal leading-normal">7</p>
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
          Hi, I'm a product manager with a background in SaaS and e-commerce.
          I'm interested in joining Acme to help build and grow your developer
          tools. Let's chat!
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
            <p class="text-[#A18249] text-sm font-normal leading-normal">5</p>
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
    <div class="flex items-center justify-center p-4">
      <a href="#" class="flex size-10 items-center justify-center">
        <div
          class="text-[#1C160C]"
          data-icon="CaretLeft"
          data-size="18px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
            ></path>
          </svg>
        </div>
      </a>
      <a
        class="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#1C160C] rounded-full bg-[#F4EFE6]"
        href="#"
        >1</a
      >
      <a
        class="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1C160C] rounded-full"
        href="#"
        >2</a
      >
      <a
        class="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1C160C] rounded-full"
        href="#"
        >3</a
      >
      <a
        class="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1C160C] rounded-full"
        href="#"
        >4</a
      >
      <a
        class="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1C160C] rounded-full"
        href="#"
        >5</a
      >
      <a href="#" class="flex size-10 items-center justify-center">
        <div
          class="text-[#1C160C]"
          data-icon="CaretRight"
          data-size="18px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
            ></path>
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>
