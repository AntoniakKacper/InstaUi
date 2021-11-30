import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import {signOut} from "store/actions/authActions";
import {useDispatch, useSelector} from "react-redux";
import {DrawerComponent} from "../../components/DrawerComponent";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {RootState} from "../../store";
import {setUserPosts} from "../../store/actions/postAction";
import {PostModel} from 'models/PostModel';
import ProfilePost from "../../components/ProfilePost";
import CircularProgress from "@mui/material/CircularProgress";
import {Modal} from "../../components/Modal";
import {ResetPasswordDialog} from "../../components/ResetPasswordDialog";
import {EditProfile} from "./EditProfile";

interface ProfileProps {

}

export const Profile: React.FC<ProfileProps> = () => {
    const action = useDispatch();
    const { user } = useSelector((state: RootState) => state.auth);
    const { posts } = useSelector((state: RootState) => state.posts);
    const { loading } = useSelector((state: RootState) => state.stateRed);
    const [open, setOpen] = useState(false);
    const [openEditProfile, setOpenEditProfile] = useState(false);

    useEffect(() => {
        user && action(setUserPosts(user.id!));
    }, [user, action])

    const handleClick = () => {
        action(signOut());
        console.log("logout")
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleOpenEditProfile = () => {
        setOpenEditProfile(true);
    }

    const list = () =>(
        <List>
            <ListItem button>
                <ListItemIcon><i className="fas fa-cog" /></ListItemIcon>
                <ListItemText onClick={handleOpen}>Change password</ListItemText>
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
            <p>Posts</p>
        </div>
        <div className="profile-statistics">
            <p className="profile-statistics-number">5</p>
            <p>Followers</p>
        </div>
        <div className="profile-statistics">
            <p className="profile-statistics-number">7</p>
            <p>Following</p>
        </div>
    </div>
       <div className="profile-buttons">
           <Button variant="outlined" onClick={handleOpenEditProfile}>Edit profile</Button>
           {/*<Button variant="outlined">Ustawienia</Button>*/}
           <DrawerComponent list={list()} drawerTitle="Settings"/>
       </div>
       {loading ? <div className="home-wrapper">
           <CircularProgress size={40} />
       </div> : <div className="profile-posts">
           {posts && posts.map((post:PostModel) =>
               <ProfilePost post={post} key={post.id}/>
           )}

       </div>}
       <Button onClick={handleClick}>Wyloguj sie</Button>
        <Modal open={open} setOpen={setOpen} children={<ResetPasswordDialog />}/>
        <Modal open={openEditProfile} setOpen={setOpenEditProfile} children={<EditProfile />}/>
   </div>
  );
 }