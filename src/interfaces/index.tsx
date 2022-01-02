export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IHistory {
  push: (address: string) => void;
}

export interface ISession {
  checked: boolean;
}

export interface ISessionAuth {
  authenticated: boolean;
}

export interface IProduct {
  id: string;
  original_title: string;
  backdrop_path: string;
}
