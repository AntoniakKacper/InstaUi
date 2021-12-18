import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import {PostModel} from "../models/PostModel";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {IconButton} from "@mui/material";
import 'App.scss';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {useDispatch, useSelector} from "react-redux";
import {addComment, deleteComment as postDeleteComment, deletePost, likePost} from "../store/actions/postAction";
import {deleteComment as userDeleteComment} from "../store/actions/userActions";
import {User} from "../models/UserModel";
import {Link} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import {Comment} from "../models/CommentModel";
import { RootState } from 'store';

interface PostDialogProps {
 post: PostModel;
 user: User;
 setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
 isOnWall : boolean;
}


export const PostDialog: FC<PostDialogProps> = ({post, setOpen, user, isOnWall}) => {
    const [comment, setComment] = useState("");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [show, setShow] = useState(false);
    const [like, setLike] = useState(post.isLiked);
    const [likesCount, setLikesCount] = useState(post.likes_count);
    const { user } = useSelector((state: RootState) => state.auth);
    const action = useDispatch();
    const openMenu = Boolean(anchorEl);

    const toggleLike = () => {
        setLike(!like);
        like ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
        action(likePost(post));
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setComment(event.target.value);
    }

    const handleAddComment = () => {
        setLoading(true);
        action(addComment(comment, post, setLoading));
        setComment("");
    }

    const handleDeleteComment = (comment: Comment) => {
        isOnWall ? action(postDeleteComment(post, comment)) : action(userDeleteComment(post, comment));
    }
    //TODO dodawanie komentarzy

    const { id, author, description, min_img_url, likes_count, img_url } = post;
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

        <img src={img_url} alt={user.name} />
        <section className="post-dialog__content">
            <div className="post-dialog__buttons">
                {like ? <i className="fas fa-fire post-dialog__icon-filled" onClick={toggleLike}/> : <i className="fas fa-fire" onClick={toggleLike} />}
                <i className="far fa-comment post-dialog__icon" onClick={toggle}/>
                <i className="far fa-bookmark post-dialog__icon" />
            </div>

            <p className="post-dialog__likes">Likes: {likesCount}</p>
            <div className="post-comments">
                {comments && comments.map(comment => <div key={comment.id} className="post__comment">
                    <p>
                        <Link to={`/profile/${post.id}`} className="post__username">{comment.author.name}</Link>{comment.content}
                    </p>
                    {comment.author.id === authId ? <p className="post__comment--delete" onClick={() => handleDeleteComment(comment)}>Delete</p> : <></>}
                </div>)}
            </div>
            <p className="post-dialog__update-time">15 NOVEMBER</p>
            {show &&
            <article className="post-dialog__comment-container">
                <input className="post-dialog__input" placeholder="Add comment..." onChange={handleChange} value={comment!}/>
                {loading ? <CircularProgress size={30} /> : <button className="post-dialog__share-comment" onClick={handleAddComment}>Share</button>}
            </article>}
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
            {user && user.id === post.author_id && <MenuItem onClick={handleDelete}>Delete</MenuItem>}
            {user && user.id === post.author_id && <Link to={`/editPost`} state={{id: post.id}}><MenuItem>Edit</MenuItem></Link>}
            <MenuItem onClick={handleCloseMenu}>Cancel</MenuItem>
        </Menu>
        </div>
    );
 }