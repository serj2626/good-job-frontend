import { HeroIcons } from "~/src/shared/types/icons/hero-icons";

interface IAction {
  label: string;
  icon: string;
}

const resumeActions: IAction[][] = [
  [
    {
      label: "Скачать",
      icon: HeroIcons.DOWNLOAD,
    },
    {
      label: "В избранное",
      icon: HeroIcons.HEART,
    },
  ],
];

const responseActions: IAction[][] = [
  [
    {
      label: "Принять",
      icon: HeroIcons.CHECK,
    },
    {
      label: "Отклонить",
      icon: HeroIcons.X_MARK,
    },
    {
      label: "Удалить",
      icon: HeroIcons.DELETE,
    },
  ],
];

const sectionActions: IAction[][] = [
  [
    {
      label: "Редактировать",
      icon: HeroIcons.EDIT,
    },
    {
      label: "Удалить",
      icon: HeroIcons.DELETE,
    },
  ],
];

const interviewActions  = (row: any) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];

export { resumeActions, sectionActions, responseActions, interviewActions };
