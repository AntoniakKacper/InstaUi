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
import {PostModel} from 'models/PostModel';
import ProfilePost from "../../components/ProfilePost";
import CircularProgress from "@mui/material/CircularProgress";
import {Modal} from "../../components/Modal";
import {ResetPasswordDialog} from "../../components/ResetPasswordDialog";
import {EditProfile} from "./EditProfile";
import {useParams} from "react-router-dom";
import {followUser, getUserById} from "../../store/actions/userActions";
import FollowListDialog from "./FollowListDialog";

interface ProfileProps {

}

type Path = 'followers' | 'followed';

// TODO paginacja postów usera
export const Profile: React.FC<ProfileProps> = () => {
    const action = useDispatch();
    const loggedUserId = useSelector((state: RootState) => state.auth.user!.id);
    const { user, userLoading, posts } = useSelector((state: RootState) => state.userReducer);
    const { id } = useParams<string>();
    const [open, setOpen] = useState(false);
    const [openEditProfile, setOpenEditProfile] = useState(false);
    const [followOpen, setFollowOpen] = useState(false);
    const [path, setPath] = useState<Path>('followers');

    useEffect(() => {
        action(getUserById(Number(id)));
    }, [id]);

    const handleClick = () => {
        action(signOut());
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleOpenEditProfile = () => {
        setOpenEditProfile(true);
    }

    const handleFollow = () => {
        user && action(followUser(user));
    }

    const handleFollowOpen = (passedPath: Path) =>{
        if( user &&
            ((user.followers_count > 0 && passedPath === 'followers')
            || (user.followed_count > 0 && passedPath === 'followed'))){
            setPath(passedPath);
            setFollowOpen(true);
        }
    }

    const list = () => {
        return (<List>
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
        </List>);
    };

    const buttons = () => {
        if(loggedUserId === Number(id)){
            return (<div className="profile-buttons">
                <Button variant="outlined" onClick={handleOpenEditProfile}>Edit profile</Button>
                <DrawerComponent list={list()} drawerTitle="Settings"/>
            </div>)
        }
        else{
            return (<div className="profile-buttons">
                {user?.isFollowed ? <Button variant="outlined" onClick={handleFollow}>Unfollow</Button> : <Button variant="outlined" onClick={handleFollow}>Follow</Button>}
            </div>)
        }
    }


    if(userLoading){
        return <div className="home-wrapper">
            <CircularProgress size={40} />
        </div>
    }
  return (
   <div className="profile-wrapper">
    <div className="profile-header">
        <Avatar
            alt={user?.name}
            src={user?.avatar_url}
            sx={{ width: 70, height: 70 }}
        />
        <div className="profile-header-right">
            {user && <p>{user!.name}</p>}
            <div className="profile-statistics-container">
                <div className="profile-statistics">
                    <p className="profile-statistics-number">{user?.posts_count}</p>
                    <p>Posts</p>
                </div>
                <div className="profile-statistics" onClick={() => handleFollowOpen('followers')}>
                    <p className="profile-statistics-number">{user?.followers_count}</p>
                    <p>Followers</p>
                </div>
                <div className="profile-statistics" onClick={() => handleFollowOpen('followed')}>
                    <p className="profile-statistics-number">{user?.followed_count}</p>
                    <p>Following</p>
                </div>
            </div>
        </div>
    </div>
       <div className="profile-buttons">
           {buttons()}
       </div>
       <div className="profile-posts">
           {posts && posts.map((post:PostModel) =>
               <ProfilePost post={post} key={post.id} />
           )}
       </div>
        <Modal open={open} setOpen={setOpen} children={<ResetPasswordDialog />}/>
        <Modal open={openEditProfile} setOpen={setOpenEditProfile} children={<EditProfile setOpen={setOpenEditProfile} />}/>
       {user &&
           <Modal open={followOpen} setOpen={setFollowOpen} scrollType='paper'
                  children={<FollowListDialog id={user.id} path={path} setOpen={setFollowOpen} />}
       />}
   </div>
  );
 }