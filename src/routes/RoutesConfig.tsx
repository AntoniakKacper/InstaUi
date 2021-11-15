import "App.scss";
import { Navbar } from "components/Navbar";
import { SignUp } from "pages/auth/SignUp";
import { Home } from "pages/home/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

interface RoutesProps {}

export const RoutesConfig: React.FC<RoutesProps> = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/post"
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </div>
    </Router>
  );
};
