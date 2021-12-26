import { IHistory } from "../interfaces";

// export type ProductsProps = {
//   logoutUser: (history: IHistory) => void;
// };

export type ProductProps = {
  logoutUser: (history: IHistory) => void;
};

export type SignUpFieldsProps = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
}[];

export type SignUpConfigProps = {
  title: string;
  bottomText: string;
  linkText: string;
  loginLink: string;
};

export type KeyItemsProps = {
  realName: string;
  placeOfBirth: string;
  groupAffiliation: string;
  publisher: string;
  firstAppearence: string;
  occupation: string;
  error: string;
  productsLink: string;
};

export type LoginFieldsProps = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
}[];

export type LoginConfigProps = {
  title: string;
  bottomText: string;
  linkText: string;
  signupLink: string;
};
