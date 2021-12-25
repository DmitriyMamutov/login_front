type FIELDS_LIST = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
}[];

type SIGNUP_COMPONENT_CONFIG = {
  title: string;
  bottomText: string;
  linkText: string;
  loginLink: string;
};

export const FIELDS_LIST: FIELDS_LIST = [
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

export const SIGNUP_COMPONENT_CONFIG: SIGNUP_COMPONENT_CONFIG = {
  title: "Sign up",
  bottomText: "Already have an account? ",
  linkText: "Login",
  loginLink: "/login",
};
