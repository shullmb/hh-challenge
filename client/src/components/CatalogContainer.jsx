import React from 'react';

const CatalogContainer = ({swatches}) => {

    let hexValues = swatches.map( swatch => {
    let hex = rgbToHex(swatch);
    
    return <div className="swatch" style={{backgroundColor: hex}}>{hex}</div>
  })
  return (
    <div className="CatalogContainer">
      {hexValues}
    </div>
  )
}

function rgbToHex({ r, g, b }) {
  return `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`
}

function decToHex(n) {
  let hex = n.toString(16)
  return n < 16 ? `0${hex}` : hex
}

export default CatalogContainer;