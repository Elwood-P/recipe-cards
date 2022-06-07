import React from 'react';

const InstructionsList = ({instructions}) => {
  return (
    <ol>
      {instructions.map((instruction) => {
        return <li key={instruction.id}>{instruction.text}</li>;
      })}
    </ol>
  );
};

export default InstructionsList;
