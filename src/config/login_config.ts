import {LoginFieldsProps, LoginConfigProps} from "../types"

export const FIELDS_LIST: LoginFieldsProps = [
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

export const LOGIN_COMPONENT_CONFIG: LoginConfigProps = {
  title: "Login",
  bottomText: "New here? ",
  linkText: "Sign up",
  signupLink: "/signup",
};
