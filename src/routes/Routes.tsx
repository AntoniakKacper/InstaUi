import { Navbar } from "components/Navbar";
import { SignUp } from "pages/auth/SignUp";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "App.scss";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <SignUp />
      </div>
    </Router>
  );
};
