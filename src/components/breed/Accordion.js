import React, { useState, useRef } from 'react';

const Accordion = props => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setSign, setSignState] = useState('plus');

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`,
    );
    setSignState(
      setActive === 'active' ? 'plus' : 'minus',
    );
  };

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive} ${setSign}`} onClick={toggleAccordion}>
        {/* <Chevron className={`${setRotate}`} width={23} fill="#FFF" /> */}
        <p className={`accordion__title`}>{props.title}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Accordion;