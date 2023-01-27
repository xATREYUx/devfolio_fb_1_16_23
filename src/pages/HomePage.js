import React, { useEffect, useContext, useRef } from "react";

import { Grid, Typography } from "@mui/material";
import BlobTop from "../shared/images/blobTop.svg";
import World from "../shared/images/dev_folio_logo_globe.svg";
// import blobTop from "../shared/images/blobTop.svg";
import blobTop from "../shared/images/drip_background2.svg";

import bubbleBlobs from "../shared/images/bubbleBlobs.svg";
import {
  AnimationLookDown,
  AnimationFreeFall,
  AnimationCoupleSitting,
} from "../shared/SilhouetteBlocks/SilhouetteBlocks";
// import { AnimationCoupleSitting } from "../shared/SilhouetteBlocks/SilhouetteBlocks";
import { Box } from "@mui/system";
import { AuthContext } from "../providers/AuthProvider";
// import PostList from "../components/posts/postList";
// import PostContext from "../components/posts/postContext";
import FallingComponentsContainer from "../components/FallingComponentsContainer";
import { PostContext } from "../providers/PostProvider";
import PostList from "../components/posts/postList";
import ErrorBoundary from "../components/ErrorBoundary";
import LetsBuild from "../components/letsBuild";
import ReactEngineering from "../components/aboutThisSite/ReactEngineering";

const HomePage = () => {
  const { loggedIn, isMobile } = useContext(AuthContext);
  const { posts } = useContext(PostContext);
  const bubblesRef = useRef();

  const height = window.innerHeight;

  console.log("HomePage loggedIn", loggedIn + ", " + isMobile);

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
    <ErrorBoundary section="HomePage_error">
      <Box>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: height - height * 0.2,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minHeight: "500px",
          }}
        >
          <img
            src={World}
            style={{ height: "100vw", maxWidth: "350px" }}
            alt="world-pic"
          />
          <h4
            style={{
              position: "absolute",
              zIndex: -1,
              color: "gray",
              opacity: 0.15,
              fontSize: "2.1rem",
              // justifyContent: "normal",
              textAlign: "justify",
              width: "100%",
            }}
          >
            Code is salvation. Supercharging processes with tech is fun. Red
            pill, all day. Redux rocks. Teach script to kids. I got components
            for days. StackOverflow is amazing. I like them styled with Sass.
            More beeps and boops. Keep renders down. Make javascript your b****.
            Captain Archer is the best starship Captain - change my mind. Data,
            Data, Data. If google can’t answer your question, you’re asking the
            wrong one. Must learn more Python. "The jungian thing." It’s only
            logical. K. I. S. S. Dare to dream. Covid sucks. Dark mode 24/7. The
            Rock for President. Birds & squirrels, home runs & touchdowns.
            Thrive, don’t survive. I could have loved Cary Grant. Port in, zone
            out. Cable guys don’t know what a packet is. I scream love and punk
            rock at the sky. There are levels to this game.
          </h4>
        </div>
        <div
          style={{
            backgroundImage: `url(${blobTop})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundWidth: "100%",
            paddingBottom: "30.64%",
          }}
        >
          <AnimationCoupleSitting
            style={{ height: 60, top: -30, position: "absolute" }}
          />
          {/* <img
          src={CoupleSitting}
          alt="coupleSitting"
          style={{
            height: "4rem",
            left: "35%",
            top: "-35px",
            // display: "flex",
            position: "relative",
          }}
        /> */}
          <Grid container justifyContent="center" width="100%" marginTop={0}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              p={2}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // backgroundColor: "red",
                // justifyContent: "center",
                // width: "100%",
                // position: "relative",
              }}
            >
              {/* <AboutThisSite /> */}
              {/* <div
                style={{
                  marginTop: 20,
                  backgroundColor: "red",
                  width: "100%",
                  // alignItems: "center",
                }}
              > */}
              <LetsBuild />
              {/* </div> */}
              <PostList posts={posts} dataLimit={6} pageLimit={4} title="" />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              align={isMobile ? "center" : "right"}
              style={{ marginTop: 40 }}
            >
              <ReactEngineering />
              <FallingComponentsContainer />
              {/* <ContactUs /> */}
            </Grid>
          </Grid>
          <img
            src={bubbleBlobs}
            alt="bubble-blob"
            style={{
              zIndex: -2,
              position: "absolute",
              width: "100%",
              height: 500,
              bottom: -200,
              left: -150,
              // backgroundColor: "red",
            }}
            ref={bubblesRef}
          />
        </div>
      </Box>
    </ErrorBoundary>
  );
};
// const useStyles = makeStyles((theme) => ({
//   // sectionOne: {
//   //   display: "flex",
//   //   flexDirection: "column",
//   //   height: "85vh",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   //   position: "relative",
//   // },
//   world: {
//     height: "30vw",
//     maxWidth: "250px",
//     // transform: "translatey(-30px)",
//     /* margin: 40px; */
//     /* margin-top: 60px; */
//   },
//   salvation: {
//     position: "absolute",
//     zIndex: -1,
//     color: "gray",
//     opacity: 0.15,
//     fontSize: "2.1rem",
//     // justifyContent: "normal",
//     textAlign: "justify",
//     width: "100%",
//     // textJustify: "inter-word",
//   },
//   sectionTwo: {
//     backgroundImage: `url(${blobTop})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundWidth: "100%",
//     paddingBottom: "66.64%",
//   },
//   coupleSitting: {
//     height: "4rem",
//     left: "35%",
//     top: "-35px",
//     // display: "flex",
//     position: "relative",
//   },
//   bubbleBlobs: {
//     zIndex: "-2",
//     position: "absolute",
//     width: "40%",
//     height: "60vh",
//     bottom: "-1400px",
//   },
// }));
export default HomePage;
