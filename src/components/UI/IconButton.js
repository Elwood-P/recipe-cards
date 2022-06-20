import React from 'react';
import './IconButton.css';
import SVG from 'react-inlinesvg';

const IconButton = ({ cName, iconName, clickHandler }) => {
  return (
    <button className={`icon-button ${cName}`} onClick={clickHandler}>
      <SVG src={`/icons/${iconName}.svg`} />
    </button>
  );
};

export default IconButton;
