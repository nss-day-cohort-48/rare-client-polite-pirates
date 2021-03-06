import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentProvider.js"
// import { PostContext } from "../post/PostProvider.js"
import { useHistory } from "react-router-dom"
import "./CommentList.css"

export const CommentList =(props) => {
    const history = useHistory()
    const { comments, getComments } = useContext(CommentContext)
    // const { posts, getPosts } = useContext(PostContext)

    useEffect(() => {
        getComments()
        // getPosts()
    }, [])

    return (
        <article className="comments">
            <header className="comments__header">

              <h1>Comments</h1>

              
            </header>
            {
                comments.map(comment => {
                    return <section key={`comment--${comment.id}`} className="registration">
                        <div className="registration__comment_content">{comment.content}</div>
                        
                        <div className="registration__comment_content comment__small_text">Written by: {comment.author?.user?.first_name} {comment.author?.user?.last_name}</div>

                        <div className="comment__small_text">
                            Time: {
                                new Date(comment.created_on).toLocaleDateString("en-US",
                                {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            }
                            @ {comment.created_on}
                            
                        </div>
                    </section>
                })
            }
        </article>
    )
}