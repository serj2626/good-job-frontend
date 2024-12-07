import type { ICompany } from "../../company-detail/model/company.type";

export interface IVacancy {
  id: number;
  time_ago: string;
  company: ICompany;
  stacks: string[];
  category: string;
  position: string;
  min_salary: number;
  max_salary: number;
  work_schedule: string;
  created_at: string;
  updated_at: string;
  level: string;
  status_vacancy: string;
  work_experience: number;
  requirements: string;
  description: string;
  city: string;
  country: string;
  metro?: string;
  currency: string;
}
