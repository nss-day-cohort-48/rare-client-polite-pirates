import React from "react";
import { Route } from "react-router-dom";
import { PostList } from "./post/PostList";
import { PostProvider } from "./post/PostProvider";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      ></main>
      <PostProvider>
        <Route exact path="/posts">
          <PostList />
        </Route>
      </PostProvider>
    </>
  );
};
