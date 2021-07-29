import React, { useContext, useEffect, useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { CommentContext } from "./CommentProvider"

export const CommentForm = () => {
    const history = useHistory()
    return (
        <form className="category_form">
            <h2 className="category_form__title">New Comment</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="category_form" name="label" required autoFocus className="form-control"
                        placeholder="What would you like to say?" />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                // disabled={isLoading}
                onClick={event => {
                    // handleSaveCategory()
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    history.push("/posts")
                }}>Save Comment</button>
        </form>
    )
}