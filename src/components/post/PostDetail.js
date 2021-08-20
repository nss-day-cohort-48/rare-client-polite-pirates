import React, { useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom"
import { PostContext } from "./PostProvider";
// import "./Post.css";


export const PostDetail = ({ post }) => {

  const { posts, getPosts, deletePost} = useContext(PostContext);

  // const {postId} = useParams()

  // const deleteApost 
  
  return (
    <section className="post">
      <h3 className="post__title">{post.title}</h3>
      <div className="post__author">
        Author: {post.rare_user.user.first_name} {post.rare_user.user.last_name}
      </div>
      <div className="post__category">Category: {post.category?.label}</div>
      <Link to={`/posts/${post.id}`}>
        Comments
      </Link>
      <button className="btn delete__btn" onClick={() => deletePost(post.id)}>Delete</button>
    </section>
  );
};
