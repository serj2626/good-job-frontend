import type { RouteLocationNamedRaw } from "vue-router";

export const enum AppRoutes {
  index = "index",

  authLogin = "auth-login",
  authRegistration = "auth-registration",
  authLogout = "auth-logout",
  authReset = "auth-reset",

  companiesId = "companies-id",
  companiesList = "companies-list",

  employeesId = "employees-id",
  employeesList = "employees-list",

  resumesId = "resumes-id",
  resumesList = "resumes-list",
  resumesCreate = "resumes-create",

  vacanciesList = "vacancies-list",
  vacanciesId = "vacancies-id",
  vacanciesCreate = "vacancies-create",

  interviews = "interviews",
  interviewsCreate = "interviews-create",

  projectsId = "projects-id",
  projectsCreate = "projects-create",
}

export interface AppRoute extends RouteLocationNamedRaw {
  name: AppRoutes;
}
