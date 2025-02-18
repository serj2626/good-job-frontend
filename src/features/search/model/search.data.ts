const countries: string[] = [
  "Россия",
  "США",
  "Америка",
  "Великобритания",
  "Австралия",
  "Австрия",
];

const cities: string[] = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Самара",
  "Омск",
  "Красноярск",
  "Челябинск",
  "Тюмень",
  "Нижний Новгород",
  "Краснодар",
  "Владивосток",
];

const salaries: string[] = [
  "Не имеет значения",
  "От 10 000 ₽",
  "от 25 000 ₽",
  "от 60 000 ₽",
  "от 100 000 ₽",
  "от 140 000 ₽",
  "от 180 000 ₽",
  "от 220 000 ₽",
];
const experience: string[] = [
  "Не имеет значения ",
  "Нет опыта ",
  "От 1 года до 3 лет ",
  "От 3 до 6 лет ",
  "Более 6 лет",
];

interface IWorkSchedule {
  value: string;
  label: string;
}

const workSchedule: IWorkSchedule[] = [
  {
    value: "full",
    label: "Полный день",
  },
  {
    value: "part",
    label: "Частичная занятость",
  },
  {
    value: "remote",
    label: "Удаленная работа",
  },
];

export { countries, cities, salaries, experience, workSchedule };
