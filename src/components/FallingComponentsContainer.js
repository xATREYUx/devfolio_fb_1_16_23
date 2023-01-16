import React from "react";
import { useEffect, useRef } from "react";
import { Paper, Typography } from "@mui/material";
import {
  AnimationFreeFall,
  AnimationLookDown,
  AnimationManHanging,
} from "../shared/SilhouetteBlocks/SilhouetteBlocks";
import ReactEngineering from "./aboutThisSite/ReactEngineering";
import { GameHighlights } from "./GameHighlights";
import { TwitterFeed } from "./TwitterFeed";
// import { makeStyles } from "@mui/styles";

const FallingComponentContainer = () => {
  // const classes = useStyles();
  // const freefall = useRef();

  // useEffect(() => {
  //   const parallax = () => {
  //     if (freefall.current) {
  //       let scrolledValue = window.scrollY / 3.5;
  //       freefall.current.style.transform = `translateY(
  //     -${scrolledValue + "px"}
  //     )`;
  //       console.log("scrolling...", scrolledValue);
  //     }
  //   };
  //   window.addEventListener("scroll", parallax);
  //   return () => window.removeEventListener("scroll", parallax);
  // }, [freefall]);

  const sideBarComponents = [
    <AnimationFreeFall />,
    <ReactEngineering />,
    <AnimationLookDown />,
    <TwitterFeed />,
    <GameHighlights />,
  ];
  return (
    <div
      style={{
        // flex: 1,
        flexDirection: "column",
        width: "70%",
        marginLeft: "40px",
        marginTop: "40px",
        height: "20%",
        // backgroundColor: "#E85B25",
        elevation: 0,
      }}
    >
      {sideBarComponents.map((component, i) => {
        return (
          <div key={i}>
            {component}
            <div style={{ marginBottom: 15 }}></div>
          </div>
        );
      })}

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
