import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../store/photo";

import styles from "./FeedModal.module.css";

import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";


const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading } = useSelector(state => state.photo)
  const dispatch = useDispatch()

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  useEffect(() => {
    dispatch(fetchPhoto(photo.id))
  }, [dispatch, photo.id]);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
