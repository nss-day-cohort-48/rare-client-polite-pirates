import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import { PostContext } from "./PostProvider";
import date from "date-and-time"
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

  

  const post_time = new Date()
  const converted_time = date.format(post_time, 'MM/DD/YYYY')

  return (
    <section className="post">
      <h1 className="post__title">{post.title}</h1>
      {/* <div><img src={post.image_url}/></div> */}
      <div className="post__content">Content: {post.content}</div>
      <div className="post__category">Category: {post.category?.label}</div>
      <div className="post__publication_date">Posted on: {converted_time}</div>
      <div className="post__author">
      Author: {post.rare_user?.user?.first_name} {post.rare_user?.user?.last_name}
      </div>
    </section>
  );
};