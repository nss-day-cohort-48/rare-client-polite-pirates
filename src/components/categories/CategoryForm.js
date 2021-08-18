import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { CategoryContext } from "./CategoryProvider";

export const CategoryForm = () => {
  // PROVIDER INFO HERE
  const {
    categories,
    createCategory,
    getAllCategories,
    updateCategory,
  } = useContext(CategoryContext);

  const [category, setCategory] = useState({ label: "" });
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const { categoryId } = useParams();

  // CONTROL INPUT CHANGE HERE
  const handleControlledInputChange = (event) => {
    const newCategory = { ...categories };
    newCategory[event.target.name] = event.target.value;
    //update state
    setCategory(newCategory);
  };

  // SAVE FUNCTION HERE
  const handleSaveCategory = () => {
    //disable the button - no extra clicks
    setIsLoading(true);
    //PUT - update category
    if (categoryId) {
      updateCategory({
        id: category.id,
        label: category.label,
      }).then(() => history.push(`/category/detail/${category.id}`));
    } else {
      //POST - add
      createCategory({
        label: category.label,
      }).then(() => history.push("/categories"));
      setCategory({ label: "" });
    }
  };

  // GET CATEGORY LIST
  useEffect(() => {
    getAllCategories();
    setIsLoading(false);
  }, []);

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
            onChange={handleControlledInputChange}
            value={category.label}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(event) => {
          handleSaveCategory();
          event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
        }}
      >
        Create
      </button>
    </form>
  );
};
