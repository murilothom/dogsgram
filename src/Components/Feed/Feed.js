import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos, resetFeedState } from "../../store/feed";
import PropTypes from 'prop-types';

import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";

const Feed = ({ user }) => {
  const { infinite, loading, list, error } = useSelector(state => state.feed)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetFeedState())
    dispatch(loadNewPhotos({ user, total: 6 }))
  }, [dispatch, user])

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && wait === false) {
          dispatch(loadNewPhotos({ user, total: 6 }))
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite, dispatch, user]);

  return (
    <div>
      <FeedModal />
      {loading && <Loading />}
      {list.length > 0 && <FeedPhotos />}
      {error && <Error error={error} />}
      
      {!infinite && (
        <p style={{
          textAlign: 'center',
          padding: '2rem 0 3rem 0',
          color: '#888',
        }}>
          Não existem mais postagens.
        </p>
      )}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
