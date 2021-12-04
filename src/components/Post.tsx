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
import {useDispatch} from "react-redux";
import {likePost} from "../store/actions/postAction";

interface PostProps {
  avatarUrl: string;
  username: string;
  imageUrl: string;
  // description: string;
  post: PostModel
}

export const Post: React.FC<PostProps> = ({
  avatarUrl,
  username,
  imageUrl,
  // description
    post
}) => {
  const action = useDispatch();
  const {id, author, img_url, description, isLiked, likes_count} = post;
  const [openPost, setOpenPost] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [like, setLike] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes_count);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggle = () => {
    setLike(!like);
    like ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
    action(likePost(id));
  };


  return (
    <div className="post">
      <div className="post__nav">
        <div>
          <Avatar alt={username} src={avatarUrl} />
          <p className="post__username">{username}</p>
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
          <MenuItem onClick={() => setOpenPost(true)}>Redirect to post</MenuItem>
          <MenuItem onClick={handleClose}>Stop following</MenuItem>
          <MenuItem onClick={handleClose}>Cancel</MenuItem>
        </Menu>
      </div>
      <div>
        <img className="post__img" src={imageUrl} alt="instaphoto" />
        <div className="post__info">
          <div className="post__buttons">
            {like ? <i className="fas fa-fire post-icon post-icon--filled" onClick={toggle}/> : <i className="fas fa-fire post-icon" onClick={toggle} />}
            <i className="far fa-bookmark post-icon" />
          </div>

          <p className="post-likes">Likes: {likesCount}</p>

          <div><span className="post__username">{username}</span>
            {description}</div>
          <div className="post-comments">
            <div className="post-comment">
              <p>
                <span className="post__username">kom1</span>Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Officiis
              </p>
            </div>
            <p>
              <span className="post__username">kom1</span>Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Officiis
            </p>
            <p>
              <span className="post__username">kom1</span>Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Officiis
            </p>
          </div>
          <p className="post-creation-date">2 GODZ. TEMU</p>
        </div>
      </div>
      <Modal open={openPost} setOpen={setOpenPost} children={<PostDialog post={post} />} />
    </div>
  );
};
