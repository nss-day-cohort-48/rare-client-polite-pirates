import React, { useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom"
// import "./Post.css";

export const PostDetail = ({ post }) => {

  return (
    <section className="post">
      <h3 className="post__title">{post.title}</h3>
      <div className="post__author">
        Author: {post.rare_user.user.first_name} {post.rare_user.user.last_name}
      </div>
      <div className="post__category">Category: {post.category?.label}</div>
      <Link to={`/posts/${post.id}`}>
        Add Comment
      </Link>
    </section>
  );
};
