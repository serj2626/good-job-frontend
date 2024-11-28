interface IUser {
  email: string;
  type: string;
}

interface ICompany {
  id: number;
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
}

export type { IUser, ICompany };
