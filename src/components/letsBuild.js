import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { theme } from "../theme";

const Component = styled("h1")({
  display: "flex",
  // margin: 20,
  // fontSize: 30,
  // alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  // fontFamily: "Cuprum",
  height: 40,
  color: "#FF6600",
  // border: "2px white solid",
  borderRadius: 5,
  // padding: 3,
  // marginLeft: 50,
  // marginRight: 50,
  backgroundColor: "white",
});

const LetsBuild = ({ style }) => {
  const [subTitle, setSubtitle] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [flashCount, setFlashCount] = useState(0);
  const [flash, setFlash] = useState(false);

  const text = "Building...";
  useEffect(() => {
    const type = () => {
      if (textIndex < text.length) {
        //typing
        setTimeout(() => setSubtitle(subTitle + text.charAt(textIndex)), 100);
        setTextIndex(textIndex + 1);
      } else {
        setTimeout(() => {
          setFlashCount(flashCount + 1);
          if (flashCount > 2) {
            setTextIndex(0);
            setSubtitle("");
            setFlashCount(0);
            setFlash(false);
          } else {
            setFlash(!flash);
          }
        }, 90);
      }
    };
    const intervalId = setInterval(type, 200);
    return () => clearInterval(intervalId);
  }, [textIndex, subTitle, flashCount, flash]);

  return (
    <Component
      style={{
        visibility: flash ? "hidden" : "visible",
        width: 200,
        // justifySelf: "center",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        style={{
          ...theme.typography.h3,
          color: "#FF6600",
          fontSize: "1.5rem",
        }}
      >
        {subTitle}
      </Typography>
    </Component>
  );
};

export default LetsBuild;
