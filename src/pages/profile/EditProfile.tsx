import React, {ChangeEvent, useState} from 'react';
import Button from "@mui/material/Button";
import Avatar from '@mui/material/Avatar';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "store";
import {changeUsername, setAvatar} from "../../store/actions/authActions";
import {TextField} from "@mui/material";
import imageCompression from 'browser-image-compression';

interface EditProfileProps {

}

export const EditProfile: React.FC<EditProfileProps> = ({setOpen}) => {
    const action = useDispatch();
    const {user} = useSelector((state: RootState) => state.auth);
    const [username, setUsername] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        action(changeUsername(username));
        setOpen(false);
        event.preventDefault();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const changeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
        const options = {
            maxWidthOrHeight: 100,
            useWebWorker: true
        }
        event.target.files && imageCompression(event.target.files[0], options).then((compressedFile) => {
            event.target.files && (action(setAvatar(compressedFile)));
        }).catch((error) => console.log(error))

    }
  return (
   <div className="edit-profile">
    <h1>Edit profile</h1>
       <div className="edit-profile__header">
           <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" sx={{ width: 56, height: 56 }}/>
           <div className="edit-profile__user-info">
               <p className="edit-profile__username">{user?.name}</p>
               <label className="edit-profile__clickable-text">
                   <input type="file" accept="image/png, image/jpeg" onChange={changeAvatar}/>
                   Change avatar
               </label>
           </div>
       </div>
       <section>
               <form
                   onSubmit={handleSubmit}
                   className="reset__form reset__form--edit-profile"
               >
                   <TextField label="Username" name="username" placeholder={user!.name} type="text" variant="outlined" onChange={handleChange}/>
                   <Button type="submit" variant="contained">
                       Edit username
                   </Button>
               </form>
       </section>
   </div>
  );
 }