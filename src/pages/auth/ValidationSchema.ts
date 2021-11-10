import * as yup from "yup";

const REGEX_PASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const validationCredentials = {
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short")
    .max(20, "Password is too long")
    .matches(REGEX_PASSWORD, "Password does not meet requirements."),
};

export const signUpSchema = yup.object().shape({...validationCredentials,  confrimPassword: yup
    .string()
    .required("You need to confirm your password")
    .min(6, "Password is too short")
    .max(20, "Password is too long")
    .matches(REGEX_PASSWORD, "Password does not meet requirements."),});

export const signInSchema = yup.object().shape(validationCredentials);