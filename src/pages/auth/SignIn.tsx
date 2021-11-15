import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import { PasswordInput } from "components/PasswordInput";
import { TextInput } from "components/TextInput";
import { signInData } from "models/Authentication";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { signInSchema } from "./ValidationSchema";
import "App.scss";

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = () => {
  const methods = useForm<signInData>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data: signInData) => console.log(data);
  return (
    <div className="wrapper wrapper-sign-in">
      <h1>SignIn</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="form form-sign-in"
        >
          <TextInput
            label="Email"
            name="email"
            placeholder="email@email.com"
            type="email"
            variant="outlined"
          />
          <PasswordInput label="Password" name="password" variant="outlined" />
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
