import React from 'react';
import Swatch from './Swatch';

const CatalogContainer = ({swatches}) => {
  return (
    <div className="CatalogContainer">
      {swatches.map( swatch => <Swatch swatch={swatch} />)}
    </div>
  )
}

export default CatalogContainer;