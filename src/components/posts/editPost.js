import React, { useState, useEffect, useContext } from "react";
import {
  appendErrors,
  FormProvider,
  useForm,
  Controller,
} from "react-hook-form";
// import { PostPageContainer } from "./post-page-styles";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Linkify from "react-linkify";
import { Box } from "@mui/system";
import world from "../../shared/images/logo.svg";
// import { makeStyles } from "@mui/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ImageInput from "./imageInput";

import {
  Button,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { PostContext } from "../../providers/PostProvider";

// const useStyles = makeStyles((theme) => ({
//   imageSection: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     // justifyContent: "space-evenly",
//     padding: "40px",
//   },
//   imageContainer: {
//     width: "300px",
//     height: "210px",
//     border: "4px solid #E85B25",
//     // overflow: "hidden",
//     borderRadius: "10px",
//   },
//   postImage: {
//     // display: "block",
//     width: "100%",
//     height: "100%",
//     // border: "3px solid #E85B25",
//     // borderRadius: "10px",
//     // overflow: "hidden",
//   },
//   detailsContainer: {
//     padding: "40px",
//     margin: "40px",
//     textAlign: "justify",
//   },
//   postContent: {
//     overflowX: "auto",
//     whiteSpace: "pre-wrap",
//     wordWrap: "break-word",
//   },
//   logoContainer: {
//     display: "flex",
//     justifyContent: "center",
//     width: "100%",
//   },
//   worldFooter: {
//     height: "5rem",
//     position: "absolute",
//   },
// }));

const EditPostPage = (props) => {
  const postDetails = useLocation().state;
  //console.log("postDetails", postDetails);
  const {
    title,
    hiddenTitleFontSize,
    cardImage,
    postImage,
    content,
    caption,
    id,
  } = postDetails;
  const { updatePost, deletePost } = useContext(PostContext);
  const [postTitleInput, setPostTitleInput] = useState(title);
  const [fontSize, setFontSize] = useState(hiddenTitleFontSize);
  const [activateReset, setActivateReset] = useState(false);
  const [pickedCardImage, setPickedCardImage] = useState();

  const navigate = useNavigate();
  // const classes = useStyles();
  const methods = useForm();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
    useFormContext,
  } = methods;

  useEffect(() => {
    adjustFontSize();
    //console.log("fontSize effect", fontSize);
  }, [postTitleInput]);

  const adjustFontSize = () => {
    const fontSize =
      postTitleInput.length > 15 ? 2 - postTitleInput.length * 0.02 : 2;
    //console.log(
    //   "fontSize",
    //   fontSize + " " + postTitleInput.length + " " + hiddenTitleFontSize
    // );
    setFontSize(fontSize);
  };
  const editPost = async ({ data }) => {
    //console.log("editPost Initiated data", data);
    var formData = new FormData();
    const values = getValues();
    try {
      const dataFunction = async () => {
        //console.log("getValues", values.cardImage[0]);
        //console.log("getValues", values.postImage[0]);
        let toDelete = [];
        {
          values.cardImage[0] && toDelete.push(postDetails.cardImage);
        }
        {
          values.postImage[0] && toDelete.push(postDetails.postImage);
        }
        formData.append("title", values.title);
        formData.append("caption", values.caption);
        formData.append("content", values.content);
        formData.append("hiddenTitleFontSize", fontSize);
        formData.append("cardImage", values.cardImage[0]);
        formData.append("postImage", values.postImage[0]);
        formData.append("imagesToBeDeleted", [toDelete]);
        // formData.append("postImageOne", pickedCardImageOne);
        // props.addNewPost((prevState) => [response.post, ...prevState]);
      };
      await dataFunction();
      await updatePost({ formData, id });
      reset();
      setActivateReset(!activateReset);
      navigate("/user");
    } catch (err) {
      //console.log("editPost error", err);
    }
  };

  const destroy = async () => {
    await deletePost({ id: id });
    navigate("/user");
  };

  //console.log("PostPage props", title);
  return (
    <FormProvider {...methods}>
      <Box
        // className={classes.formContainer}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(editPost)}
      >
        {/* <Paper className={classes.imageContainer}>
          <ImageInput name="postImage" reset={activateReset} />
        </Paper> */}
        <Grid container align="center" spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper
              // className={classes.imageContainer}
              style={{
                width: "300px",
                height: "210px",
                border: "4px solid #E85B25",
                // overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <ImageInput
                name="cardImage"
                reset={activateReset}
                defaultImage={cardImage}
              />
              {/* <img
                className={classes.postImage}
                src={postURLs[0]}
                alt="Youre probably not online"
              /> */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper
              // className={classes.imageContainer}
              style={{
                width: "300px",
                height: "210px",
                border: "4px solid #E85B25",
                // overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <ImageInput
                name="postImage"
                reset={activateReset}
                defaultImage={postImage}
              />
            </Paper>
          </Grid>
        </Grid>
        <Button
          color="success"
          variant="contained"
          onClick={() => props.setEditMode(false)}
        >
          View
        </Button>
        {/* <Button color="success" variant="contained" onClick={deletePost(id)}>
        Delete
      </Button> */}

        <IconButton variant="contained" onClick={() => destroy()}>
          <DeleteIcon fontSize="large" color="error" />
        </IconButton>
        <Paper
          // className={classes.detailsContainer}
          style={{ padding: "40px", margin: "40px", textAlign: "justify" }}
        >
          <TextField
            // className={classes.textInput}
            margin="normal"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            fullWidth
            inputProps={{
              maxLength: 35,
              style: {
                width: "400px",
                fontFamily: "Bangers",
                fontWeight: 500,
                fontSize: `${fontSize}rem`,
              },
            }}
            defaultValue={title || ""}
            {...register("title")}
            onChange={(e) => {
              //console.log("event", e.target.value);
              setPostTitleInput(e.target.value);
            }}
          />
          <TextField
            // className={classes.textInput}
            margin="normal"
            id="outlined-basic"
            label="Caption"
            multiline
            rows="2"
            variant="outlined"
            name="caption"
            inputProps={{ maxLength: 70, style: { width: "250px" } }}
            defaultValue={caption || ""}
            {...register("caption")}
          />
          {/* <Typography variant="h3">{postDetails.title}</Typography> */}
          <Linkify>
            <TextField
              // className={classes.textInput}
              fullWidth
              margin="normal"
              // rows="10"
              // id="outlined-multiline-flexible"
              label="Content"
              multiline
              InputProps={{
                inputComponent: TextareaAutosize,
                rows: 3,
              }}
              defaultValue={content || ""}
              {...register("content")}
            />
            {/* <Typography variant="blogPost">{postDetails.content}</Typography> */}
          </Linkify>
          <Button
            type="submit"
            color="success"
            variant="contained"
            // className={classes.postButton}
          >
            Post
          </Button>
          <div
            // className={classes.logoContainer}
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <img
              src={world}
              alt="logo"
              // className={classes.worldFooter}
              style={{ height: "5rem", position: "absolute" }}
            />
          </div>
        </Paper>
      </Box>
    </FormProvider>
  );
};

export default EditPostPage;
