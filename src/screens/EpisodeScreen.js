import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { fetchEpisode } from '../actions';

const useStyles = makeStyles(() => ({
  title: {
    margin: '2rem 0 2rem',
  },
  link: {
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
  },
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
  },
  subTitle: {
    marginTop: '2rem',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
}));

const EpisodeScreen = ({ match }) => {
  const episodeID = match.params.id;

  const dispatch = useDispatch();

  const classes = useStyles();

  // Getting and destructuring the Episode info
  const episode = useSelector((state) => state.episode);
  const { name, summary, image, season, airdate } = episode;

  useEffect(() => {
    dispatch(fetchEpisode(episodeID));
  }, [dispatch, episodeID]);

  return (
    <Container maxWidth='lg'>
      <Typography variant='h3' className={classes.title}>
        {name}
      </Typography>
      <Typography variant='h6'>
        <Link to='/' className={classes.link}>
          <ArrowBackIcon />
          Go Back
        </Link>
      </Typography>
      {image && (
        <img src={image.original} alt={name} className={classes.imgFluid} />
      )}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant='subtitle1'>Season: {season}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='subtitle1' align='right'>
            Date: {airdate}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='h5' className={classes.subTitle}>
        In this Episode:
      </Typography>
      <Typography variant='h6' dangerouslySetInnerHTML={{ __html: summary }} />
    </Container>
  );
};

export default EpisodeScreen;
