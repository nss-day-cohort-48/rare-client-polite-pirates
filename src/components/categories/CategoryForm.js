import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { CategoryContext } from "./CategoryProvider";

export const CategoryForm = () => {
  // PROVIDER INFO HERE
  const {
    categories,
    createCategory,
    getCategories,
    updateCategory,
    getCategoryById,
  } = useContext(CategoryContext);

  const { categoryId } = useParams();
  const history = useHistory();

  const [currentCategory, setCurrentCategory] = useState({ label: "" });

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categoryId) {
      getCategoryById(categoryId).then((category) =>
        setCurrentCategory({
          label: category.label,
        })
      );
    }
  }, [categoryId]);

  const changeCategoryState = (category) => {
    const newCategoryState = { ...currentCategory };
    newCategoryState[category.target.name] = category.target.value;
    setCurrentCategory(newCategoryState);
  };

  return (
    <form className="category_form">
      <h2 className="category_form__title">Create Category</h2>
      <fieldset>
        <div className="form-group">
          <input
            type="text"
            id="category_form"
            name="label"
            required
            autoFocus
            className="form-control"
            placeholder="add text"
            value={currentCategory.label}
            onChange={changeCategoryState}
          />
        </div>
      </fieldset>

      {categoryId ? (
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            updateCategory({
              id: categoryId,
              label: currentCategory.label,
            }).then(() => history.push("/categories"));
          }}
          className="btn btn-primary"
        >
          Edit
        </button>
      ) : (
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();

            const category = {
              label: currentCategory.label,
            };
            createCategory(category).then(() => history.push("/categories"));
          }}
          className="btn btn-primary"
        >
          Create
        </button>
      )}
    </form>
  );
};
