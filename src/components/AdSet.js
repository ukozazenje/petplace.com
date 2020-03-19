import React from 'react';
import useDfpSlot from './useDfpSlot';

const AdSet = () => {
  useDfpSlot({
    path: '/1004510/ttg_left_160_600',
    size: [160, 600],
    id: 'div-gpt-ad-1579271824039-0',
  });

  return (
    <div
      id="div-gpt-ad-1579271824039-0"
      // style={{width: '160px', height: '600px'}}
    />
  );
};

export default AdSet;