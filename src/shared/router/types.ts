export const APIRoutes = {
  auth: {
    registration: "auth/register/", // Страница регистрации
  },
  interviews: {},
  companies: {
    list: "/companies/", //Возвращает список всех компаний
    add: "/companies/", //Добавляет компанию
    getCompany: (id: string) => `/companies/${id}/`, //Возвращает информацию о компании
    deleteCompany: (id: string) => `/companies/${id}/`, //Удаляет компанию
    updateCompany: (id: string) => `/companies/${id}/`, //Обновляет компанию
  },
  employees: {
    list: "/employees/", //Возвращает список всех сотрудников
    add: "/employees/", //Добавляет сотрудника
    getEmployee: (id: string) => `/employees/${id}/`, //Возвращает информацию о сотруднике
    deleteEmployee: (id: string) => `/employees/${id}/`, //Удаляет сотрудника
    updateEmployee: (id: string) => `/employees/${id}/`, //Обновляет сотрудника
  },
  resumes: {
    list: "/employees/resume/list/", //Возвращает список всех резюме
    add: "/employees/resume/list", //Добавляет резюме
    getResume: (id: string) => `/employees/resumes/${id}/`, //Возвращает информацию о резюме
    deleteResume: (id: string) => `/employees/resumes/${id}/`, //Удаляет резюме
    updateResume: (id: string) => `/employees/resumes/${id}/`, //Обновляет резюме
  },
  vacancies: {
    list: "/companies/vacancy/", //Возвращает список всех вакансий
    add: "/companies/vacancy/", //Добавляет вакансию
    getVacancy: (id: string) => `/companies/vacancies/${id}/`, //Возвращает информацию о вакансии
    deleteVacancy: (id: string) => `/companies/vacancies/${id}/`, //Удаляет вакансию
    updateVacancy: (id: string) => `/companies/vacancies/${id}/`, //Обновляет вакансию
  },
  projects: {
    list: "/employees/projects/", //Возвращает список всех проектов
    add: "/employees/projects/", //Добавляет проект
    getProject: (id: string) => `/employees/projects/${id}/`, //Возвращает информацию о проекте
    deleteProject: (id: string) => `/employees/projects/${id}/`, //Удаляет проект
    updateProject: (id: string) => `/employees/projects/${id}/`, //Обновляет проект
  },
  stacks: {
    list: "/stack-list/", //Возвращает список всех стеков
  },
};


export const enum AppPaths {
  about = "about",
  
  authLogin = "auth-login",
  authLogout = "auth-logout",
  authRegistration = "auth/register",
  authReset = "auth-reset",
  
  companiesId = "companies-id",
  companiesList = "companies/list",

  employeesId = "employees-id",
  employeesList = "employees/list",
  
  faq = "faq",

  index = "/",
  
  interviews = "interviews",
  interviewsCreate = "interviews/create",
  
  projectsCreate = "projects/create",
  projectsId = "projects-id",
  
  resumesCreate = "resumes/create",
  resumesId = "resumes-id",
  resumesList = "resumes/list",
  
  vacanciesCreate = "vacancies/create",
  vacanciesId = "vacancies-id",
  vacanciesList = "vacancies/list",

}