import React from 'react';

function Cell({ charObj }) {
  const emptyChar = charObj.letter === ' ';

  return (
    <span className={`cell ${emptyChar ? null : charObj.status}`}>
      {charObj.letter}
    </span>
  );
}

export default Cell;
