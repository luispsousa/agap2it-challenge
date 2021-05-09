import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: {
    margin: '2rem 0 2rem 0',
  },
}));

const EpisodesList = ({ episodes }) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Typography variant='h4' className={classes.title}>
        Episodes:{' '}
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell align='left'>Season&nbsp;</TableCell>
              <TableCell align='left'>Date&nbsp;</TableCell>
              <TableCell align='left'>Name&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? episodes.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : episodes
            ).map(({ id, name, number, season, airdate }) => (
              <TableRow key={name}>
                <TableCell component='th' scope='row'>
                  {number}
                </TableCell>
                <TableCell align='left'>{season}</TableCell>
                <TableCell align='left'>{airdate}</TableCell>
                <TableCell align='left'>
                  <Link to={`/episode/${id}`}>{name}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={episodes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default EpisodesList;
