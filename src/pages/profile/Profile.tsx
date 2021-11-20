import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import {signOut} from "store/actions/authActions";
import {useDispatch} from "react-redux";
import {DrawerComponent} from "../../components/DrawerComponent";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface ProfileProps {

}

export const Profile: React.FC<ProfileProps> = () => {
    const handleClick = () => {
        action(signOut());
        console.log("logout")
    }
    const action = useDispatch();


    const list = () =>(
        <List>
            <ListItem button>
                <ListItemIcon><i className="fas fa-cog" /></ListItemIcon>
                <ListItemText>Change password</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon><i className="fas fa-sign-out-alt" /></ListItemIcon>
                <ListItemText onClick={handleClick}>Sign Out</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon><i className="far fa-times-circle"/></ListItemIcon>
                <ListItemText>Cancel</ListItemText>
            </ListItem>
        </List>

    );
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
           {/*<Button variant="outlined">Ustawienia</Button>*/}
           <DrawerComponent list={list()} drawerTitle="Ustawienia"/>
       </div>
       <div className="profile-posts">
           <div className="profile-posts-item">
               <img className="profile-posts-item-image" src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="xd"/>
               <div className="profile-posts-item-overlay">
                   <div className="profile-posts-item-overlay-container">
                       <div className="profile-posts-item-overlay-icon">
                           <i className="fas fa-comment"/>
                           <p>23</p>
                       </div>
                       <div className="profile-posts-item-overlay-icon">
                           <i className="fas fa-heart"/>
                           <p>12</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="profile-posts-item">
               <img className="profile-posts-item-image" src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="xd"/>
               <div className="profile-posts-item-overlay">
                   <div className="profile-posts-item-overlay-container">
                       <div className="profile-posts-item-overlay-icon">
                           <i className="fas fa-comment"/>
                           <p>23</p>
                       </div>
                       <div className="profile-posts-item-overlay-icon">
                           <i className="fas fa-heart"/>
                           <p>12</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="profile-posts-item">
               <img className="profile-posts-item-image" src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="xd"/>
               <div className="profile-posts-item-overlay">
                   <div className="profile-posts-item-overlay-container">
                       <div className="profile-posts-item-overlay-icon">
                           <i className="fas fa-comment"/>
                           <p>23</p>
                       </div>
                       <div className="profile-posts-item-overlay-icon">
                           <i className="fas fa-heart"/>
                           <p>12</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="profile-posts-item">
               <img className="profile-posts-item-image" src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="xd"/>
               <div className="profile-posts-item-overlay">
                   <div className="profile-posts-item-overlay-container">
                       <div className="profile-posts-item-overlay-icon">
                           <i className="fas fa-comment"/>
                           <p>23</p>
                       </div>
                       <div className="profile-posts-item-overlay-icon">
                           <i className="fas fa-heart"/>
                           <p>12</p>
                       </div>
                   </div>
               </div>
           </div>

       </div>
       <Button onClick={handleClick}>Wyloguj sie</Button>

   </div>
  );
 }