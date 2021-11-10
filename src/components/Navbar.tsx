import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "App.scss";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="navbar">
      <p>Instagram</p>
      <InstagramIcon fontSize="large" />
    </div>
  );
};
