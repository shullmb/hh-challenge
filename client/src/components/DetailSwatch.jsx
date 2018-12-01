import React from 'react';
import Swatch from './Swatch'

const DetailSwatch = ({ swatch, backToCatalog }) => {
  return (
    <div id="DetailSwatch">
      <Swatch swatch={swatch} handleClick={backToCatalog}/>      
    </div>
  )
}

export default DetailSwatch;