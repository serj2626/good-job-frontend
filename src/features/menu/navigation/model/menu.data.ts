import { APIRoutes, AppPaths } from "~/src/shared/router/types";

interface IMenuItem {
  title: string;
  url: string;
}

export const MenuLinks: IMenuItem[] = [
  {
    title: "Главная",
    url: AppPaths.index,
  },
  {
    title: "Вакансии",
    url: AppPaths.vacanciesList,
  },
  {
    title: "Компании",
    url: AppPaths.companiesList,
  },
  {
    title: "Специалисты",
    url: AppPaths.employeesList,
  },
  {
    title: "Резюме",
    url: AppPaths.resumesList,
  },
  {
    title: "Посты",
    url: AppPaths.index,
  },
  {
    title: "События",
    url: AppPaths.index,
  },
];
