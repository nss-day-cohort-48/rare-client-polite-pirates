import React from "react";
import "./Category.css";
import { Link, useHistory } from "react-router-dom";

export const Category = ({ category }) => {
  const history = useHistory();

  return (
    <section className="category">
      <h3 className="category__name">
        <Link to={`/categories/${category.id}`}>{category.label}</Link>
      </h3>
      <button
        onClick={() => {
          history.push("/categories/new");
        }}
      >
        Edit
      </button>
    </section>
  );
};
