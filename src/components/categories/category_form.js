import React, { useRef } from "react"
import { Link } from "react-router-dom"
import "./Auth.css"

export const Category_Form = () => {
    // PROVIDER INFO HERE
    // LOOK AT ID FOR CATEGORIES
    // CONTROLLING STATE HERE
    const [category, setCategory] = useState({})
    const [isLoading, setIsLoading] = useState(true);


    // CONTROL INPUT CHANGE HERE
    const handleControlledInputChange = (event) => {
        const newCategory = { ...categories }
        newCategory[event.target.name] = event.target.value
        //update state
        setCategory(newCategory)
    }

    // SAVE AND EDIT FUNCTION HERE
    const handleSaveCategory = () => {
          //disable the button - no extra clicks
          setIsLoading(true);
          if (id){
            //PUT - update
            updateCategory({
                id: category.id,
                label: category.label
            })
            .then(() => history.push(`/categories/detail/${category.id}`))
          }else {
            //POST - add
            addCategory({
                label: category.label
            })
            .then(() => history.push("/categories"))
          }
        }
        
        // GET CATEGORY LIST & EDIT FEATURE IF CATEGORY BY ID IS IN URL
        useEffect(() => {
          getCategories().then(() => {
            if (category_id){
              getCategoryById(category_id)
              .then(category => {
                  setCategory(category)
                  setIsLoading(false)
              })
            } else {
              setIsLoading(false)
            }
          })
        }, [])

        return (
          <form className="category_form">
            <h2 className="category_form__title">Create a new category</h2>
            <fieldset>
              <div className="form-group">
                <input type="text" id="category_form" name="label" required autoFocus className="form-control"
                placeholder="add text"
                onChange={handleControlledInputChange}
                defaultValue={category.label}/>
              </div>
            </fieldset>
            <button className="btn btn-primary"
              disabled={isLoading}
              onClick={event => {
                event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                handleSaveCategory()
              }}>
            {category_id ? <>Save</> : <>Create</>}</button>
          </form>
        )



      }
  
