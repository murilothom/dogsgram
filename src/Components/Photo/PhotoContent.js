import React from "react";
import { Link } from "react-router-dom";

import styles from "./PhotoContent.module.css";

import PhotoComments from "./PhotoComments";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade > 1 ? (
                <span>{photo.idade} anos</span>
              ) : (
                <span>{photo.idade} ano</span>
              )}
            </li>
          </ul>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </div>
  );
};

export default PhotoContent;
