import React, { useContext } from "react";

import { useNavigate } from "react-router";
// import AuthContext from "./auth/authContext";
import NavBar from "./navbar";
import { Box } from "@mui/system";
import { styled } from "@mui/system";

const Page = styled("div")({
  minHeight: "2000px",
  width: "100%",
  maxWidth: "1000px",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
});

const Toolbar = styled("div")(({ theme }) => {
  console.log("mixins", theme);
  return {
    ...theme.mixins.toolbar,
  };
});

const Layout = ({ children }) => {
  // console.log("mixins", ...theme);
  return (
    <Box elevation={0} display="relative" margin="auto">
      <Toolbar></Toolbar>
      <Page>{children}</Page>;
    </Box>
  );
};

export default Layout;
