import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

interface IMenuItem {
  label: string;
  icon?: string;
  slot?: string;
  disabled?: boolean;
}

export const userMenuLins: IMenuItem[][] = [
  [
    {
      label: "serj2626@mail.ru",
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Профиль",
      icon: HeroIcons.USER,
    },
    {
      label: "Настройки",
      icon: HeroIcons.SETTINGS_SOLID,
    },
  ],
  [
    {
      label: "Избранное",
      icon: HeroIcons.HEART,
    },
    {
      label: "Отклики",
      icon: HeroIcons.RESPONSES,
    },
    {
      label: "Сообщения",
      icon: HeroIcons.MAIL_SOLID,
    },
    {
      label: "Обратная связь",
      icon: HeroIcons.CHAT_BUBBLE_LEFT_RIGHT,
    },
  ],
  [
    {
      label: "Войти",
      icon: HeroIcons.LOGIN,
    },
    {
      label: "Выход",
      icon: HeroIcons.LOGOUT,
    },
  ],
];
