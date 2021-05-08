import React from 'react';
import { Link } from 'react-router-dom';

const EpisodesList = ({ episodes }) => {
  return (
    <ul>
      {episodes.map(({ id, name, image }) => (
        <li key={name}>
          {image && (
            <img src={image.medium} alt={name} width={100} height={50} />
          )}
          <Link to={`/episode/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default EpisodesList;
