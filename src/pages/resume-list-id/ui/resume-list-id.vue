<script setup lang="ts">
const rusumeList = [
  {
    id: 1,
    title: "Frontend Developer",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "SASS"],
    description: "I am a frontend developer with 2 years of experience.",
  },
  {
    id: 2,
    title: "Backend Developer",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["Node.js", "Express", "MongoDB"],
    description: "I am a backend developer with 2 years of experience.",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    fullName: "John Doe",
    city: "New York",
    country: "USA",
    salary: "50000 - 10000",
    experience: "2 years",
    stacks: ["React", "Node.js", "Express", "MongoDB"],
    description: "I am a fullstack developer with 2 years of experience.",
  },
]
</script>
<template>
  <div class="grid grid-cols-[minmax(0,300px),1fr]">
    <div class="left-block flex flex-col gap-4"">
      <section id=" profile" class="bg-gray-100 text-center shadow-md p-3">
      <div class="flex justify-between items-center mb-2">
        <p class="text-base font-bold px-4 pb-2 text-start text-teal-500">
          Ищу работу
        </p>
        <UToggle size="xl" color="teal" :model-value="true" />
      </div>

      <img src="https://cdn.usegalileo.ai/stability/37c54038-755b-4fdd-bffb-3b5b2334dfcc.png"
        class="w-3/4 mx-auto rounded-full" />
      <h3 class="text-[#111418] text-2xl font-bold px-4 pb-2 pt-4 mb-3">
        Сергей Бойцов
      </h3>
      <p class="text-[#111418] text-base font-normal px-4 pb-2 mb-4">
        Frontend Developer
      </p>
      <UIButton />
      <UButton size="xl" color="fuchsia" variant="solid">Подписаться</UButton>
      </section>
      <section id="contacts" class="bg-gray-100 shadow-md p-3"">
        <h4>Контакты</h4>
        <div class=" flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <i class="fa-solid fa-phone fa-lg" style="color: #B197FC;"></i>
          <p class="text-[#111418] text-base font-medium leading-normal">
            +7 (999) 999-99-99
          </p>
        </div>
        <div class="flex items-center justify-between">
          <i class="fa-brands fa-github fa-lg"></i>
          <p class="text-[#111418] text-base font-medium leading-normal">
            Github
          </p>
        </div>
        <div class="flex items-center justify-between">
          <i class="fa-brands fa-telegram fa-lg" style="color: #74C0FC;"></i>
          <p class="text-[#111418] text-base font-medium leading-normal">
            serj2626
          </p>
        </div>
        <div class="flex items-center justify-between">
          <i class="fa-solid fa-envelope fa-lg" style="color: #74C0FC;"></i>
          <p class="text-[#111418] text-base font-medium leading-normal">
            serj2626@mail.ru
          </p>
        </div>
        <div class="flex items-center justify-between">
          <i class="fa-brands fa-linkedin fa-lg" style="color: #058df5;"></i>
          <p class="text-[#111418] text-base font-medium leading-normal">
            serj2626
          </p>
        </div>
    </div>
    </section>
    <section id="info" class="bg-gray-100 shadow-md flex flex-col gap-2 p-3">
      <p><span>Возраст:</span> 31</p>
      <p><span>Страна:</span> Россия</p>
      <p><span>Город:</span> Москва</p>
      <p><span>Пол:</span> Мужской</p>
      <p><span>Опыт:</span> 3 года</p>
      <p><span>Мои резюме:</span> 3</p>
    </section>
  </div>
  <div class="right-block ps-5">

    <section id="resumes" class="bg-gray-100 p-3 rounded-md shadow-2xl">
      <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4 mb-4">
        Мои резюме
      </h3>
      <div class="grid grid-cols-3 gap-4">
        <UCard v-for="resume in rusumeList" :key="resume.id">
          <template #header>
            <img src="https://cdn.usegalileo.ai/stability/37c54038-755b-4fdd-bffb-3b5b2334dfcc.png">
          </template>
          <template #footer>
            {{ resume.title }}
          </template>
        </UCard>
      </div>
    </section>
  </div>
  </div>
</template>
