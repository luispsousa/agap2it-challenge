import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisode } from '../actions';

const EpisodeScreen = ({ match }) => {
  const episodeID = match.params.id;

  const dispatch = useDispatch();

  const episode = useSelector((state) => state.episode);
  const { name, summary, image } = episode;

  useEffect(() => {
    dispatch(fetchEpisode(episodeID));
  }, [dispatch, episodeID]);

  return (
    <div>
      <h1>{name}</h1>
      {image && <img src={image.original} alt={name} />}
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default EpisodeScreen;
