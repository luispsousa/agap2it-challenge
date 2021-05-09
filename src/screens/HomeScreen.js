import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fetchShow, fetchEpisodes } from '../actions';
import EpisodesList from '../components/EpisodesList';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    margin: '2rem 0 3rem',
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
            <EpisodesList episodes={episodes} />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default HomeScreen;
