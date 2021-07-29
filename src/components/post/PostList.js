import React, { useContext, useEffect } from "react";
import { PostContext } from "./PostProvider";
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
