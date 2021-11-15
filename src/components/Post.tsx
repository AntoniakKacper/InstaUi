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
  description,
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
    <div className="post-container">
      <div className="post-nav">
        <div className="post-nav-user">
          <Avatar alt={username} src={avatarUrl} />
          <p className="post-username">{username}</p>
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
      <div className="post-content">
        <img className="post-img" src={imageUrl} alt="instaphoto" />
        <div className="post-info">
          <div className="post-buttons">
            <div className="post-btn-container">
              <i className="far fa-heart post-icon"></i>
              <i className="far fa-comment post-icon"></i>
              <i className="far fa-paper-plane post-icon"></i>
            </div>
            <i className="far fa-bookmark post-icon"></i>
          </div>
          <strong>
            <p className="post-likes">Liczba polubień: 2137</p>
          </strong>
          <span className="post-username">{username}</span>
          {description}
          <div className="post-comments">
            <div className="post-comment">
              <p>
                <span className="post-username">kom1</span>Wypierdalaj do domu
                ciapaku jeabny
              </p>
            </div>
            <p>
              <span className="post-username">kom1</span>Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Officiis
            </p>
            <p>
              <span className="post-username">kom1</span>Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Officiis
            </p>
          </div>
          <p className="post-creation-date">2 GODZ. TEMU</p>
        </div>
      </div>
    </div>
  );
};
