import React from 'react';

const Pagination = ({ episodesPerPage, totalEpisodes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEpisodes / episodesPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

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
