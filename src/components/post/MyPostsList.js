import React, { useContext, useEffect } from "react";
import { PostContext } from "./PostProvider";
import { MyPostDetail } from "./MyPostDetail";

export const MyPostsList = () => {
  const { posts, getMyPosts } = useContext(PostContext);
  const userId = parseInt(localStorage.getItem("rare_user_id"));

  useEffect(() => {
    getMyPosts(userId);
  }, []);

  const filterMyPosts = posts.filter((post) => {
    return userId === post.user_id;
  });

  return (
    <section className="my_posts">
      {filterMyPosts.map((post) => {
        return <MyPostDetail key={post.id} post={post} />;
      })}
    </section>
  );
};
