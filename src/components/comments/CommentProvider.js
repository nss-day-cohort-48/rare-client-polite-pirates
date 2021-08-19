import React, { useState, createContext } from "react";

export const CommentContext = createContext();

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([]);

    const getComments = () => {
        return fetch("http://localhost:8000/comments", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
                "Content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(setComments);
    };

    const getCommentById = (commentId) => {
        return fetch(`http://localhost:8000/comments/${commentId}`).then((res) =>
            res.json()
        );
    };

    const addComment = (comment) => {
        return fetch("http://localhost:8000/comments", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(response => response.json())
            .then(getComments)
    }

    const deleteComment = comment => {
        return fetch(`http://localhost:8000/comments/${comment}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
                "Content-Type": "application/json"
            }
        })
        .then(getComments)
    }

    const updateComment = comment => {
        return fetch(`http://localhost:8000/comments/${comment.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(getComments)
    }

    return (
        <CommentContext.Provider
            value={{
                comments,
                getComments,
                getCommentById,
                addComment,
                updateComment,
                deleteComment
            }}
        >
            {props.children}
        </CommentContext.Provider>
    );
};
