import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShow, fetchEpisodes } from '../actions';

import EpisodesList from '../components/EpisodesList';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.show);
  const { name, summary, image } = show;

  const episodes = useSelector((state) => state.episodes);

  useEffect(() => {
    dispatch(fetchShow(6771));
    dispatch(fetchEpisodes(6771));
  }, [dispatch]);

  return (
    <main>
      <div>{image && <img src={image.medium} alt={name} />}</div>
      <div>
        <h1>{name}</h1>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <EpisodesList episodes={episodes} />
    </main>
  );
};

export default HomeScreen;
