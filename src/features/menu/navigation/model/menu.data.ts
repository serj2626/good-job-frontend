interface IMenuItem {
  title: string;
  url: string;
}

export const MenuLinks: IMenuItem[] = [
  {
    title: "Главная",
    url: "/",
  },
  {
    title: "Вакансии",
    url: "/vacancies/list",
  },
  {
    title: "Компании",
    url: "/companies/list",
  },
  {
    title: "Специалисты",
    url: "/employees/list",
  },
  {
    title: "Резюме",
    url: "/resumes/list",
  },
  {
    title: "Посты",
    url: "/",
  },
  {
    title: "События",
    url: "/",
  },
];
