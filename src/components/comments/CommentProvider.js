import React, { useState, createContext } from "react";

export const CommentContext = createContext();

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([]);

    const getComments = () => {
        return fetch("http://localhost:8088/comments")
            .then((res) => res.json())
            .then(setComments);
    };

    const getCommentById = (commentId) => {
        return fetch(`http://localhost:8088/comments/${commentId}`).then((res) =>
            res.json()
        );
    };

    const addComment = comment => {
        return fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(getComments)
    }

    const updateComment = comment => {
        return fetch(`http://localhost:8088/comments/${comment.id}`, {
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
                updateComment
            }}
        >
            {props.children}
        </CommentContext.Provider>
    );
};
