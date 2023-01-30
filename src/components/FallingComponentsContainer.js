import React, { useContext } from "react";
import { useEffect, useRef } from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

import {
  AnimationFreeFall,
  AnimationLookDown,
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
    // <TwitterFeed />,
    <GameHighlights />,
  ];

  const SideBarContainer = styled(Paper)({
    padding: 10,
  });

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <AnimationLookDown />
      <Paper
        style={{
          // flexDirection: "column",
          width: "75%",
          marginLeft: isMobile ? 0 : "40px",
          marginTop: "40px",
          // height: "20%",
          // elevation: 0,
        }}
      >
        <SideBarContainer>
          {sideBarComponents.map((component, i) => {
            return (
              <div key={i}>
                {component}
                <div style={{ marginBottom: 15 }}></div>
              </div>
            );
          })}
        </SideBarContainer>
      </Paper>
    </div>
  );
};

export default FallingComponentContainer;
