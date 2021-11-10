import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import { PasswordInput } from "components/PasswordInput";
import { TextInput } from "components/TextInput";
import { signUpData } from "models/Authentication";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { signUpSchema } from "./ValidationSchema";

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  const methods = useForm<signUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: signUpData) => console.log(data);
  return (
    <div>
      <h1>SignUp</h1>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextInput
            label="Email"
            name="email"
            placeholder="email@email.com"
            type="email"
            variant="outlined"
          />
          <PasswordInput label="Password" name="password" variant="outlined" />
          <PasswordInput
            label="Confirm Password"
            name="confrimPassword"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
