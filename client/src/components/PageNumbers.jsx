import React from 'react';

const PageNumbers = ({numOfPages, currentPage, selectPageNumber}) => {
  let pageNumbers = [];
  for (let i = 1; i < numOfPages; i++) {
    console.log(pageNumbers)
    pageNumbers.push(i)
  }

  console.log(pageNumbers)
  return (
    <nav>
      <ul style={{display: 'inline-block'}}>
        {pageNumbers.map( num => {
          return <li onClick={() => selectPageNumber(num)}> {num} </li>
        })}
      </ul>
    </nav>
  )
}

export default PageNumbers;