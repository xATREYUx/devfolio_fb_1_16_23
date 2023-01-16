import React, { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { PrivateRoute, AuthRoute } from "../routing/PrivateRoute";

import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import UserPage from "../pages/userPage";
import AuthPage from "../pages/authPage";
import PostPage from "../pages/postPage";
import NavBar from "../components/navbar";

import ScrollToTop from "../components/scrollToTop";

window.history.scrollRestoration = "manual";
const Router = () => {
  // const { isLoading, loggedIn, getLoggedIn } = useContext(AuthContext);
  // {
  //   loggedIn && console.log("Router loggedIn: ", loggedIn);
  // }
  // useEffect(() => {

  //   getLoggedIn();
  // }, []);
  console.log("Routing...");
  return (
    <div
      style={{
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
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
