import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import { signOut } from "store/actions/authActions";
import {useDispatch} from "react-redux";

interface ProfileProps {

}

export const Profile: React.FC<ProfileProps> = () => {
    const handleClick = () => {
        action(signOut());
        console.log("logout")
    }
    const action = useDispatch();
  return (
   <div className="profile-wrapper">
    <div className="profile-header">
        <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            sx={{ width: 70, height: 70 }}
        />
        <div className="profile-statistics">
            <p className="profile-statistics-number">3</p>
            <p>Posty</p>
        </div>
        <div className="profile-statistics">
            <p className="profile-statistics-number">5</p>
            <p>Obserwujący</p>
        </div>
        <div className="profile-statistics">
            <p className="profile-statistics-number">7</p>
            <p>Obserwuje</p>
        </div>
    </div>
       <div className="profile-buttons">
           <Button variant="outlined">Edytuj profil</Button>
           <Button variant="outlined">Statystyki</Button>
       </div>
       <div className="profile-posts">
           <div className="profile-posts-item"><img src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="xd"/></div>
           <div className="profile-posts-item"><img src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="xd"/></div>
           <div className="profile-posts-item"><img src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="xd"/></div>
           <div className="profile-posts-item"><img src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="xd"/></div>

       </div>
       <Button onClick={handleClick}>Wyloguj sie</Button>

   </div>
  );
 }