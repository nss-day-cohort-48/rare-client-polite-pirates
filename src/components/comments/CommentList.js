import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentProvider.js"
import { useHistory } from "react-router-dom"
import "./CommentList.css"

export const CommentList =(props) => {
    const history = useHistory()
    const { comments, getComments } = useContext(CommentContext)

    useEffect(() => {
        getComments()
    }, [])

    return (
        <article className="comments">
            <header className="comments__header">

              <h1>Comments</h1>

              
            </header>
            {
                comments.map(comment => {
                    return <section key={comment.id} className="registration">
                        <div className="registration__comment_content">{comment.content}</div>
                        <div className="registration__comment_author">{comment.author}</div>
                        <div>
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