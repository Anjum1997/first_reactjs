import React from 'react';

function Pagination({currentPage, totalUsers, usersPerPage, setCurrentPage}) {
  const pageNumbers = [];

  for (let i = 1; i<= Math.ceil(totalUsers/usersPerPage);i++) {
   pageNumbers.push(i);
  }

  return (
    <div style={{ textAlign: 'center', paddingTop: '6px' }}>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {pageNumbers.map(number => (
        <button  key={number} onClick={() => setCurrentPage(number)}
          style={{ backgroundColor: currentPage === number ? 'blue' : 'white', 
          color: currentPage === number ? 'white' : 'black' }}
        >  {number} </button>
      ))}
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
