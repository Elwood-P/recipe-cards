import React from 'react';

const InstructionsList = ({instructions}) => {
  return (
    <ol>
      {instructions.map((instruction) => {
        return <li key={'InstructionListItem' + instruction.id}>{instruction.text}</li>;
      })}
    </ol>
  );
};

export default InstructionsList;
