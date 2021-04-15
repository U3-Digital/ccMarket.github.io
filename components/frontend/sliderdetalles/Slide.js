import React from 'react';

const Slide = ({ index, image, click }) => {
  return (
    <div className="col-2" onClick={() => click(index)}>
      <img src={image} style={{height: '10vh'}}/>
    </div>
  );
};

export default Slide;
