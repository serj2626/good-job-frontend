export interface IProject {
  id: number;
  category: string;
  title: string;
  image: string;
  stacks: string[];
  link: string;
  description: string;
  created_at: string;
  updated_at: string;
  employee: number;
  likes: number[];
  dislikes: number[];
}

export interface IResume {
  id: number;
  projects: IProject[];
  stacks: string[];
  category: string;
  full_name: string;
  position: string;
  min_salary: number;
  max_salary: number;
  work_shedule: number;
  created_at: string;
  updated_at: string;
  avatar: string;
  about: string;
  visibility: boolean;
  employee: number;
}
