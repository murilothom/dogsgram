import React, { useContext, useState, useEffect } from "react";

import styles from "./PhotoComments.module.css";

import PhotoCommentsForm from "./PhotoCommentsForm";
import { UserContext } from "../../Context/UserContext";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);

  if (!comments) return null;
  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm setComments={setComments} id={props.id} />}
    </>
  );
};

export default PhotoComments;
