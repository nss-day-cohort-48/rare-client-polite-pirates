import React, { useState, useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"
import { Category } from "./Category"
import "./Category.css"

export const CategoryList = ({ history }) => {
    const { getCategories, categories, searchTerms } = useContext(CategoryContext)

    const [filteredCategories, setFiltered] = useState([])


    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div style={{ marginTop: "2rem" }}>
            <div className="Categories">
                {
                    categories.map(category => <Category key={category.id} category={category} />)
                }
            </div>
        </div>
    )
}