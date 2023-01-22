import React, { useState, useRef, useContext } from "react";
import { PostContext } from "../App";
const CreatePost = ({ user }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const { dispatch } = useContext(PostContext);
  const imageRef = useRef();
  const focusRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { user, content, image, id: Date.now() };
    dispatch({ type: "ADD_NEW_POST", payload: { post: newPost } });

    setContent("");
    setImage(null);
    imageRef.current.value = "";
    focusRef.current.focus();
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(event) => setContent(event.target.value)}
          value={content}
          ref={focusRef}
        />
        <input
          type="file"
          name="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageRef}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
