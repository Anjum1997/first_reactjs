
import React from 'react';

function Pagination({ currentPage, totalPosts, postsPerPage, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{textAlign:'center',paddingTop:"15px"}}>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {pageNumbers.map(number => (
        <button key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
