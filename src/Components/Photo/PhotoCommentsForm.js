import React, { useState } from "react";

import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import { COMMENT_POST } from "../../api";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
