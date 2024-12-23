export interface ICategory {
  id: number;
  name: string;
  slug: string;
}

export interface IEducation {
  id: number;
  type: string;
  university: string;
  specialization: string;
  start_date: Date;
  end_date: Date;
  employee: 2;
}

export interface IUser {
  email: string;
  type: string;
  online: boolean;
  count_friends: number;
}

export interface IExperience {
  id: number;
  stacks: string[];
  category: ICategory;
  company: string;
  position: string;
  requirements: string;
  description: string;
  start_date: string;
  end_date: string;
  employee: number;
}

export interface IProject {
  id: number;
  category: string;
  title: string;
  image: string;
  stacks: string[];
  link: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  employee: number;
  likes: number;
  dislikes: number;
}

export interface IResume {
  id: string;
  projects: IProject[];
  stacks: string[];
  category: string;
  full_name?: string;
  position: string;
  minSalary: number;
  maxSalary: number;
  work_shedule: number;
  createdAt: string;
  updatedAt: string;
  city: string;
  country: string;
  avatar: string;
  about: string;
  visibility: boolean;
  employee: number;
}

export interface IEmployee {
  id: number;
  resumes: IResume[];
  user: IUser;
  stacks: string[];
  projects: IProject[];
  age: number;
  gender: string;
  experiences: IExperience[];
  educations: IEducation[];
  phone: string;
  country: string;
  city: string;
  about: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  position: string;
  avatar: string;
  first_name: string;
  last_name: string;
  dateOfBirth: string;
}
