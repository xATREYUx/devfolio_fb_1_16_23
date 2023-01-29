import React, { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { PrivateRoute, AuthRoute } from "../routing/PrivateRoute";

import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import UserPage from "../pages/userPage";
import AuthPage from "../pages/authPage";
import PostPage from "../pages/postPage";
import NavBar from "../components/navbar";
import PortfolioPage from "../pages/PortfolioPage";

import ScrollToTop from "../components/scrollToTop";

window.history.scrollRestoration = "manual";
const Router = () => {
  //console.log("Routing...");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1000px",
        overflowY: "hidden",
        position: "relative",
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route
            path="/auth"
            element={<AuthRoute component={<AuthPage />} />}
          />
          {/* <AuthRoute path="/register" component={Register} /> */}
          {/* <AuthRoute path="/register" component={Register} auth={loggedIn} /> */}
          <Route
            path="/user"
            element={<PrivateRoute component={<UserPage />} />}
          />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
