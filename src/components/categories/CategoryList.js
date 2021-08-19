import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { CategoryContext } from "./CategoryProvider";
import { Category } from "./CategoryDetail";
import "./Category.css";


export const CategoryList = () => {
  const { getCategories, categories } = useContext(CategoryContext);
  const history = useHistory();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <button
          className="create__category"
          onClick={() => {
            history.push("/categories/create");
          }}
        >
          Create Category
        </button>
        <div className="Categories">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};
