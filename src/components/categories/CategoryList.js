import React, { useState, useContext, useEffect } from "react";
import { CategoryContext } from "./CategoryProvider";
import { Category } from "./CategoryDetail";
import "./Category.css";

export const CategoryList = ({ history }) => {
  const { getAllCategories, categories, searchTerms } = useContext(
    CategoryContext
  );

  const [filteredCategories, setFiltered] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <div className="Categories">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
