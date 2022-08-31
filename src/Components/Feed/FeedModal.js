import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/user_interface";
import { useCloseModalOnKeyDownEsc } from "../../Hooks/useCloseModalOnKeyDownEsc";

import styles from "./FeedModal.module.css";

import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";


const FeedModal = () => {
  useCloseModalOnKeyDownEsc()
  const { modal } = useSelector(state => state.user_interface)
  const { data, error, loading } = useSelector(state => state.photo)
  const dispatch = useDispatch()

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) dispatch(closeModal())
  }

  useEffect(() => {
    dispatch(closeModal())
  }, [dispatch])

  if(!modal) return null
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
