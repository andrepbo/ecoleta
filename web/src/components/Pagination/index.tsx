import React from 'react';

import './styles.css';

interface Props {
  pointsPerPage: number,
  totalPoints: number,
  paginate: any
}

const Pagination = ({ pointsPerPage, totalPoints, paginate }: Props) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPoints / pointsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        { pageNumbers.map(number => (
          <li key={number} onClick={() => paginate(number)}>
            {number}
          </li>
        )) }
      </ul>
    </nav>
  )
}

export default Pagination;
