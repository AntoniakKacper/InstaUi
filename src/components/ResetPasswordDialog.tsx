import React, {useState} from 'react';
import {PasswordInput} from "./PasswordInput";
import Button from "@mui/material/Button";
import {FormProvider, useForm} from "react-hook-form";
import {signUpData} from "../models/Authentication";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "../pages/auth/ValidationSchema";

interface ResetPasswordDialogProps {

}

export const ResetPasswordDialog: React.FC<ResetPasswordDialogProps> = () => {
    const methods = useForm<signUpData>({
        resolver: yupResolver(signUpSchema),
    });
    const [password, confirmedPassword] = methods.watch(['password' ,'password_confirmation']);

    const onSubmit = (data: signUpData) => {
        console.log(data);
    };

  return (
       <section className="reset">
           <h1>Change your password</h1>
           <FormProvider {...methods}>
               <form
                   onSubmit={methods.handleSubmit(onSubmit)}
                   className="reset__form"
               >

                   <PasswordInput label="Password" name="password" variant="outlined" />
                   <PasswordInput
                       label="Confirm Password"
                       name="password_confirmation"
                       variant="outlined"
                   />
                   {password !== undefined && password === confirmedPassword ? <Button type="submit" variant="contained">
                       Change password
                   </Button> : <Button type="submit" variant="contained" disabled>
                       Change password
                   </Button>}
               </form>
           </FormProvider>
       </section>
  );
 }