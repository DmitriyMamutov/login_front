import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email adress").required("Required"),
    password: Yup.string()
      .min(8, "password is too short")
      .max(30, "password is too long")
      .required("Required"),
  });

export  const signUpValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email adress").required("Required"),
    password: Yup.string()
      .min(8, "password is too short")
      .max(30, "password is too long")
      .required("Required"),
      name: Yup.string().required("Required"),
      repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must match"),
  });