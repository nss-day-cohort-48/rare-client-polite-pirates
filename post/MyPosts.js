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

  useEffect(() => {
    const currentUserId = parseInt(localStorage.getItem("rare_user_id"));
    if (currentUserId) {
      const userPosts = notebooks.filter((notebook) => {
        return currentUserId === notebook.userId;
      })};
    }
  }, [posts]);

  return (
    <>
    <div>
        {filteredNotebooks.map((notebook) => {
          return <NotebookDetail key={notebook.id} notebook={notebook} />;
        })}
    </div>

      <Footer />
    </>
  );
};
