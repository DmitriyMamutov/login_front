import {LoginFieldsProps, LoginConfigProps} from "../types"

export const FIELDS_LIST: LoginFieldsProps = [
  {
    id: "f1",
    name: "email",
    placeholder: "Enter Your Email address",
    type: "text",
  }
];

export const LOGIN_COMPONENT_CONFIG: LoginConfigProps = {
  title: "Login",
  bottomText: "New here? ",
  linkText: "Sign up",
  signupLink: "/signup",
};
