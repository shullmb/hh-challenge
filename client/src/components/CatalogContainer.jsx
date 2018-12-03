import React from 'react';
import Swatch from './Swatch';
import PageNumbers from './PageNumbers';

const CatalogContainer = ({swatches, handleSwatchSelect, currentPage, selectPageNumber}) => {
  let numOfPages = Math.ceil(swatches.length / 12)
  let startingIndex = (currentPage - 1) * 12
  let currentSwatches = swatches.splice(startingIndex, 12)
  return (
    <div className="CatalogContainer">
      {currentSwatches.map( (swatch,i) => <Swatch key={i} swatch={swatch} handleClick={ () => handleSwatchSelect(swatch)}/>)}
      <PageNumbers numOfPages={numOfPages} currentPage={currentPage} selectPageNumber={selectPageNumber} />
    </div>
  )
}

export default CatalogContainer;