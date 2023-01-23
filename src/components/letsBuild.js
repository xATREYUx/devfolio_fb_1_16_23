import { useState, useEffect } from "react";
import { styled } from "@mui/system";

const Component = styled("h1")({
  display: "flex",
  margin: 20,
  fontSize: 30,
  alignSelf: "center",
  justifyContent: "center",
  fontFamily: "Cuprum",
  height: 40,
  color: "#FF6600",
  border: "2px white solid",
  borderRadius: 5,
  padding: 3,
  marginLeft: 50,
  marginRight: 50,
  backgroundColor: "white",
});

const LetsBuild = ({ style }) => {
  const [subTitle, setSubtitle] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [flashCount, setFlashCount] = useState(0);
  const [flash, setFlash] = useState(false);

  const text = "LET'S BUILD!";
  useEffect(() => {
    const type = () => {
      if (textIndex < text.length) {
        setTimeout(() => setSubtitle(subTitle + text.charAt(textIndex)), 90);
        setTextIndex(textIndex + 1);
      } else {
        setTimeout(() => {
          setFlashCount(flashCount + 1);
          if (flashCount > 4) {
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
    <Component style={{ visibility: flash ? "hidden" : "visible" }}>
      {subTitle}
    </Component>
  );
};

export default LetsBuild;
