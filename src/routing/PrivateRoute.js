import { useContext } from "react";
import { Redirect, Route, useNavigate } from "react-router-dom";
// import Register from "../components/auth/Register";
import { AuthContext } from "../providers/AuthProvider";
import UserPage from "../pages/userPage";
import AuthPage from "../pages/authPage";

export const PrivateRoute = ({ component }) => {
  const { profile } = useContext(AuthContext);
  const finalComponent = profile ? component : <AuthPage />;
  return finalComponent;
};

export const AuthRoute = ({ component }) => {
  const { profile } = useContext(AuthContext);
  console.log("AuthRoute: ", profile);
  const finalComponent = !profile ? <AuthPage /> : component;
  return finalComponent;
};
