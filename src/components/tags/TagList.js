import React, { useState, useContext, useEffect } from "react";
import { TagContext } from "./TagProvider.js";
import { Tag } from "./TagDetail.js";
// import "./Tag.css";

export const TagList = () => {
    const { getAllTags, tags } = useContext(TagContext);

    useEffect(() => {
        getAllTags();
    }, []);

    return (
        <div style={{ marginTop: "2rem" }}>
            <div className="Tags">
                {tags.map((tag) => (
                    <Tag key={tag.id} tag={tag} />
                ))}
            </div>
        </div>
    );
};
