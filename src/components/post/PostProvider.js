import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  posts.sort((post1, post2) =>
    post1.publication_date < post2.publication_date ? 1 : -1
  );

  const getMyPosts = (userId) => {
    return fetch(`http://localhost:8088/myposts?user=${userId}`)
      .then((res) => res.json())
      .then(setPosts);
  };

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
        getMyPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
