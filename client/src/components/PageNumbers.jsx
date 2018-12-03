import React from 'react';

const PageNumbers = ({numOfPages, currentPage, selectPageNumber}) => {
  let pageNumbers = [];
  for (let i = 1; i < numOfPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
        {pageNumbers.map( num => {
          let numClass = num === currentPage ? 'ActivePage' : ''; 
          return <p key={`page${num}`} className={numClass} onClick={() => selectPageNumber(num)}> {num} </p>
        })}
    </nav>
  )
}

export default PageNumbers;