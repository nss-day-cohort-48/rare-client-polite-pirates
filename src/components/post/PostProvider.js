import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    return fetch("http://localhost:8088/posts")
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPostById = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`).then((res) =>
      res.json()
    );
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts,
        getPostById,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
