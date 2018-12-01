import React from 'react';
import Swatch from './Swatch'

const DetailSwatch = ({ swatch }) => {
  return (
    <div id="DetailSwatch">
      <Swatch swatch={swatch} handleClick={() => console.log('back to Catalog View')}/>      
    </div>
  )
}

export default DetailSwatch;