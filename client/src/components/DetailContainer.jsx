import React from 'react';
import DetailSwatch from './DetailSwatch';
import ShadeSwatches from './ShadeSwatches';

const DetailContainer = props => {
  return (
    <div id="DetailContainer">
      <DetailSwatch {...props} />
      <ShadeSwatches {...props} />
    </div>
  )
}

export default DetailContainer;