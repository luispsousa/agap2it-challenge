import React from 'react';

const Pagination = ({ episodesPerPage, totalEpisodes, paginate }) => {
  const pageNumbers = [];

  // Populating an array to have the page numbers
  for (let i = 1; i <= Math.ceil(totalEpisodes / episodesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
