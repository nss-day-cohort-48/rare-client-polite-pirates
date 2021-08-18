import React, { useContext } from "react";
import "./Category.css";
import { Link, useHistory } from "react-router-dom";
import { CategoryContext } from "./CategoryProvider.js";

export const Category = ({ category }) => {
  const { deleteCategory } = useContext(CategoryContext);
  const history = useHistory();

  return (
    <section className="category">
      <h3 className="category__name">
        <Link to={`/categories/${category.id}`}>{category.label}</Link>
      </h3>
      <button
        className="btn btn-2"
        onClick={() => {
          history.push(`/categories/${category.id}/edit`);
        }}
      >
        Edit
      </button>
      <button className="btn btn-3" onClick={() => deleteCategory(category.id)}>
        Delete
      </button>
    </section>
  );
};
