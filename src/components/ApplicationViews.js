import React from "react";
import { Route } from "react-router-dom";
import { CategoryList } from "./categories/CategoryList";
import { CategoryForm } from "./categories/CategoryForm";
import { CategoryProvider } from "./categories/CategoryProvider";
import { CommentProvider } from "./comments/CommentProvider";
import { CommentForm } from "./comments/CommentForm";
import { PostList } from "./post/PostList";
import { PostProvider } from "./post/PostProvider";
import { MyPostsList } from "./post/MyPostsList";
import { PostForm } from "./post/PostForm";
import { PostDetail } from "./post/PostDetail";
import { PostContent } from "./post/PostContent";
import { TagList } from "./tags/TagList";
import { TagProvider } from "./tags/TagProvider";
import { TagForm } from "./tags/TagForm";


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
        <CategoryProvider>
          <CommentProvider>
            <TagProvider>

            <Route exact path="/categories/create">
              <CategoryForm />
            </Route>

            <Route exact path="/categories/:categoryId(\d+)/edit">
              <CategoryForm />
            </Route>

              <Route exact path="/categories">
                <CategoryList />
              </Route>


              <Route exact path="/categories/new">
                <CategoryForm />
              </Route>

              <Route exact path="/posts">
                <PostForm/>
                <PostList />
              </Route>
              
              <Route exact path="/myposts">
                <MyPostsList />
              </Route>

              <Route exact path="/tags">
                <TagList />
              </Route>
              
              <Route exact path="/tags/create">
                <TagForm />
              </Route>

              <Route exact path="/tags/edit/:tagId(\d+)">
                <TagForm />
              </Route>

              <Route exact path="/posts/:postId(\d+)">
                <PostContent/>
                <CommentForm />
              </Route>
              
            </TagProvider>
          </CommentProvider>
        </CategoryProvider>
      </PostProvider>
    </>
  );
};
