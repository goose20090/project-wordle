import React from 'react';
import Cell from '../Cell/Cell';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  let charObjArr = checkGuess(guess, answer);

  return (
    <p className="guess">
      {charObjArr.map(charObj => (
        <Cell charObj={charObj} key={crypto.randomUUID()} />
      ))}
    </p>
  );
}

export default Guess;
