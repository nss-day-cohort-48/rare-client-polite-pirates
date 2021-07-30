import React from "react";
// import "./Post.css";

export const MyPostDetail = ({ post }) => {
  return (
    <section className="post">
      <h3 className="post__title">{post.title}</h3>
      <div className="post__category">Category: {post.category?.label}</div>
    </section>
  );
};
