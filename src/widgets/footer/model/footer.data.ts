import { AppPaths } from "~/src/shared/router/types";
import { BootstrapIcons } from "~/src/shared/types/icons/bootstrap-icons";

interface IFooterLink {
  title: string;
  url: string;
}

interface IFooterIcon {
  title: string;
  icon: string;
  link: string;
  class?: string;
}
export const footerIcons: IFooterIcon[] = [
  {
    title: "Github",
    link: "https://github.com/",
    icon: BootstrapIcons.GITHUB,
  },
  {
    title: "Gitlab",
    link: "https://gitlab.com/",
    icon: BootstrapIcons.GITLAB,
    class: "text-rose-600",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/",
    icon: BootstrapIcons.LINKEDIN,
    class: "text-blue-600",
  },
  {
    title: "Telegram",
    link: "https://t.me/",
    icon: BootstrapIcons.TELEGRAM,
    class: "text-sky-600",
  },
];

interface IFooterContacts {
  title: string;
  links: IFooterLink[];
}

export const footerContacts: IFooterContacts[] = [
  {
    title: "Для работодателя",
    links: [
      {
        title: "Специалисты",
        url: AppPaths.employeesList,
      },
      {
        title: "Список резюме",
        url: AppPaths.resumesList,
      },
    ],
  },
  {
    title: "Для соискателя",
    links: [
      {
        title: "Вакансии",
        url: AppPaths.vacanciesList,
      },
      {
        title: "Компании",
        url: AppPaths.companiesList,
      },
    ],
  },
  {
    title: "Помощь",
    links: [
      {
        title: "О нас",
        url: AppPaths.about,
      },
      {
        title: "FAQ",
        url: AppPaths.faq,
      },
      {
        title: "Служба поддержки",
        url: "/",
      },
    ],
  },
];
