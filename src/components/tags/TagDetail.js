import React from "react";
// import "./Tag.css";
import { Link, useHistory } from "react-router-dom";

export const Tag = ({ tag }) => {
    const history = useHistory();

    return (
        <section className="tag">
            <h3 className="tag__name">
                <Link to={`/tags/${tag.id}`}>{tag.label}</Link>
            </h3>
            <button
                onClick={() => {
                    history.push("/tags/new");
                }}
            >
                Edit
            </button>
        </section>
    );
};