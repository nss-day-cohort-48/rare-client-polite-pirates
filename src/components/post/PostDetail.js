import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "./PostProvider";
import { useHistory, Link } from "react-router-dom";
// import "./Post.css";

export const PostDetail = ({ post }) => {
  const { getPostById } = useContext(PostContext);
  const [localPost, setPost] = useState({});
  const { postId } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (postId) {
      getPostById(parseInt(postId)).then((postObj) => {
        setPost(postObj);
      });
    } else {
      setPost(post);
    }
  }, [postId]);

  return (
    <section className="post">
      <h3 className="post__title">{localPost.title}</h3>
      <div className="post__author">Author: {localPost.user_id}</div>
      <div className="post__category">Category: {localPost.user_id}</div>
    </section>
  );
};
