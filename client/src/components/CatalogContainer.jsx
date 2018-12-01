import React from 'react';
import Swatch from './Swatch';

const CatalogContainer = ({swatches, handleSwatchSelect}) => {
  return (
    <div className="CatalogContainer">
      {swatches.map( (swatch,i) => <Swatch key={i} swatch={swatch} handleClick={ () => handleSwatchSelect(swatch)}/>)}
    </div>
  )
}

export default CatalogContainer;