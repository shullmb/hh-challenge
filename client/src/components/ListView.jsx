import React from 'react';
import Swatch from './Swatch';
import PageNumbers from './PageNumbers';

const ListView = ({swatches, handleSwatchSelect, currentPage, selectPageNumber}) => {
  let numOfPages = Math.ceil(swatches.length / 12)
  let startingIndex = (currentPage - 1) * 12
  let currentSwatches = Array.from(swatches).splice(startingIndex, 12)
  console.log({swatches: swatches.length, numOfPages, currentPage, startingIndex})
  return (
    <div className="ListView">
      <div className="CatalogContainer">
        {currentSwatches.map( (swatch,i) => <Swatch key={i} swatch={swatch} handleClick={ () => handleSwatchSelect(swatch)}/>)}
      </div>
      <div className="PageNumberContainer">
        <PageNumbers numOfPages={numOfPages} currentPage={currentPage} selectPageNumber={selectPageNumber} />
      </div>
    </div>
  )
}

export default ListView;