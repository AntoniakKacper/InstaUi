import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import "App.scss";
import React, {useEffect, useState} from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import {Modal} from "./Modal";
import {PostModel} from "../models/PostModel";
import {PostDialog} from "./PostDialog";
import {useDispatch, useSelector} from "react-redux";
import {likePost} from "../store/actions/postAction";
import { Link } from 'react-router-dom';
import {RootState} from "../store";

interface PostProps {
  post: PostModel
}

export const Post: React.FC<PostProps> = ({
    post
}) => {
  const action = useDispatch();
  const { description, isLiked, likes_count, comments, author} = post;
  const [openPost, setOpenPost] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  useEffect(() => {

  }, [isLiked])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    handleClose();
    setOpenPost(true);
  }

  const toggle = () => {
    action(likePost(post));
  };

//TODO wyswietlanie komentarzy
  return (
    <div className="post">
      <div className="post__nav">
        <div>
          <Avatar alt="post" src={author.avatar_url} />
          <Link to={`/profile/${author.id}`} className="post__username">{author.name}</Link>
        </div>
        <IconButton onClick={handleClick}>
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleOpen}>Redirect to post</MenuItem>
          <MenuItem onClick={handleClose}>Stop following</MenuItem>
          <MenuItem onClick={handleClose}>Cancel</MenuItem>
        </Menu>
      </div>
      <div>
        <img className="post__img" src={post.img_url} alt="instaphoto" />
        <div className="post__info">
          <div className="post__buttons">
            {isLiked ? <i className="fas fa-fire post-icon post-icon--filled" onClick={toggle}/> :
                <i className="fas fa-fire post-icon" onClick={toggle} />}
            <i className="far fa-bookmark post-icon" />
          </div>

          <p className="post-likes">Likes: {likes_count}</p>

          <div><Link to={`/profile/${author.id}`} className="post__username">{author.name}</Link>
            {description}</div>
          <div className="post-comments">
            {comments && comments.map(comment => <p key={comment.id}>
              <Link to={`/profile/${post.id}`} className="post__username">{comment.author.name}</Link>{comment.content}
            </p>)}
          </div>

          <p className="post-creation-date">2 GODZ. TEMU</p>
        </div>
      </div>
      <Modal open={openPost} setOpen={setOpenPost} fullWidth={true} maxWidth="sm" children={<PostDialog post={post} user={post.author}/>} />
    </div>
  );
};
