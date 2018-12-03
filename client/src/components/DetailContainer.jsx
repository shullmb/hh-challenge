import React from 'react';
import DetailSwatch from './DetailSwatch';
import ShadeSwatches from './ShadeSwatches';
import Button from './Button';

const DetailContainer = props => {
  return (
    <div id="DetailContainer">
      <DetailSwatch {...props} />
      <ShadeSwatches {...props} />
      <div id="ClearButton">
        <Button name={"Clear"} onClick={props.backToCatalog} />
      </div>
    </div>
  )
}

export default DetailContainer;