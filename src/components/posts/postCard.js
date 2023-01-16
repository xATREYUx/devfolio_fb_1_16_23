import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
// import { makeStyles } from "@mui/styles";
import { createTheme, useTheme } from "@mui/system";
import ErrorBoundary from "../ErrorBoundary";
import { ref } from "firebase/storage";

const PostCard = ({ post }) => {
  // const classes = useStyles();
  const theme = useTheme();
  console.log("PostListCard_Initiated: ", post);
  const navigate = useNavigate();
  const { loggedIn } = useContext(AuthContext);
  console.log("post_title_text_size: ", post.hiddenTitleFontSize);
  console.log("theme_postCard: ", theme);

  return (
    <ErrorBoundary section="postCard">
      <Card
        key={post.id}
        // className={classes.cardContainer}
        style={{
          width: "250px",
          height: "250px",

          // [theme.breakpoints.down("sm")]: {
          //   width: "350px",
          //   height: "350px",
          // },
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
        onClick={() => {
          console.log("post clicked!!");
          navigate(`/post/${post.id}`, { state: post });
        }}
      >
        <CardActionArea style={{ height: "100%" }}>
          <CardMedia
            style={{
              width: "100%",
              // [theme.breakpoints.down("sm")]: {
              height: "70%",
            }}
            // className={classes.cardMedia}
            component="img"
            image={post.file1}
            alt="You're probably not online"
          />
          <CardContent
            // className={classes.cardContent}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "30%",
              // justifyContent: "center",
              padding: "0px !important",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              // gutterBottom
              align="center"
              // className={classes.cardTitle}
              style={{
                ...theme.typography.h1,
                fontSize: post.hiddenTitleFontSize
                  ? post.hiddenTitleFontSize + "rem"
                  : "2rem",
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              // className={classes.cardCaption}
              style={{
                ...theme.typography.h1,
                paddingLeft: ".5rem",
                paddingRight: ".5rem",
                lineHeight: "1.2 !important",
                fontSize: "1rem",
              }}
            >
              {post.caption}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ErrorBoundary>
  );
};

// const useStyles = makeStyles((theme) => ({
//   cardContainer: {
//     width: "250px",
//     height: "250px",

//     [theme.breakpoints.down("sm")]: {
//       width: "350px",
//       height: "350px",
//     },
//     // [theme.breakpoints.down("lg")]: {
//     //   width: "350px",
//     //   height: "350px",
//     // },
//   },
//   cardMedia: {
//     width: "100%",
//     // [theme.breakpoints.down("sm")]: {
//     height: "70%",
//     // },
//   },
//   cardContent: {
//     display: "flex",
//     flexDirection: "column",
//     height: "30%",
//     // justifyContent: "center",
//     padding: "0px !important",
//     justifyContent: "center",
//     // textAlign: "justify",
//   },
//   cardTitle: {
//     ...theme.typography.h1,
//     fontSize: "1rem",
//   },
//   cardCaption: {
//     paddingLeft: ".5rem",
//     paddingRight: ".5rem",
//     lineHeight: "1.2 !important",
//     // alignItems: "center",
//   },
// }));
export default PostCard;
