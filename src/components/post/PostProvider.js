import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  posts.sort((post1, post2) =>
    post1.publication_date < post2.publication_date ? 1 : -1
  );

  const getMyPosts = (userId) => {
    return fetch(`http://localhost:8000/myposts?user=${userId}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
    }
    })
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
      headers: {
        "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
    }
    })
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPostById = (postId) => {
    return fetch(`http://localhost:8000/posts/${postId}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
    }
    }).then((res) => res.json());
  };

  const createPost = (post) => {
    return fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
        },
        body: JSON.stringify(post)
     })
        .then(getPosts)
}

  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts,
        getPostById,
        getMyPosts,
        createPost
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
