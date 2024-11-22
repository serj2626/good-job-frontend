<script setup lang="ts">
const stacks = [
  {
    id: 1,
    title: "React",
  },
  {
    id: 2,
    title: "TypeScript",
  },
  {
    id: 3,
    title: "JavaScript",
  },
  {
    id: 4,
    title: "HTML",
  },
  {
    id: 5,
    title: "CSS",
  },
  {
    id: 6,
    title: "SASS",
  },
  {
    id: 7,
    title: "Redux",
  },
  {
    id: 8,
    title: "Webpack",
  },
  {
    id: 9,
    title: "Node.js",
  },
  {
    id: 10,
    title: "GraphQL",
  },
  {
    id: 11,
    title: "Docker",
  },
  {
    id: 12,
    title: "AWS",
  },
  {
    id: 13,
    title: "Kubernetes",
  },
  {
    id: 14,
    title: "Git",
  },
  {
    id: 15,
    title: "Python",
  },
  {
    id: 16,
    title: "Java",
  },
  {
    id: 17,
    title: "C++",
  },
  {
    id: 18,
    title: "C#",
  },
  {
    id: 19,
    title: "C",
  },
  {
    id: 20,
    title: "PHP",
  },
];


const projects = [
  { id: 1, title: "Connect" },
  { id: 2, title: "Fitness" },
  { id: 3, title: "Vue-car-shop" },
  { id: 4, title: "Student journal" },
]
</script>
<template>
  <div class="grid grid-cols-[minmax(0,300px),1fr]">
    <div class="left-block flex flex-col gap-4"">
      <section id="profile" class="bg-gray-100 text-center shadow-md p-3">
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
  <div class="right-block ps-5 flex flex-col gap-8">
    <section id="projects" class="bg-gray-100 p-3 rounded-md shadow-2xl">
      <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4">
        Проекты
      </h3>
      <div class="flex gap-3 items-center">
        <div class="project" v-for="project in projects" :key="project.id">
          <img src="https://cdn.usegalileo.ai/stability/37c54038-755b-4fdd-bffb-3b5b2334dfcc.png">
          {{ project.title }}
        </div>
      </div>

    </section>
    <div class="flex flex-col gap-5">
      <section id="stack" class="bg-gray-100 p-3 rounded-md shadow-md">
        <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4">
          Навыки
        </h3>
        <div class="flex items-center gap-3 flex-wrap">
          <div v-for="stack in stacks" :key="stack.id">
            <UButton disabled color="teal" size="md" ariant="solid">
              {{ stack.title }}</UButton>
          </div>
        </div>
      </section>
      <section id="education" class="bg-gray-100 p-3 rounded-md shadow-md">
        <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4">
          Образование
        </h3>
        Сфера IT мне очень интересна, тк в ней я буду развиваться как в
        знания, я смогу внести свой вклад в
        улучшении качества продуктов своей будущей компании.
      </section>
      <section id="experience" class="bg-gray-100 p-3 rounded-md shadow-md">
        <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4">
          Опыт работы
        </h3>
        Сфера IT мне очень интересна, тк в ней я буду развиваться как в
        проаспределять свой рабочий день.
        Уверен, получив все необходимые знания, я смогу внести свой вклад в
        улучшении качества продуктов своей будущей компании.
      </section>
      <section id="about" class="bg-gray-100 p-3 rounded-md shadow-md">
        <h3 class="text-[#111418] text-lg font-bold px-4 pb-2 pt-4">
          Обо мне
        </h3>
        Сфера IT мне очень интересна, тк в ней я буду развиваться как в
        профессиональном се необходимые знания, я смогу внести свой вклад в
        улучшении качества продуктов своей будущей компании. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi, neque. Quas sequi tempora sint quisquam ad perspiciatis in veniam iure molestias iusto asperiores quia at
        alias voluptate rerum deleniti, illo, culpa totam. Inventore, ullam quasi, incidunt, rem obcaecati eligendi enim
        laboriosam excepturi ex repellendus doloremque totam voluptatibus vero! Sunt placeat eum assumenda animi in
        neque quasi similique quaerat commodi dignissimos? Nobis, voluptates quos accusamus dolores quia nihil facilis
        vitae recusandae possimus nostrum minima non ut. Itaque impedit similique doloremque exercitationem officia
        mollitia esse voluptas vitae quo repellat, consectetur quibusdam nobis eius voluptates rerum pariatur natus,
        quae fugiat eaque sequi. Et?
      </section>
    </div>
  </div>
  </div>
</template>