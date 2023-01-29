import React, { useContext } from "react";
import { useEffect, useRef } from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

import {
  AnimationFreeFall,
  AnimationLookDown,
  AnimationManHanging,
} from "../shared/SilhouetteBlocks/SilhouetteBlocks";
import ReactEngineering from "./aboutThisSite/ReactEngineering";
import { GameHighlights } from "./GameHighlights";
import { TwitterFeed } from "./TwitterFeed";
import { AuthContext } from "../providers/AuthProvider";
import { theme } from "../theme";
// import { makeStyles } from "@mui/styles";

const FallingComponentContainer = () => {
  const { isMobile } = useContext(AuthContext);

  // const classes = useStyles();
  // const freefall = useRef();

  // useEffect(() => {
  //   const parallax = () => {
  //     if (freefall.current) {
  //       let scrolledValue = window.scrollY / 3.5;
  //       freefall.current.style.transform = `translateY(
  //     -${scrolledValue + "px"}
  //     )`;
  //       //console.log("scrolling...", scrolledValue);
  //     }
  //   };
  //   window.addEventListener("scroll", parallax);
  //   return () => window.removeEventListener("scroll", parallax);
  // }, [freefall]);

  const sideBarComponents = [
    isMobile ? null : <AnimationFreeFall />,

    isMobile ? null : <AnimationLookDown />,
    <TwitterFeed />,
    <GameHighlights />,
  ];

  const SideBarContainer = styled(Paper)({
    padding: 10,
  });
  return (
    <div
      style={{
        // flex: 1,
        flexDirection: "column",
        width: "70%",
        marginLeft: isMobile ? 0 : "40px",
        marginTop: "40px",
        height: "20%",
        // backgroundColor: "#E85B25",
        elevation: 0,
      }}
    >
      <SideBarContainer>
        <Typography
          variant="h3"
          // gutterBottom
          align="center"
          // className={classes.cardTitle}
          style={{
            ...theme.typography.h3,
            color: "#57AAE9",
            // position: "absolute",
            fontSize: "2rem",

            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          Tweets
        </Typography>
        {sideBarComponents.map((component, i) => {
          return (
            <div key={i}>
              {component}
              <div style={{ marginBottom: 15 }}></div>
            </div>
          );
        })}
      </SideBarContainer>
      {/* <AnimationManHanging /> */}
    </div>
  );
};
// const useStyles = makeStyles((theme) => ({
//   aboutThisSiteTwoContainer: {
//     width: "70%",
//     marginLeft: "40px",
//     marginTop: "40px",
//     backgroundColor: "#E85B25",
//   },
// }));
export default FallingComponentContainer;
