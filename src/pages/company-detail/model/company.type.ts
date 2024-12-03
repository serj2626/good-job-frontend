import type { IVacancy } from "../../vacancy-list/model/vacancy.type";

interface IUser {
  email: string;
  type: string;
  online: boolean;
}

interface ICompany {
  id: number;
  vacancies: IVacancy[];
  user: IUser;
  phone: string;
  full_name: string;
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
  is_verified: boolean;
}

export type { IUser, ICompany };
