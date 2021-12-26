import { SignUpFieldsProps, SignUpConfigProps } from "../types";

export const FIELDS_LIST: SignUpFieldsProps = [
  {
    id: "s1",
    name: "name",
    placeholder: "Name",
    type: "text",
  },
  {
    id: "s2",
    name: "email",
    placeholder: "Email",
    type: "text",
  },
  {
    id: "s3",
    name: "password",
    placeholder: "Password",
    type: "password",
  },
  {
    id: "s4",
    name: "repeatPassword",
    placeholder: "Repeat password",
    type: "password",
  },
];

export const SIGNUP_COMPONENT_CONFIG: SignUpConfigProps = {
  title: "Sign up",
  bottomText: "Already have an account? ",
  linkText: "Login",
  loginLink: "/login",
};
