type FIELDS_LIST = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
}[];

type LOGIN_COMPONENT_CONFIG = {
  title: string;
  bottomText: string;
  linkText: string;
  signupLink: string;
};

export const FIELDS_LIST: FIELDS_LIST = [
  {
    id: "f1",
    name: "email",
    placeholder: "Email",
    type: "text",
  },
  {
    id: "f2",
    name: "password",
    placeholder: "Password",
    type: "password",
  },
];

export const LOGIN_COMPONENT_CONFIG: LOGIN_COMPONENT_CONFIG = {
  title: "Login",
  bottomText: "New here? ",
  linkText: "Sign up",
  signupLink: "/signup",
};
