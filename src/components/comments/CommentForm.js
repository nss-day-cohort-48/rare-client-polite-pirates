import React, { useContext, useEffect, useRef, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { CommentContext } from "./CommentProvider"

export const CommentForm = () => {
    const { addComment } = useContext(CommentContext)
    const [comment, setComment] = useState({content: ""})
    const currentUser = localStorage.getItem("rare_user_id")
    const {postId} = useParams()

    const history = useHistory()

    const handleSaveComment = () => {
        addComment({
            content: comment.content,
            post_id: postId,
            author_id: currentUser,
            created_on: Date.now()
        })
    }

    return (
        <form className="comment_form">
            <h2 className="comment_form__title">New Comment</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="comment_form" name="content" required autoFocus className="form-control"
                        placeholder="What would you like to say?" 
                        onChange={(e) => {
                            setComment({content: e.target.value})
                        }}
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                // disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSaveComment()
                    history.push("/posts")
                }}>Save Comment</button>
        </form>
    )
}