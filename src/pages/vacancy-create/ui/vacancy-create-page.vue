<script setup lang="ts">
const skills = [
  "Java",
  "Python",
  "C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "Django",
  "FastAPI",
  "Vue",
];

const selected = ref([]);
</script>
<template>
  <div class="flex flex-col shadow-2xl rounded-md px-3 py-12">
    <form id="vacancy-create" class="w-3/4 mx-auto">
      <div class="flex flex-col gap-5 mb-6 text-center">
        <p
          class="text-[#111418] text-4xl mb-5 font-black leading-tight tracking-[-0.033em]"
        >
          Создание вакансии
        </p>
        <p class="text-[#637588] text-base font-normal leading-normal">
          Хорошо оформленная вакансия поможет вам выделиться.
        </p>
      </div>

      <UAlert
        icon="i-heroicons-information-circle"
        color="indigo"
        variant="solid"
        title="Внимание!"
        description="Информация о компании, контактные данные будут добавлены автоматически после создания вакансии.
        При необходимости можно будет изменить в любое время в своем профиле."
      />

      <div id="main" class="flex flex-col gap-5 mt-5">
        <div class="flex items-center gap-3">
          <span class="text-[#111418] text-base font-bold">Должность</span>
          <UInput
            size="xl"
            class="flex-grow"
            color="white"
            variant="outline"
            placeholder="Начните вводить..."
          />
        </div>
        <section id="salary">
          <div class="flex flex-wrap items-end gap-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Город
              </p>
              <USelect
                size="xl"
                placeholder="Выберите..."
                :options="['United States', 'Canada', 'Mexico']"
              />
            </label>
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Страна
              </p>
              <USelect
                size="xl"
                placeholder="Выберите..."
                :options="['United States', 'Canada', 'Mexico']"
              />
            </label>
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#111418] text-base font-medium leading-normal pb-2"
              >
                Метро
              </p>
              <UInput
                size="xl"
                class="flex-grow"
                color="white"
                variant="outline"
                placeholder="Начните вводить..."
              />
            </label>
          </div>
        </section>
        <div class="flex items-center justify-between">
          <div class="flex flex-col items-start gap-3">
            <span class="text-[#111418] text-base font-bold">Категория</span>
            <USelect
              size="xl"
              placeholder="Выберите..."
              :options="['United States', 'Canada', 'Mexico']"
            />
          </div>
          <div class="flex flex-col items-start gap-3">
            <span class="text-[#111418] text-base font-bold"
              >График работы</span
            >
            <USelect
              size="xl"
              placeholder="Выберите..."
              :options="[
                'Удалённая работа',
                'Гибридная работа',
                'Полная занятость',
              ]"
            />
          </div>
          <div class="flex flex-col items-start gap-3">
            <span class="text-[#111418] text-base font-bold"
              >Требуемый стаж</span
            >
            <USelect
              size="xl"
              placeholder="Выберите..."
              :options="[
                'Не имеет значения',
                'Более 6 мес.',
                'От 1 года до 3 лет',
                'Более 3 лет',
              ]"
            />
          </div>
          <div class="flex flex-col items-start gap-3">
            <span class="text-[#111418] text-base font-bold">Квалификация</span>
            <USelect
              size="xl"
              placeholder="Выберите..."
              :options="['Не имеет значения', 'Junior', 'Middle', 'Senior']"
            />
          </div>
        </div>
      </div>
      <section id="salary">
        <div class="flex flex-wrap items-end gap-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#111418] text-base font-medium leading-normal pb-2">
              Минимальная зарплата
            </p>
            <UInput
              type="number"
              size="xl"
              color="white"
              variant="outline"
              placeholder="...."
            />
          </label>
          <label class="flex flex-col min-w-40 flex-1">
            <p class="text-[#111418] text-base font-medium leading-normal pb-2">
              Максимальная зарплата
            </p>
            <UInput
              type="number"
              size="xl"
              color="white"
              variant="outline"
              placeholder="Не обязательное поле"
            />
          </label>
          <div class="flex flex-col items-start gap-3">
            <span class="text-[#111418] text-base font-bold">Валюта</span>
            <USelect
              size="xl"
              placeholder="Выберите..."
              :options="['USD', 'EUR', 'RUB']"
            />
          </div>
        </div>
      </section>
      <div class="flex w-full flex-wrap items-end gap-4 my-5 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#111418] text-base font-medium leading-normal pb-2">
            Требования
          </p>
          <UTextarea
            :rows="6"
            placeholder="Напишите о требованиях..."
            color="white"
            variant="outline"
          />
        </label>
      </div>
      <div class="flex w-full flex-wrap items-end gap-4 my-5 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#111418] text-base font-medium leading-normal pb-2">
            Необходимые навыки
          </p>
          <USelectMenu
            multiple
            v-model="selected"
            :options="skills"
            placeholder="Select a person"
            searchable
          />
        </label>
      </div>
      <div class="flex w-full flex-wrap items-end gap-4 my-5 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#111418] text-base font-medium leading-normal pb-2">
            Мы предлагаем
          </p>
          <UTextarea
            :rows="6"
            placeholder="Напишите о предложениях..."
            color="white"
            variant="outline"
          />
        </label>
      </div>
      <div class="flex justify-between items-center mt-12">
        <UButton color="red" size="xl" variant="solid" label="Отменить" />
        <div class="flex items-center gap-2">
          <UButton
            color="indigo"
            size="xl"
            variant="solid"
            label="Предварительный просмотр"
          />
          <UButton color="sky" size="xl" variant="solid" label="Сохранить" />
        </div>
      </div>
    </form>
  </div>
</template>
