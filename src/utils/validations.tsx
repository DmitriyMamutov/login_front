import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email adress")
    .required("Please fill out this field"),
  password: Yup.string()
    .min(8, "Password is too short")
    .max(30, "Password is too long")
    .required("Please fill out this field"),
});

export const signupValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email adress")
    .required("Please fill out this field"),
  password: Yup.string()
    .min(8, "Password is too short")
    .max(30, "Password is too long")
    .required("Please fill out this field"),
  name: Yup.string().required("Please fill out this field"),
  repeatPassword: Yup.string()
    .required("Please fill out this field")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
