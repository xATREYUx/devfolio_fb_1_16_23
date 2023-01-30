import React from "react";
import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/styles";
// import { ClassSharp } from "@mui/icons-material";
import { createTheme, useTheme } from "@mui/system";
import { Paper, Typography } from "@mui/material";

export default function ReactEngineering() {
  // const classes = useStyles();
  const theme = useTheme();
  return (
    <Paper
      // className={classes.container}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // margin: "auto",
        width: "65%",
        // padding: 20,
        // justifyContent: "center",
        textAlign: "justify",
        backgroundColor: "white",
        padding: 10,
        marginBottom: 20,
        // border: "4px solid #FF6600",
      }}
    >
      <Typography
        // className={classes.mainTitle}
        style={{
          ...theme.typography.h3,
          color: "#E85B25",
          fontFamily: "Bangers",
          fontSize: "2rem",
          // letterSpacing: ".2rem",
          // [theme.breakpoints.down("sm")]: {
          //   fontSize: "2rem",
          // },
        }}
      >
        React Engineering
      </Typography>
      <div
        // className={classes.text}
        style={{
          ...theme.typography.subtitle1,
          color: "black",
          // maxWidth: "400px",
          // marginBottom: "1rem",
          // marginTop: 0,
          // marginRight: "1rem",
          // marginLeft: "1rem",
          // marginBottom: "1rem",
          // textJustify: "inter-word",
          // [theme.breakpoints.down("md")]: {
          //   // alignItems: "center",
          //   // width: "85%",
          //   // padding: "1rem",
          //   // margin: "1rem",
          // },
        }}
      >
        <p style={{ lineHeight: 1 }}>This is my portfolio.</p>
        <p style={{ lineHeight: 1 }}>It's built with React and Firebase.</p>
        <p style={{ lineHeight: 1 }}>
          I've also implemented other frameworks & languages such as React
          Native, Node, Python, and Bash.
        </p>
        <p style={{ lineHeight: 1 }}>
          I'll be posting components and other things as I explore the web.
        </p>
        {/* <p style={{ lineHeight: 1 }}>I aim to master my computer.</p> */}
        {/* Using ReactJS and Node I create single-page apps and components capable
        of monetization, data charting, api calls, user authentication and
        authorization, database and context management, and more! */}
      </div>
    </Paper>
  );
}
// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     margin: "auto",
//     // padding: 20,
//     // justifyContent: "center",
//     // marginBottom: "1rem",
//     textAlign: "justify",
//     backgroundColor: "#E85B25",
//     width: "100%",
//   },
//   text: {
//     ...theme.typography.subtitle1,
//     color: "white",
//     // maxWidth: "400px",
//     // marginBottom: "1rem",
//     marginTop: 0,
//     marginRight: "1rem",
//     marginLeft: "1rem",
//     marginBottom: "1rem",
//     // textJustify: "inter-word",
//     [theme.breakpoints.down("md")]: {
//       // alignItems: "center",
//       // width: "85%",
//       // padding: "1rem",
//       // margin: "1rem",
//     },
//   },
//   mainTitle: {
//     color: "white",
//     fontFamily: "Bangers",
//     fontSize: "2rem",
//     letterSpacing: ".2rem",
//     [theme.breakpoints.down("sm")]: {
//       fontSize: "2rem",
//     },
//   },
// }));
