import React, { useContext, useState } from "react";
// import { PostPageContainer } from "./post-page-styles";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Linkify from "react-linkify";
import { Box, display } from "@mui/system";
import world from "../shared/images/dev_folio_logo_globe.svg";
// import { makeStyles } from "@mui/styles";
import { Button, Grid, Hidden, Paper, Typography } from "@mui/material";
import EditPostPage from "../components/posts/editPost";
import { AuthContext } from "../providers/AuthProvider";
import { styled } from "@mui/system";

const PostPage = (props) => {
  const { profile } = useContext(AuthContext);
  // const uid = loggedIn?.user?.uid;
  // console.log("postpage loggedin", loggedIn);
  // const navigate = useNavigate();
  const postDetails = useLocation().state;
  // const classes = {};
  const [editMode, setEditMode] = useState(false);
  console.log("postDetail_profile", profile);
  console.log("postDetails", postDetails);

  const PageContainer = styled("div")({
    display: "flex",
    // position: "relative",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "600px",
    // background: "red",
    paddingBottom: "100px",
    paddingTop: "20px",

    // overflow: "visible",
  });

  const FooterLogo = styled("div")({
    width: "100%",
    // flex: 1,
    display: "flex",
    position: "relative",
    // flex: 1,
    // height: 10,
    // alignSelf: "center",
    // backgroundColor: "yellow",
    justifyContent: "center",
    // position: "absolute",
    // alignSelf: "flex-end",
    bottom: 30,
    // overflow: "visible",
  });

  return !editMode ? (
    <PageContainer>
      <Grid
        container
        style={{}}
        // align="center"
        spacing={2}
        xs={12}
        sm={12}
        md={12}
      >
        <Grid item xs={12} sm={12} md={6} align="center">
          <Paper style={{ height: "300px" }}>
            <img
              src={postDetails.file1}
              alt="Youre probably not online"
              style={{ height: "100%" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} align="center">
          <Paper style={{ height: "300px" }}>
            <img
              src={postDetails.file2}
              alt="Youre probably not online"
              style={{ height: "100%" }}
            />
          </Paper>
        </Grid>
        {/* {console.log("edit_button: ", profile.uid === postDetails.createdBy)} */}
        {profile && profile.uid === postDetails.createdBy ? (
          <Button
            color="success"
            variant="contained"
            onClick={() => setEditMode(true)}
          >
            Edit
          </Button>
        ) : null}
        <Grid item xs={12} sm={12} md={12}>
          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              // height: "100%",
              // width: "100%",
              paddingLeft: 15,
              paddingRight: 15,
              paddingBottom: 20,
              minHeight: "600px",
            }}
          >
            <Typography variant="h3">{postDetails.title}</Typography>
            <br />
            <Typography variant="blogPost">{postDetails.caption}</Typography>
            <br />
            <Linkify>
              <Typography variant="blogPost">{postDetails.content}</Typography>
            </Linkify>
          </Paper>

          <FooterLogo
          // className={classes.logoContainer}
          >
            <img
              src={world}
              alt="logo"
              style={{
                width: 100,
                position: "absolute",
                // zIndex: 5,
                // alignSelf: "flex-end",
                // bottom: ,
              }}
              // className={classes.worldFooter}
            />
          </FooterLogo>
        </Grid>
      </Grid>
    </PageContainer>
  ) : (
    <PageContainer>
      <EditPostPage setEditMode={setEditMode} />
    </PageContainer>
  );
};

export default PostPage;
