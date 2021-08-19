import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { TagContext } from "./TagProvider";

export const TagForm = () => {
    // PROVIDER INFO HERE
    const {
        tags,
        createTag,
        getAllTags,
        updateTag,
    } = useContext(TagContext);
    // LOOK AT ID FOR TAGS
    // CONTROLLING STATE HERE
    const [tag, setTag] = useState({ label: "" });
    const [isLoading, setIsLoading] = useState(true);

    const history = useHistory();
    const { tagId } = useParams();

    // CONTROL INPUT CHANGE HERE
    const handleControlledInputChange = (event) => {
        const newTag = { ...tags };
        newTag[event.target.name] = event.target.value;
        //update state
        setTag(newTag);
    };

    // SAVE FUNCTION HERE
    const handleSaveTag = () => {
        //disable the button - no extra clicks
        setIsLoading(true);
        //PUT - update tag
        if (tagId) {
            updateTag({
                id: tag.id,
                label: tag.label,
            }).then(() => history.push(`/tag/detail/${tag.id}`));
        } else {
            //POST - create
            createTag({
                label: tag.label,
            }).then(() => history.push("/tags"));
            setTag({ label: "" });
        }
    };

    // GET TAG LIST
    useEffect(() => {
        getAllTags();
        setIsLoading(false);
    }, []);

    return (
        <form className="tag_form">
            <h2 className="tag_form__title">Create a new tag</h2>
            <fieldset>
                <div className="form-group">
                    <input
                        type="text"
                        id="tag_form"
                        name="label"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="add text"
                        onChange={handleControlledInputChange}
                        value={tag.label}
                    />
                </div>
            </fieldset>
            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={(event) => {
                    handleSaveTag();
                    event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
                }}
            >
                Create
            </button>
        </form>
    );
};
