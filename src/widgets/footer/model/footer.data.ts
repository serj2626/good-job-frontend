interface IFooterLink {
  title: string;
  url: string;
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
