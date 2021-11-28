import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import "App.scss";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";

interface PostProps {
  avatarUrl: string;
  username: string;
  imageUrl: string;
  description: string;
}

export const Post: React.FC<PostProps> = ({
  avatarUrl,
  username,
  imageUrl,
  description
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <MenuItem onClick={handleClose}>Przejdź do posta</MenuItem>
          <MenuItem onClick={handleClose}>Przestań obserwować</MenuItem>
          <MenuItem onClick={handleClose}>Anuluj</MenuItem>
        </Menu>
      </div>
      <div>
        <img className="post__img" src={imageUrl} alt="instaphoto" />
        <div className="post__info">
          <div className="post__buttons">
            <div>
              <i className="far fa-heart post-icon" />
              <i className="far fa-comment post-icon" />
              <i className="far fa-paper-plane post-icon" />
            </div>
            <i className="far fa-bookmark post-icon" />
          </div>

          <p className="post-likes">Liczba polubień: 2137</p>

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
    </div>
  );
};
