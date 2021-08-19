import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "./PostProvider";
import { useHistory, useParams } from "react-router-dom";
import { CategoryContext } from "../categories/CategoryProvider";
import { HumanDate } from "../utils/HumanDate";

export const PostForm = () => {
  const history = useHistory();
  const { posts, createPost, getPosts } = useContext(PostContext);
  const { getAllCategories, categories } = useContext(CategoryContext);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentPost, setCurrentPost] = useState({
    title: "",
    category: 0,
    publication_date: "",
    image_url: "",
    content: "",
    approved: 0,
  });

  /*
        Get categories types on initialization so that the <select>
        element presents category type choices to the user.
    */
  useEffect(() => {
    getAllCategories();
  }, []);

  // EDIT FEATURE FOR LATER
  // useEffect(()=> {
  //     if(game_id) {
  //     setEdit(true)
  //     getGame(game_id).then((res)=> {
  //         const data = res.json()
  //         setCurrentGame({
  //             skill_level: data.skill_level,
  //             number_of_players: data.number_of_players,
  //             name: data.name,
  //             maker: data.maker,
  //             description: data.description,
  //             game_type: data.game_type
  //         })

  //     })

  //     }
  // }, [game_id])

  const changePostState = (event) => {
    const newPostState = { ...currentPost };
    newPostState[event.target.name] = event.target.value;
    setCurrentPost(newPostState);
  };

  return (
    <form className="postForm">
      <h2 className="postForm__title">Title of Post</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Title of post: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentPost.title}
            onChange={changePostState}
          />
        </div>
        <div className="form-group">
          <label htmlFor="post_category">Category:</label>
          <select
            value={currentPost.category}
            name="category"
            id="category"
            className="form-control"
            onChange={changePostState}
          >
            <option value="0">Select article category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="maker">Insert Image URL:</label>
          <input
            type="text"
            name="image_url"
            required
            autoFocus
            className="form-control"
            value={currentPost.image_url}
            onChange={changePostState}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="content">Write your article here:</label>
          <input
            type="text"
            name="content"
            required
            autoFocus
            className="form-control"
            value={currentPost.content}
            onChange={changePostState}
          ></input>
        </div>
      </fieldset>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();
          let timestamp = Date.now();
          const post = {
            title: currentPost.title,
            category: parseInt(currentPost?.category),
            publication_date: timestamp,
            image_url: currentPost.image_url,
            content: currentPost.content,
            approved: "True",
          };

          // Send POST request to your API
          createPost(post).then(() => history.push(`/posts`));
        }}
      >
        Create
      </button>
    </form>
  );
};
