import React from 'react';
import Cell from '../Cell/Cell';

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.split('').map(char => (
        <Cell char={char} key={crypto.randomUUID()} />
      ))}
    </p>
  );
}

export default Guess;
