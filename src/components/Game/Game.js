import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessesGrid from '../GuessesGrid/GuessesGrid';
import { EMPTY_GUESS, NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const startingGrid = range(NUM_OF_GUESSES_ALLOWED).map(
    () => EMPTY_GUESS
  );

  const [guesses, setGuesses] = React.useState(startingGrid);
  const [guessCount, setGuessCount] = React.useState(0);

  let correctGuess = guesses[guessCount - 1] === answer;
  let gameOver = guessCount === NUM_OF_GUESSES_ALLOWED;

  const gameFinished = correctGuess || gameOver;

  return (
    <>
      <GuessesGrid>
        {guesses.map(guess => (
          <Guess
            key={crypto.randomUUID()}
            guess={guess}
            answer={answer}
          />
        ))}
      </GuessesGrid>
      {gameFinished ? (
        <Banner happy={correctGuess} geussCount={guessCount} />
      ) : (
        <GuessInput
          guesses={guesses}
          setGuesses={setGuesses}
          guessCount={guessCount}
          setGuessCount={setGuessCount}
        />
      )}
    </>
  );
}

export default Game;
