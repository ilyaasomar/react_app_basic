import React from "react";
import { useContext } from "react";
import { PostContext, UserContext } from "../App";
const Post = ({ user, content, image, id }) => {
  const userValue = useContext(UserContext);
  let currUser = userValue == user;
  const { dispatch } = useContext(PostContext);
  const handleDelete = () => {
    if(!window.confirm("Are you want to delete this post")) return;
    dispatch({ type: "DELETE_POST", payload: { postId: id } });
  };
  return (
    <div>
      <>
        <p>{content}</p>
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt=""
            style={{ width: "50px" }}
          />
        )}
        {user && <p style={{ color: currUser && "green" }}>{user}</p>}
        {currUser && <button onClick={handleDelete}>Delete</button>}
      </>
    </div>
  );
};

export default Post;
