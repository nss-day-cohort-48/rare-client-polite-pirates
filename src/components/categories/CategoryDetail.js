import React from "react"
import "./Category.css"
import { Link } from "react-router-dom"

export const Category = ({ category }) => (
    <section className="category">
        <h3 className="category__name">
            <Link to={`/categories/${category.id}`}>
                {category.label}
            </Link>
        </h3>
    </section>
)