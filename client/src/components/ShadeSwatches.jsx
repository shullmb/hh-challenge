import React from 'react';
import Swatch from './Swatch';

const ShadeSwatches = ({ swatch, handleSwatchSelect }) => {
  const shadeRatios = [ (1/8),(1/4), (1/2), (3/4)]
  let shades = shadeRatios.map( ratio => {
    return {
      r: swatch.r * ratio,
      g: swatch.g * ratio,
      b: swatch.b * ratio
    }
  })
  console.log(shades)
  return (
    <div id="ShadeSwatches">
      {shades.map(shade => <Swatch key={shade.r} swatch={shade} /> ) }
    </div>
  )
}

export default ShadeSwatches;