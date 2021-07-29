import React, { useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom"
// import "./Post.css";

export const PostDetail = ({ post }) => {

  return (
    <section className="post">
      <h3 className="post__title">{post.title}</h3>
      <div className="post__author">Author: {post.user_id}</div>
      <div className="post__category">Category: {post.user_id}</div>
      <Link to={`/posts/${post.id}`}>
        Add Comment
      </Link>
    </section>
  );
};
