import React, { useState } from "react";

export const CategoryContext = React.createContext();

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [searchTerms, setTerms] = useState("");

  const getAllCategories = () => {
    return fetch("http://localhost:8000/categories", {
      header: {
        Authorization: `Token ${localStorage.getItem("rare_user_id")}`,
      },
    })
      .then((res) => res.json())
      .then(setCategories);
  };

  const getCategoryById = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`).then((res) =>
      res.json()
    );
  };

  const addCategory = (category) => {
    return fetch("http://localhost:8000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then(getAllCategories);
  };

  const updateCategory = (category) => {
    return fetch(`http://localhost:8000/categories/${category.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then(getAllCategories);
  };

  const releaseCategory = (categoryId) => {
    return fetch(`http://localhost:8000/categories/${categoryId}`, {
      method: "DELETE",
    }).then(getAllCategories);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        getAllCategories,
        getCategoryById,
        searchTerms,
        setTerms,
        releaseCategory,
        updateCategory,
        setCategories,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
