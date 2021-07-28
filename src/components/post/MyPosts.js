import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostProvider";
import { useHistory } from "react-router-dom";
import "./Post.css";
import { PostDetail } from "./PostDetail";

export const PostList = () => {
  const { posts, getPosts } = useContext(PostContext);

  const history = useHistory();

  useEffect(() => {
    getPosts();
  }, []);

  // useEffect(() => {
  //   const currentUserId = parseInt(localStorage.getItem("rare_user_id"));
  //   if (currentUserId) {
  //     const userPosts = posts.filter((post) => {
  //       return currentUserId === post.user_id;
  //     });
  //   }
  // }, [posts]);

  return (
    <>
      <div>
        {posts.map((post) => {
          return <PostDetail key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};
