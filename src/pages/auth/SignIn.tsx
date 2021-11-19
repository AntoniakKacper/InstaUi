import { yupResolver } from "@hookform/resolvers/yup";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CircularProgress from "@mui/material/CircularProgress";
import "App.scss";
import { PasswordInput } from "components/PasswordInput";
import { TextInput } from "components/TextInput";
import { signInData } from "models/Authentication";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { signIn, signInSocial } from "store/actions/authActions";
import { signInSchema } from "./ValidationSchema";
import {Link} from "react-router-dom";
import GoogleLogin from 'react-google-login';

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = () => {
  const { loading } = useSelector((state: RootState) => state.stateRed);
  const action = useDispatch();
  const methods = useForm<signInData>({
    resolver: yupResolver(signInSchema),
  });
  //const loading = true;
  const onSubmit = (data: signInData) => {
    //action(setLoading(true));
    action(signIn(data));
    //action(setLoading(false));
  };

  const responseGoogle = (response: any) => {
    console.log(response.accessToken);
    action(signInSocial(response.accessToken, "google"));
  }

  return (
    <div className="wrapper">
      <div className="auth__header">
        <h1>Log in</h1>
        <p>Sign up with one of following options.</p>
      </div>
      <div className="social-auth-buttons">
        <GoogleLogin
            clientId="943857804982-okau4ko9qn2harjiv75if0mt57o99j3e.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
        {/*<ButtonGroup disableElevation variant="outlined" fullWidth={true}>*/}

        {/*  <Button onClick={() => action(signInSocial("google"))}>*/}
        {/*    <GoogleIcon />*/}
        {/*  </Button>*/}
        {/*  <Button>*/}
        {/*    <GitHubIcon />*/}
        {/*  </Button>*/}
        {/*</ButtonGroup>*/}
      </div>
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
          {loading ? (
            <Button variant="outlined" color="primary" disabled>
              <CircularProgress color="secondary" size={20} />
            </Button>
          ) : (
            <Button type="submit" variant="contained">
              Sign In
            </Button>
          )}


        </form>
        <span className="auth__footer">
        <p>Don't have an account? </p>
        <Link to="/signup">Sign up</Link>
      </span>
      </FormProvider>
    </div>
  );
};
