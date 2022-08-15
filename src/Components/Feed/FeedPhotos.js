import React, { useEffect } from "react";

import styles from "./FeedPhotos.module.css";

import { PHOTOS_GET } from "../../api";

import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

const FeedPhotos = ({ user, total, page, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};

export default FeedPhotos;
