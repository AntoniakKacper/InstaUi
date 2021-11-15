import * as yup from "yup";

const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/;

const validationCredentials = {
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short")
    .max(15, "Password is too long")
    .matches(REGEX_PASSWORD, "Password does not meet requirements."),
};

export const signUpSchema = yup.object().shape({...validationCredentials,  password_confirmation: yup
    .string()
    .required("You need to confirm your password")
    .min(6, "Password is too short")
    .max(15, "Password is too long")
    .matches(REGEX_PASSWORD, "Password does not meet requirements."),
  name: yup.string()
  .required("Name required")
  .min(6, "Name is too short")
  .max(15, "Name is too long")});

export const signInSchema = yup.object().shape(validationCredentials);