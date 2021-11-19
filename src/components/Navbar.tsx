import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "App.scss";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const { authenticated } = useSelector((state: RootState) => state.auth);
  return (
    <div className="navbar">
      {authenticated ? (
        <div className="nav-content">
          <p className="insta-logo">Instakilogram</p>
          {/*<TextField*/}
          {/*  id="input-with-icon-textfield"*/}
          {/*  InputProps={{*/}
          {/*    startAdornment: (*/}
          {/*      <InputAdornment position="start">*/}
          {/*        <i className="fas fa-search"></i>*/}
          {/*      </InputAdornment>*/}
          {/*    ),*/}
          {/*  }}*/}
          {/*  variant="standard"*/}
          {/*/>*/}
          <div className="nav-icons">
            {/*<i className="fas fa-home"></i>*/}
            <i className="far fa-paper-plane"></i>
            <i className="far fa-plus-square"></i>
            <i className="far fa-heart"></i>
            {/*<Avatar*/}
            {/*  alt="Remy Sharp"*/}
            {/*  src="/static/images/avatar/1.jpg"*/}
            {/*  sx={{ width: 22, height: 22 }}*/}
            {/*/>*/}
          </div>
        </div>
      ) : (
        <div className="nav-content">
          <p className="insta-logo">Instakilogram</p>
          <InstagramIcon fontSize="large" />
        </div>
      )}
    </div>
  );
};
