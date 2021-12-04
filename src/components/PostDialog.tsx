import React, {FC, MouseEvent, useState, useRef} from 'react';
import {PostModel} from "../models/PostModel";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {IconButton} from "@mui/material";
import 'App.scss';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {deletePost, likePost} from "../store/actions/postAction";

interface PostDialogProps {
 post: PostModel;
}


export const PostDialog: FC<PostDialogProps> = ({post }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [show, setShow] = useState(false);
    const [like, setLike] = useState(post.isLiked);
    const [likesCount, setLikesCount] = useState(post.likes_count);
    const { user } = useSelector((state: RootState) => state.auth);
    const action = useDispatch();
    const openMenu = Boolean(anchorEl);

    const toggleLike = () => {
        setLike(!like);
        //ZMIENIAC W REDUCERZE
        like ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
        action(likePost(post.id));
    }

    const toggle = () => {
        setShow(!show);
    };

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        action(deletePost(id));
        handleCloseMenu();
    }

    const { id, author, description, min_img_url, likes_count } = post;
    return (
        <div className="post-dialog">
        <div className="post-dialog__header">
            <div className="post-dialog__author">
                <Avatar alt={'avatar'} src={'author.avatar'} className="post-dialog__header__author__avatar" />
                <p  className="post-dialog__author-name">{'author.name'}</p>
            </div>
            <IconButton className="post-dialog__menu" onClick={handleClick}>
                <MoreHorizIcon />
            </IconButton>

        </div>


        <img className="post-dialog__image" src="https://images.unsplash.com/photo-1622461828050-c47d16bd89ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"/>
        <section className="post-dialog__content">
            <div className="post-dialog__buttons">
                {like ? <i className="fas fa-fire post-dialog__icon-filled" onClick={toggleLike}/> : <i className="fas fa-fire" onClick={toggleLike} />}
                <i className="far fa-comment post-dialog__icon" onClick={toggle}/>
                <i className="far fa-bookmark post-dialog__icon" />
            </div>

            <p className="post-dialog__likes">Likes: {likesCount}</p>

            <p className="post-dialog__update-time">15 NOVEMBER</p>
            {show &&
            <section className="post-dialog__comment-container">
                {/*<button className="post-dialog__emoji"><i className="far fa-grin-tears" /></button>*/}
                <input className="post-dialog__input" placeholder="Add comment..."/>
                <button className="post-dialog__share-comment">Share</button>
            </section>}
        </section>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
                "aria-labelledby": "basic-button",
            }}
        >
            {user && user.id === post.author_id && <MenuItem onClick={handleDelete}>Usuń</MenuItem>}
            <MenuItem onClick={handleCloseMenu}>Anuluj</MenuItem>
        </Menu>
        </div>
    );
 }