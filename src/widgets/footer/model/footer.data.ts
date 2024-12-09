import { BootstrapIcons } from '~/src/shared/types/icons/bootstrap-icons';

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

export const footerLinks: IFooterLink[] = [
  {
    title: "О нас",
    url: "/about",
  },
  {
    title: "Контакты",
    url: "/contacts",
  },
  {
    title: "Политика конфиденциальности",
    url: "/privacy",
  },
];

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
        url: "/employees/list",
      },
      {
        title: "Список резюме",
        url: "/resumes/list",
      }
    ],
  },
  {
    title: "Для соискателя",
    links: [
      {
        title: "Вакансии",
        url: "/vacancies/list",
      },
      {
        title: "Компании",
        url: "/companies/list",
      },
    ],
  },
  {
    title: "Помощь",
    links: [
      {
        title: "О нас",
        url: "/resume",
      },
      {
        title: "Подписаться на новости",
        url: "/projects",
      },
      {
        title: "Служба поддержки",
        url: "/resume",
      },
    ],
  },
];
