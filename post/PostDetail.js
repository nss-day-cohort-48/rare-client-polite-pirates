import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostProvider";
import { useHistory, Link } from "react-router-dom";
import "./Post.css";

export const PostDetail = ({ post }) => {
  const { posts } = useContext(PostContext);
  const [post, setPost] = useState({[]});

  const history = useHistory();

  useEffect(() => {
    getLikes().then(() => {
      const foundLike = likedNotebooks.find((liked) => {
        return notebook.id === liked.notebookId;
      });
      if (foundLike) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    });
  }, [isLiked]);

  const addLikedNotebook = () => {
    addLike({
      userId: currentUserId,
      notebookId: notebook.id,
    }).then(() => {
      history.push("/");
    });
  };

  const deleteANotebook = (notebookId) => {
    deleteNotebook(notebookId).then(() => {
      history.push("/");
    });
  };

  const foundLike = likedNotebooks.find((liked) => {
    return notebook.id === liked.notebookId;
  });

  const unlikeNotebook = () => {
    unlike(foundLike.id).then(() => {
      history.push("/");
    });
  };

  return (
    <section className="notebooks">
      <h2 className="notebook__title">{notebook.title}</h2>
      <Link key={notebook.id} to={`/detail/${notebook.id}`}>
        <button className="view__btn">View</button>
      </Link>
      {isLiked ? (
        <button className="unlike-btn" onClick={unlikeNotebook}>
          important
        </button>
      ) : (
        <button className="like-btn" onClick={addLikedNotebook}>
          important?
        </button>
      )}

      <button onClick={() => history.push(`/edit/${notebook.id}`)}>Edit</button>
      <button
        onClick={() => {
          deleteANotebook(notebook.id);
        }}
      >
        Delete
      </button>
    </section>
  );
};
