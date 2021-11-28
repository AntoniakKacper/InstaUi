import {FC, MouseEvent, useState} from 'react';
import {PostModel} from "../models/PostModel";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {IconButton} from "@mui/material";
import 'App.scss';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {deletePost} from "../store/actions/postAction";

interface PostDialogProps {
 post: PostModel;
}


export const PostDialog: FC<PostDialogProps> = ({post }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { user } = useSelector((state: RootState) => state.auth);
    const action = useDispatch();
    const openMenu = Boolean(anchorEl);

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

    const { id, author, description, min_img_url } = post;
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
                <i className="far fa-heart post-dialog__icon" />
                <i className="far fa-comment post-dialog__icon" />
                <i className="far fa-paper-plane post-dialog__icon" />
                <i className="far fa-bookmark post-dialog__icon" />
            </div>
            <p className="post-dialog__likes">Liczba polubień: 2137</p>
            <p className="post-dialog__update-time">15 LISTOPADA</p>
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