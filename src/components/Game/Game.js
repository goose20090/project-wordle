import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { EMPTY_GUESS, NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const startingGrid = range(NUM_OF_GUESSES_ALLOWED).map(
    () => EMPTY_GUESS
  );
  return (
    <>
      <GuessInput guesses={guesses} setGuesses={setGuesses} />
      <GuessList guesses={guesses} />
    </>
  );
}

export default Game;
