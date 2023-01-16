import { useState, useContext, useEffect } from "react";
import { PostContext } from "../../providers/PostProvider";
import {
  appendErrors,
  FormProvider,
  useForm,
  Controller,
} from "react-hook-form";
import { Button } from "@mui/material";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import ImageInput from "./imageInput";

const PostForm = (props) => {
  // const classes = useStyles();

  const { createPost } = useContext(PostContext);

  const [editMode, setEditMode] = useState("Create");
  const [pickedCardImage, setPickedCardImage] = useState();
  const [pickedCardImageOne, setPickedCardImageOne] = useState();
  const [pickedCardImageTwo, setPickedCardImageTwo] = useState();
  const [activateReset, setActivateReset] = useState(false);
  const [editPostId, setEditPostId] = useState();
  const [postTitleInput, setPostTitleInput] = useState("");
  const [fontSize, setFontSize] = useState(2);

  useEffect(() => {
    adjustFontSize();
    console.log("fontSize effect", fontSize);
  }, [postTitleInput]);

  const methods = useForm();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
    useFormContext,
  } = methods;
  // const resetForm = () => setResetComponent(!resetComponent);

  const submitPost = async (data) => {
    console.log("send data", data);
    console.log("send pickedCardImage", pickedCardImage);
    var formData = new FormData();
    const values = getValues();
    console.log("values log", values.file1[0]);
    try {
      const formDataObject = async () => {
        formData.append("title", values.title);
        formData.append("caption", values.caption);
        formData.append("content", values.content);
        formData.append("hiddenTitleFontSize", fontSize);
        // {
        //   values.cardImage[0] &&
        //     formData.append("cardImage", values.cardImage[0]);
        // }
        // {
        //   values.postImage[0] &&
        //     formData.append("postImage", values.postImage[0]);
        // }
        values.file1[0] && formData.append("file1", values.file1[0]);

        values.file2[0] && formData.append("file2", values.file2[0]);
      };
      await formDataObject();
      await createPost(formData);
      console.log("postForm formData");
      setActivateReset(!activateReset);
      reset();
    } catch (err) {
      console.log("submitPost error", err);
    }
  };

  const editPost = async ({ data }) => {
    console.log("editPost Initiated data", data);

    try {
      const dataFunction = async () => {
        console.log("editPost Initiated data", data);
      };
      await dataFunction();
    } catch (err) {
      console.log("editPost error", err);
    }
  };

  const adjustFontSize = () => {
    const fontSize =
      postTitleInput.length > 15 ? 2 - postTitleInput.length * 0.02 : 2;
    console.log("fontSize", fontSize);
    setFontSize(fontSize);
  };

  return (
    <FormProvider {...methods}>
      <Box
        style={{ margin: "1rem" }}
        // className={classes.formContainer}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(submitPost)}
        // onSubmit={handleSubmit(editMode === "Edit" ? editPost : submitPost)}
      >
        <h2>{editMode} Post</h2>
        <Grid container justifyContent="center">
          <Grid item md={12} sm={12}>
            <TextField
              // className={classes.textInput}
              style={{ marginBottom: "3px" }}
              margin="normal"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              inputProps={{
                maxLength: 35,
                style: {
                  width: "250px",
                  fontFamily: "Bangers",
                  fontWeight: 500,
                  fontSize: `${fontSize}rem`,
                },
              }}
              defaultValue={props.editPostData.title || ""}
              {...register("title")}
              onChange={(e) => {
                console.log("event", e.target.value);
                setPostTitleInput(e.target.value);
              }}
            />
            <br />
            <TextField
              style={{ marginBottom: "3px" }}
              margin="normal"
              id="outlined-basic"
              label="Caption"
              multiline
              rows="2"
              variant="outlined"
              name="caption"
              inputProps={{ maxLength: 70, style: { width: "250px" } }}
              defaultValue={props.editPostData.caption || ""}
              {...register("caption")}
            />
            <br />
            <TextField
              // className={classes.textInput}
              style={{ marginBottom: "3px" }}
              fullWidth
              margin="normal"
              rows="10"
              // id="outlined-multiline-flexible"
              label="Content"
              multiline
              defaultValue={props.editPostData.content || ""}
              {...register("content")}
            />
          </Grid>
          <br />

          <Grid item md={12} sm={12}>
            <Grid
              container
              // className={classes.imageSection}
              style={{
                display: "flex",
                position: "relative",
                width: "100%",
                // flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Grid item md={6} sm={6}>
                {/* <FileInput name="cardImage" /> */}
                <div
                // className={classes.imageInputContainer}
                >
                  <ImageInput name="file1" reset={activateReset} />
                </div>
              </Grid>
              <Grid item>
                <div
                  style={{
                    border: "1px solid #C4C4C4",
                    width: "250px",
                    height: "175px",
                    borderRadius: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "3px",
                  }}
                  // className={classes.imageInputContainer}
                >
                  <ImageInput name="file2" reset={activateReset} />
                </div>
                {appendErrors.password && (
                  <p>{appendErrors.password.message}</p>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} align="center">
            <Button
              type="submit"
              color="success"
              variant="contained"
              // className={classes.postButton}
              style={{ width: "250px" }}
            >
              {editMode === "Edit" ? "Edit" : "Post"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};
// const useStyles = makeStyles({
//   textInput: {
//     marginBottom: "3px",
//   },
//   formContainer: {
//     // display: "flex",
//     // flexDirection: "column",
//     // alignItems: "center",
//     margin: "1rem",
//   },
//   postButton: {
//     width: "250px",
//   },
//   imageSection: {
//     display: "flex",
//     position: "relative",
//     width: "100%",
//     // flexDirection: "column",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   imageInputContainer: {
//     // position: "relative",
//     // display: "flex",
//     border: "1px solid #C4C4C4",

//     width: "250px",
//     height: "175px",
//     borderRadius: "4px",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: "3px",
//   },
// });
export default PostForm;
