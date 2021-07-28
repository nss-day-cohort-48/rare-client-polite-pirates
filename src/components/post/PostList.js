import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostProvider";
import { useHistory } from "react-router-dom";
// import "./Post.css";
import { PostDetail } from "./PostDetail";

export const PostList = () => {
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className="posts">
      {posts.map((post) => {
        return <PostDetail key={post.id} post={post} />;
      })}
    </section>
  );
};
