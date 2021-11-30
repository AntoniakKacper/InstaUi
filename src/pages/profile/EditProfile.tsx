import React from 'react';
import {TextInput} from "../../components/TextInput";
import Button from "@mui/material/Button";
import {FormProvider, useForm} from "react-hook-form";
import {signUpData} from "../../models/Authentication";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "../auth/ValidationSchema";
import Avatar from '@mui/material/Avatar';
import {useSelector} from "react-redux";
import { RootState} from "store";

interface EditProfileProps {

}

export const EditProfile: React.FC<EditProfileProps> = () => {
    const { user } = useSelector((state: RootState) => state.auth)
    const methods = useForm<signUpData>({
        resolver: yupResolver(signUpSchema),
    });
    const onSubmit = (data: signUpData) => {
        console.log(data);
    };
  return (
   <div className="edit-profile">
    <h1>Edit profile</h1>
       <div className="edit-profile__header">
           <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" sx={{ width: 56, height: 56 }}/>
           <div className="edit-profile__user-info">
               <p className="edit-profile__username">{user?.name}</p>
               <p className="edit-profile__clickable-text">Change avatar</p>
           </div>
       </div>
       <section>
           <FormProvider {...methods}>
               <form
                   onSubmit={methods.handleSubmit(onSubmit)}
                   className="reset__form"
               >

                   <TextInput label="Username" name="username" placeholder={user!.name} type="text" variant="outlined" />
                   <TextInput label="Email address" name="email" placeholder={user!.email} type="email" variant="outlined" />
                   <Button type="submit" variant="contained">
                       Edit
                   </Button>
               </form>
           </FormProvider>
       </section>
   </div>
  );
 }