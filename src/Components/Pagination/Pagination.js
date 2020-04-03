import React from "react";
import "./pagination.css";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <a
          href="#"
          key={number}
          className="num"
          alt=""
          onClick={() => paginate(number)}
        >
          {number}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
