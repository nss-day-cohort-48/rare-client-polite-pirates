import React, { useContext } from "react";
// import "./Tag.css";
import { Link, useHistory } from "react-router-dom";
import { TagContext } from "./TagProvider";

export const Tag = ({ tag }) => {
    const history = useHistory();
    const { deleteTag } = useContext(TagContext)

    const handleDelete = () => {
        deleteTag(tag.id)
            .then(() => {
                history.push("/tags")
            })
    }

    return (
        <section className="tag">
            <h3 className="tag__name">
                <Link to={`/tags/${tag.id}`}>{tag.label}</Link>
            </h3>
            <button onClick={() => {
                    history.push(`/tags/edit/${tag.id}`);
                }}>Edit
            </button>
            <button onClick={handleDelete}>Delete Tag
            </button>
        </section>
    );
};