import React, { useContext, useEffect } from "react"
import { CommentContext } from "./CommentProvider.js"
import { useHistory } from "react-router-dom"
// import "./CommentList.css"git 

export const CommentList =(props) => {
    const history = useHistory()
    const { comments, getComments } = useContext(CommentContext)

    useEffect(() => {
        getComments()
    }, [])

    return (
        <article className="comments">
            
        </article>
    )
}