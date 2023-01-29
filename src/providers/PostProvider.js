import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import domain from "../util/domain";
import { nanoid } from "nanoid";

import {
  doc,
  onSnapshot,
  setDoc,
  serverTimestamp,
  collection,
  Timestamp,
  addDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { FirebaseContext } from "./FirebaseProvider";
import { AuthContext } from "./AuthProvider";

export const PostContext = createContext({});

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);
  const { profile } = useContext(AuthContext);
  // //console.log("postPage:", profile);

  const { myFS, myStorage } = useContext(FirebaseContext);
  const postsCollection = collection(myFS, "posts");

  useEffect(() => {
    getAllPosts();
  }, []);

  const createPost = async (formData) => {
    // //console.log("---createPost_Initiated--- env: ", formData.values());
    // //console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    // //console.log("process.env.NODE_ENV", profile);

    //create doc ref
    const postDocRef = doc(postsCollection);
    try {
      //create data obj that will be sent to post collection
      let formDataObject = {};
      formDataObject["created"] = Timestamp.fromDate(new Date());
      formDataObject["createdBy"] = profile.uid;

      //for each key in data sent from form
      for (let [key, value] of formData) {
        //check if key/value is a file
        if (
          typeof formData.get(key) === "object" &&
          formData.get(key) instanceof File
        ) {
          //if there is a file do this
          // //console.log("field is a file type", formData.get(key));
          //build filename
          let nano = nanoid();
          let fileName = formData.get(key).name;
          const parts = fileName.split(".");
          const ext = parts.pop();
          const name = parts.join(".");
          fileName = name + "_DDMD" + nano + "." + ext;

          //upload files to storage
          const bucket = "postImages";
          const imageStorageRef = ref(myStorage, `${bucket}/${fileName}`);
          // //console.log("imageStorageRef", imageStorageRef);
          const snap = await uploadBytes(imageStorageRef, value);
          const url = await getDownloadURL(snap.ref);
          // //console.log("getDownloadURL", url);
          formDataObject[key] = url;
        } else {
          //if not a file
          formDataObject[key] = value;
          // //console.log("formDataObject", formDataObject);
        }
      }

      //create post doc with formDataObject data
      await setDoc(postDocRef, formDataObject);
      // //console.log("formDataObject_final", formDataObject);

      // let posts = [];
      // const querySnapshot = await getDocs(collection(myFS, "posts"));
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   //console.log(doc.id, " => ", doc.data());
      //   posts.push(doc.data());
      // });
    } catch (err) {
      // //console.log("!!create_res_err!!", err);
    }
  };

  const getAllPosts = async () => {
    // //console.log("Getting all posts...");
    try {
      let posts = [];
      const querySnapshot = await getDocs(
        query(postsCollection, orderBy("created", "desc"))
      );
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // //console.log(doc.id, " => ", doc.data());
        // const docData = doc.data();
        let data = doc.data();
        // let data = {};
        // // let keys = Object.keys(docData);
        // // keys.forEach((k) => {
        // //   k === "file1" || k === "file2"
        // //     ? (data[k] = ref(myStorage, docData[k]))
        // //     : (data[k] = docData[k]);
        // // });
        data.id = doc.id;
        posts.push(data);
      });
      // //console.log("all_posts: ", posts);
      setPosts(posts);
    } catch (err) {}
  };

  // const updatePost = async (data, input, index) => {
  //   //console.log("---updatePost Initiated---");
  //   const editPostId = data.id;
  //   var formData = new FormData();
  //   const dataFunction = async () => {
  //     formData.append("title", input.title);
  //     formData.append("caption", input.caption);
  //   };
  //   await dataFunction();

  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   };
  //   const editPostRes = await axios.put(
  //     `${domain}/posts/${editPostId}`,
  //     formData,
  //     config
  //   );
  //   getPosts();
  // };
  const updatePost = async ({ formData, id }) => {
    try {
      // //console.log("editPost Action Initiated", formData);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          "x-access-token": localStorage.getItem("token"),
        },
      };
      const editPostRes = await axios.put(
        `${domain}/posts/${id}`,
        formData,
        config
      );
      // //console.log("editPost log", editPostRes.data);
      // const data = editPostRes.data;
      // const newState = usersPosts.filter((item) => item.id === id);
      // setUsersPosts((prevState) => [...newState, data]);
      // getUsersPosts();
    } catch (err) {
      // //console.log("update error", err);
    }
  };

  const deletePost = async ({ id }) => {
    // //console.log("destroy post: ", id);
    const delPostRes = await axios.delete(`${domain}/posts/${id}`, {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    // //console.log("delPostRes", delPostRes);
    // getUsersPosts();
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        // setPosts,
        // setUsersPosts,
        // getPosts,
        createPost,
        // deletePost,
        // updatePost,
        // getUsersPosts,
        // usersPosts,
        getAllPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
