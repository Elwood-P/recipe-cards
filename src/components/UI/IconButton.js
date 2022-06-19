import React from 'react';
import SVG from 'react-inlinesvg';

const IconButton = ({ cName, iconName, clickHandler }) => {
  return (
    <button className={cName} onClick={clickHandler}>
      <SVG src={`/icons/${iconName}.svg`} />
    </button>
  );
};

export default IconButton;
