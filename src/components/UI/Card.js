import React from 'react';
import './Card.css';

const Card = React.forwardRef(({ children, cName }, cardRef) => (
  <div ref={cardRef} className={`card ${cName}`}>
    {children}
  </div>
));

export default Card;
