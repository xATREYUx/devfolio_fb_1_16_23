import React, { useContext, useEffect, useState } from "react";
// import { Column } from "../shared/shared.styles";
// import { UserPageContainer } from "./user-page-styles";
import { Grid } from "@mui/material";
import PostForm from "../components/posts/postForm";
import PostList from "../components/posts/postList";
import { PostContext } from "../providers/PostProvider";
import { AuthContext } from "../providers/AuthProvider";
// import EnterUserAdmin from "../components/admin/MakeUserAdmin";

import { getAuth } from "firebase/auth";
import { Box } from "@mui/system";

// const useStyles = makeStyles((theme) => ({
//   userPageBox: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   userName: {
//     ...theme.typography.h3,
//     alignItems: "center",
//   },
// }));

const UserPage = () => {
  const {
    getAllPosts,
    posts,
    // usersPosts,
  } = useContext(PostContext);
  const { profile } = useContext(AuthContext);
  // const [posts, setPosts] = useState([]);
  const [editPostData, setEditPostData] = useState("");
  const [resetForm, setResetForm] = useState(false);

  const classes = {};

  useEffect(() => {
    // const effectFunction = async () => {
    //   const allPosts = await getAllPosts();
    //   setPosts(allPosts);
    // };
    // effectFunction();
  }, []);

  console.log("UserPage: ", profile);
  return (
    <div
    // className={classes.userPageBox}
    >
      <h3
      // className={classes.userName}
      >
        {/* {loggedIn.user.email} */}
      </h3>
      <Grid container>
        {/* <h3>User Page</h3> */}
        <Grid item align="center" xs={12} sm={12} md={6}>
          {/* <div>{loggedIn.user.email}</div> */}
          <PostList title={""} posts={posts} dataLimit={6} pageLimit={4} />
        </Grid>
        <Grid item xs={12} md={6}>
          <PostForm
            editPostData={editPostData}
            setEditPostData={setEditPostData}
          />
          {/* <div>
            <CheckAdmin />
          </div> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default UserPage;
