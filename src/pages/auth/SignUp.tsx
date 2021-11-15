import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import { PasswordInput } from "components/PasswordInput";
import { TextInput } from "components/TextInput";
import { signUpData } from "models/Authentication";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { signUpSchema } from "./ValidationSchema";
import "App.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUser, signOut } from "store/actions/authActions";
import { RootState } from "store";

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const action = useDispatch();
  const methods = useForm<signUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: signUpData) => {
    action(setUser(data));
  };
  return (
    <div className="wrapper wrapper-sign-in">
      <h1>SignUp</h1>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="form form-sign-up"
        >
          <TextInput
            label="Username"
            name="name"
            placeholder="Username"
            type="text"
            variant="outlined"
          />
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
            name="password_confirmation"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </form>
      </FormProvider>
      <Button onClick={() => token && action(signOut(token))}>
        Wyloguj sie
      </Button>
      <p>Zarejestruj się</p>
    </div>
  );
};
