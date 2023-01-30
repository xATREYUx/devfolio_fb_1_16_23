import { useState, useContext, useEffect } from "react";
import { PostContext } from "../../providers/PostProvider";
import { appendErrors, FormProvider, useForm } from "react-hook-form";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import ImageInput from "./imageInput";

const PostForm = (props) => {
  const { createPost } = useContext(PostContext);
  const [editMode, setEditMode] = useState("Create");
  const [activateReset, setActivateReset] = useState(false);
  const [postTitleInput, setPostTitleInput] = useState("");
  const [fontSize, setFontSize] = useState(2);

  useEffect(() => {
    adjustFontSize();
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

  const submitPost = async (data) => {
    var formData = new FormData();
    const values = getValues();
    console.log("values log", values);
    try {
      const formDataObject = async () => {
        formData.append("title", values.title);
        formData.append("caption", values.caption);
        formData.append("content", values.content);
        formData.append("hiddenTitleFontSize", fontSize);
        formData.append("postType", values.type);
        values.file1[0] && formData.append("file1", values.file1[0]);
        values.file2[0] && formData.append("file2", values.file2[0]);
      };
      await formDataObject();
      await createPost(formData);
      setActivateReset(!activateReset);
      reset();
    } catch (err) {}
  };

  const editPost = async ({ data }) => {
    try {
      const dataFunction = async () => {};
      await dataFunction();
    } catch (err) {}
  };

  const adjustFontSize = () => {
    const fontSize =
      postTitleInput.length > 15 ? 2 - postTitleInput.length * 0.02 : 2;
    setFontSize(fontSize);
  };

  return (
    <FormProvider {...methods}>
      <Box
        style={{ margin: "1rem" }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(submitPost)}
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
                //console.log("event", e.target.value);
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
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Article"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="article"
                control={<Radio />}
                label="Article"
                {...register("type")}
              />
              <FormControlLabel
                value="component"
                control={<Radio />}
                label="Component"
                {...register("type")}
              />
            </RadioGroup>
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
