import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import GuessesGrid from '../GuessesGrid/GuessesGrid';
import { EMPTY_GUESS, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const startingGrid = range(NUM_OF_GUESSES_ALLOWED).map(
    () => EMPTY_GUESS
  );

  const [guesses, setGuesses] = React.useState(startingGrid);
  const [guessNum, setGuessNum] = React.useState(0);

  return (
    <>
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        guessNum={guessNum}
        setGuessNum={setGuessNum}
      />
      <GuessList guesses={guesses} />
    </>
  );
}

export default Game;
