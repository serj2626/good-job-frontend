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
    likes: number[];
    dislikes: number[];
    time_ago: string
  }