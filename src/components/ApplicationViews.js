import React from "react"
import { Route } from "react-router-dom"
import { CategoryForm } from "./categories/CategoryForm";
import { CategoryList } from "./categories/CategoryList"
import { CategoryProvider } from "./categories/CategoryProvider"
import { PostProvider } from "./post/PostProvider"
import { PostList } from "./post/PostList"
import { CommentProvider } from "./comments/CommentProvider";
import { CommentForm } from "./comments/CommentForm";

export const ApplicationViews = () => {
    return (
    <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>
            <PostProvider>
            <CategoryProvider>
            <CommentProvider>

                <Route exact path="/categories">
                    <CategoryList />
                    <CategoryForm/>
                </Route>

                <Route exact path="/posts">
                    <PostList />
                </Route>

                <Route exact path="/posts/:roundId(\d+)">
                    <CommentForm />
                </Route>

            </CommentProvider>
            </CategoryProvider>
            </PostProvider>
    </>
    )
};
