import React from 'react';


const Swatch = props => {
  let hexValue = rgbToHex(props.swatch);
  return (
    <div className="SwatchContainer" onClick={props.handleClick}>
      <div className="SwatchColorBlock" style={{ backgroundColor: hexValue }}>
      </div>
      <div className="SwatchTextBlock">
        <p>
          {hexValue}
        </p>
      </div>
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