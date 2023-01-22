import React from "react";
import Post from "./Post";
import { PostContext } from "../App";
import { useContext } from "react";
const PostList = () => {
  const { state } = useContext(PostContext);
  const posts = state.posts;
  console.log(posts);

  return posts.map((post, index) => <Post key={index} {...post} />);
};

export default PostList;
