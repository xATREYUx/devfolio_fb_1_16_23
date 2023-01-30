import React, { useRef, useEffect } from "react";

import personDown from "../images/lookdown.svg";
import falling from "../images/falling.svg";
import coupleSitting from "../images/couple_sitting.svg";
import ManHanging from "../images/hangingman.png";
import BubbleBlobs from "../images/bubbleBlobs.svg";

export const AnimationLookDown = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        // backgroundColor: "green",
      }}
    >
      <img
        src={personDown}
        alt="person-down"
        style={{
          position: "absolute",
          // backgroundColor: "red",
          height: "40px",
          left: 120,
        }}
      />
    </div>
  );
};

export const AnimationFreeFall = () => {
  // const classes = useStyles();
  const freefall = useRef();

  useEffect(() => {
    const parallax = () => {
      if (freefall.current) {
        let scrolledValue = window.scrollY / 4.5;
        freefall.current.style.transform = `translateY(
      ${scrolledValue + "px"} 
      )`;
        // //console.log("scrolling...", scrolledValue);
        // //console.log("start location", startlocation);
      }
    };
    window.addEventListener("scroll", parallax);
    return () => window.removeEventListener("scroll", parallax);
  }, [freefall]);

  return (
    <div
      style={{
        // backgroundColor: "red",
        position: "relative",
        // width: "100%",
        zindex: "2",
        // height: "1",
        transform: "scaleX(-1)",
        // height: "10px",
        // top: "160px",
      }}
    >
      <img
        ref={freefall}
        src={falling}
        alt="person-falling"
        style={{
          height: 33,
          position: "absolute",
          left: 300,
          top: 100,
        }}
      />
    </div>
  );
};

export const AnimationCoupleSitting = ({ style }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img src={coupleSitting} alt="couple-sitting" style={style} />
    </div>
  );
};

export const AnimationManHanging = () => {
  // const classes = useStyles();
  return (
    <div>
      <img
        src={ManHanging}
        alt="man-hanging"
        // className={classes.manHanging}
      />
    </div>
  );
};

// export const AnimationCrusader = () => {
//   // const classes = useStyles();
//   return (
//     <div
//       style={{
//         // backgroundColor: "red",
//         position: "relative",
//         // width: "100%",
//         zindex: "2",
//         // height: "1",
//         transform: "scaleX(-1)",
//         // height: "10px",
//         // top: "160px",
//       }}
//     >
//       <img
//         src={Crusader}
//         alt="crusader"
//         style={{
//           height: 100,
//           position: "absolute",
//           left: -90,
//           top: -50,
//         }}
//         // className={classes.manHanging}
//       />
//     </div>
//   );
// };

export const HomeBlobs = () => {
  // const classes = useStyles();
  const bubblesRef = useRef();

  useEffect(() => {
    const parallax = () => {
      if (bubblesRef.current) {
        let scrolledValue = window.scrollY / 3.5;
        bubblesRef.current.style.transform = `translateY(
      -${scrolledValue + "px"} 
      )`;
      }
    };
    window.addEventListener("scroll", parallax);
    return () => window.removeEventListener("scroll", parallax);
  }, [bubblesRef]);
  return (
    <div
      style={{
        // backgroundColor: "red",
        position: "relative",
        // width: "100%",
        zindex: "2",
        // height: "1",
        transform: "scaleX(-1)",
        // height: "10px",
        // top: "160px",
      }}
    >
      <img
        src={BubbleBlobs}
        alt="bubble-blob"
        style={{
          zIndex: "-2",
          position: "absolute",
          width: "40%",
          height: "60vh",
          bottom: "-1400px",
        }}
        ref={bubblesRef}
      />
    </div>
  );
};
// export const AnimationLookDown = () => {
//   return (
//     <AnimationLookDownContainer>
//       <img src={PersonDown} alt="person down" />
//     </AnimationLookDownContainer>
//   );
// };

// export const AnimationFreeFall = () => {
//   return (
//     <AnimationFreeFallContainer>
//       <img src={FreeFall} alt="person-fallng" />
//     </AnimationFreeFallContainer>
//   );
// };

// export const AnimationCoupleSitting = () => {
//   return (
//     <AnimationCoupleSittingContainer>
//       <img src={CoupleSitting} alt="couple-sitting" />
//     </AnimationCoupleSittingContainer>
//   );
// };
