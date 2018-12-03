import React from 'react';
import Swatch from './Swatch'

const DetailSwatch = ({ swatch }) => {
  return (
    <div id="DetailSwatch">
      <Swatch swatch={swatch} />      
    </div>
  )
}

export default DetailSwatch;