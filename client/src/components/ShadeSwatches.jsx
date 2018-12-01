import React from 'react';
import Swatch from './Swatch';

const ShadeSwatches = ({ swatch }) => {
  return (
    <div id="ShadeSwatches">
      <Swatch swatch={swatch} />      
    </div>
  )
}

export default ShadeSwatches;