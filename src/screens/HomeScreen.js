import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShow, fetchEpisodes } from '../actions';
import EpisodesList from '../components/EpisodesList';
import Pagination from '../components/Pagination';

const HomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage] = useState(10);

  const dispatch = useDispatch();

  const show = useSelector((state) => state.show);
  const { name, summary, image } = show;

  const episodes = useSelector((state) => state.episodes);

  useEffect(() => {
    dispatch(fetchShow(6771));
    dispatch(fetchEpisodes(6771));
  }, [dispatch]);

  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodes.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const Container = styled.div`
    display: flex;
  `;

  const Description = styled.div`
    padding-left: 10px;
  `;

  return (
    <main>
      <h1>{name}</h1>
      <Container>
        {image && <img src={image.medium} alt={name} />}
        <Description dangerouslySetInnerHTML={{ __html: summary }} />
      </Container>
      <h3>Episodes: </h3>
      <EpisodesList episodes={currentEpisodes} />
      <Pagination
        episodesPerPage={episodesPerPage}
        totalEpisodes={episodes.length}
        paginate={paginate}
      />
    </main>
  );
};

export default HomeScreen;
