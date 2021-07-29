import React from "react"
import "./Category.css"
import { Link, useHistory } from "react-router-dom"

// const history = useHistory() 

export const Category = ({ category }) => (
    <section className="category">
        {/* This code is not finished it is for update but needs code inside of history.push to push it to a pop up box to edit */}
        {/* <button onClick={() => {
            history.push()
        }}>Edit</button> */}
        <h3 className="category__name">
            <Link to={`/categories/${category.id}`}>
                {category.label}
            </Link>
        </h3>
    </section>
)