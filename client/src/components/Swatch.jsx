import React from 'react';


const Swatch = ({swatch}) => {
  let hexValue = rgbToHex(swatch);
  return (
    <div class="SwatchContainer">
      <div className="swatch" style={{ backgroundColor: hexValue }}>
      </div>
      <p>
        {hexValue}
      </p>
    </div>
  )
}

export default Swatch;

/* helper functions */
function rgbToHex({ r, g, b }) {
  return `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`
}

function decToHex(n) {
  let hex = n.toString(16)
  return n < 16 ? `0${hex}` : hex
}