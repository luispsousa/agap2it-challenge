import React from 'react';
import { Link } from 'react-router-dom';

const EpisodesList = ({ episodes }) => {
  return (
    <ul>
      {episodes.map(({ id, name }) => (
        <li key={name}>
          <Link to={`/episode/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default EpisodesList;
