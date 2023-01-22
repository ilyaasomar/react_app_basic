import React from "react";
import { useState, useReducer, useContext } from "react";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import Login from "./components/Login";
import PostList from "./components/PostList";
import { createContext } from "react";
export const UserContext = createContext();
export const PostContext = createContext({ posts: [] });
import postReducer from "./postReducer";
function App() {
  const [user, setUser] = useState("ilyaas");
  // const [posts, setPosts] = useState([]);
  const initialPostContext = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostContext);
  if (!user) return <Login setUser={setUser} />;
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header setUser={setUser} />
        <CreatePost user={user} />
        <PostList />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
