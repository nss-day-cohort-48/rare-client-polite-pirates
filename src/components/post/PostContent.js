import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import { PostContext } from "./PostProvider";
// import "./Post.css";

export const PostContent = () => {
  const { getPostById } = useContext(PostContext)
  const [ post, setPost ] = useState( {} )

  const {postId} = useParams()

  useEffect(() => {
    getPostById(parseInt(postId)).then((post)=>{
      setPost(post)
    })
}, [])

  return (
    <section className="post">
      <h1 className="post__title">{post.title}</h1>
      {/* <div><img src={post.image_url}/></div> */}
      <div className="post__author">
        Author: {post.rare_user?.user?.first_name} {post.rare_user?.user?.last_name}
      </div>
      <div className="post__category">Category: {post.category?.label}</div>
      <div className="post__content">Content: {post.content}</div>
    </section>
  );
};