// import { ClassNames } from "@emotion/react";
import { Grid, Paper } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
// import { defaults } from "js-cookie";
import React from "react";
import LoginForm from "../components/auth/login";
import RegisterForm from "../components/auth/register";
// import { AuthPageContainer } from "./auth-page-styles";
import { styled } from "@mui/system";

// const useStyles = makeStyles((theme) => ({
//   // authPageContainer: {
//   //   textAlign: "center",
//   //   margin: "4rem",
//   //   [theme.breakpoints.down("sm")]: {
//   //     marginLeft: "1rem",
//   //     marginRight: "1rem",
//   //   },
//   // },
//   authPageGrid: {
//     // width: "70%",
//   },
// }));
const AuthPageContainer = styled(Paper)(({ theme }) => {
  console.log("mixins", theme);
  return {
    textAlign: "center",
    margin: "4rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  };
});

const AuthPage = () => {
  return (
    <AuthPageContainer>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <LoginForm />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          {/* <RegisterForm /> */}
        </Grid>
      </Grid>
    </AuthPageContainer>
  );
};

export default AuthPage;
