import type { IVacancy } from "../../vacancy-list/model/vacancy.type";

interface IUser {
  email: string;
  type: string;
}

interface ICompany {
  id: number;
  vacancies: IVacancy[];
  user: IUser;
  phone: string;
  country: string;
  city: string;
  name: string;
  site: string;
  about: string;
  slug: string;
  created_at: string;
  updated_at: string;
  avatar: string;
  count_employees: number;
  count_vacancies?: number;
}

export type { IUser, ICompany };
