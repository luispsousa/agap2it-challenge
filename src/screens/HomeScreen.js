import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fetchShow, fetchEpisodes } from '../actions';
import EpisodesList from '../components/EpisodesList';
import Pagination from '../components/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    margin: '1rem 0',
  },

  infoContainer: {
    marginTop: '3rem',
  },
  imgFluid: {
    maxWidth: '100%',
    maxHeight: '500px',
    height: 'auto',
  },
}));

const HomeScreen = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage] = useState(10);

  // Getting and destructuring the Show info
  const show = useSelector((state) => state.show);
  const { name, summary, image } = show;

  // Getting the Episodes list
  const episodes = useSelector((state) => state.episodes);

  // Fetching the Show info and the Episodes when the component mounts
  useEffect(() => {
    dispatch(fetchShow(6771));
    dispatch(fetchEpisodes(6771));
  }, [dispatch]);

  // Calculating index of the first and last episodes to get the episodes for each page
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodes.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  );

  // Gets the current page number from the Pagination component
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className={classes.root}>
      <Container maxWidth='lg'>
        <Typography variant='h3' className={classes.title}>
          {name}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className={classes.imageContainer}>
            {image && (
              <img
                src={image.original}
                alt={name}
                className={classes.imgFluid}
              />
            )}
          </Grid>
          <Grid item xs={12} md={8} className={classes.infoContainer}>
            <Typography
              variant='h6'
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h4'>Episodes: </Typography>
            <EpisodesList episodes={currentEpisodes} />
            <Pagination
              episodesPerPage={episodesPerPage}
              totalEpisodes={episodes.length}
              paginate={paginate}
            />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default HomeScreen;
