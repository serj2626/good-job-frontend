export interface IUserData {
  email: string;
  type: string;
  online: boolean;
  count_friends: number;
}

export interface IUserRegister {
  email: string;
  type: string;
  password: string;
  password2: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
