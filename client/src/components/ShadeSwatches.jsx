import React from 'react';
import Swatch from './Swatch';

const ShadeSwatches = ({ swatch, handleSwatchSelect }) => {
  const shadeRatios = [ (1/4), (1/2), (3/4), (6/5)]
  let shades = shadeRatios.map( ratio => {
    return {
      r: calculateShade(swatch.r,ratio),
      g: calculateShade(swatch.g,ratio),
      b: calculateShade(swatch.b,ratio)
    }
  })
  return (
    <div id="ShadeSwatches">
      {shades.map(shade => <Swatch key={shade.r} swatch={shade} /> ) }
    </div>
  )
}

export default ShadeSwatches;

function calculateShade(value, ratio) {
  return Math.ceil(value * ratio)
}