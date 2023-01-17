import React from "react";

export const GameHighlights = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        position: "relative",
        border: "2px solid white",
      }}
    >
      {/* <AnimationCrusader /> */}
      <iframe
        title="game-highlights"
        width="100%"
        // height="315"
        src="https://youtube.com/embed/t1BJH0qbOdk?autoplay=1&mute=1&loop=1&playlist=t1BJH0qbOdk"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};
