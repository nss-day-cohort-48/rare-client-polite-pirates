import React, { useState, useContext, useEffect } from "react";
import { TagContext } from "./TagProvider.js";
import { Tag } from "./TagDetail.js";
import { useHistory } from "react-router-dom";
// import "./Tag.css";

export const TagList = () => {
    const { getAllTags, tags } = useContext(TagContext);
    const history = useHistory()

    useEffect(() => {
        getAllTags();
    }, []);

    return (
        <div style={{ marginTop: "2rem" }}>
            <div className="addTagButton">
                <button onClick={() => { history.push("/tags/create") }}>Add Tag</button>
            </div>
            <div className="Tags">
                {tags.map((tag) => (
                    <Tag key={tag.id} tag={tag} />
                ))}
            </div>
        </div>
    );
};
