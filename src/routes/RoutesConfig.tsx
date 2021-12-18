import "App.scss";
import { Navbar } from "components/Navbar";
import { SignIn } from "pages/auth/SignIn";
import { SignUp } from "pages/auth/SignUp";
import { Home } from "pages/home/Home";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { RootState } from "store";
import { useSelector } from "react-redux";
import { BottomNavbar } from "../components/BottomNavbar";
import { Profile } from "../pages/profile/Profile";
import { Search } from "pages/search/search";
import {AddPost} from "../pages/addPost/AddPost";

interface RoutesProps {}

export const RoutesConfig: React.FC<RoutesProps> = () => {
  const { user, authenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {}, []);
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                  <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
            <Route
                path="/profile/:id"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/search"
                element={
                    <ProtectedRoute>
                        <Search />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/addPost"
                element={
                    <ProtectedRoute>
                        <AddPost isEditMode={false}/>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/editPost"
                element={
                    <ProtectedRoute>
                        <AddPost isEditMode={true}/>
                    </ProtectedRoute>
                }
            />


        </Routes>
      </div>
        {authenticated && <BottomNavbar />}
    </Router>
  );
};
