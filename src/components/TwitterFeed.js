import { Paper } from "@mui/material";
import React from "react";
import { Timeline } from "react-twitter-widgets";
import { eagerLoadTwitterLibrary } from "react-twitter-widgets";

export const TwitterFeed = () => {
  return (
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName: "MightyMattXP",
      }}
      options={{
        height: "400",
        chrome: "nofooter, noheader, noscrollbar",
      }}
    />
  );
};
