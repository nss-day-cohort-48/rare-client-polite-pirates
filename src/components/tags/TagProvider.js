import React, { useState, createContext } from "react";

export const TagContext = createContext();

export const TagProvider = (props) => {
    const [tags, setTags] = useState([]);

    const getAllTags = () => {
        return fetch("http://localhost:8000/tags", {
            headers: {
                Authorization: `Token ${localStorage.getItem("rare_user_id")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setTags(data));
    };

    const getTagById = (tagId) => {
        return fetch(`http://localhost:8000/tags/${tagId}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("rare_user_id")}`,
            },
        }).then((res) => res.json());
    };

    const createTag = (tag) => {
        return fetch(`http://localhost:8000/tags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("rare_user_id")}`,
            },
            body: JSON.stringify(tag),
        }).then(getAllTags);
    };

    const deleteTag = (tagId) => {
        return fetch(`http://localhost:8000/tags/${tagId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("rare_user_id")}`,
            },
        }).then(getAllTags);
    };

    const updateTag = tag => {
        return fetch(`http://localhost:8000/tags/${tag.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tag)
        })
            .then(getAllTags)
    }

    return (
        <TagContext.Provider
            value={{
                tags,
                getAllTags,
                getTagById,
                createTag,
                deleteTag,
            }}
        >
            {props.children}
        </TagContext.Provider>
    );
};
