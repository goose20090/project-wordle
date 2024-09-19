import React from 'react';

function GuessInput({ guesses, setGuesses, setGuessNum, guessNum }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    let newGuessesArr = [...guesses];
    newGuessesArr[guessNum] = guess;

    setGuesses(newGuessesArr);
    setGuess('');
    setGuessNum(guessNum + 1);
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">
        Enter guess:
        <input
          id="guess-input"
          pattern={'[A-Z]{5}'}
          required
          title="Your guess must be 5 characters long. Only letters allowed!"
          value={guess}
          onChange={e => setGuess(e.target.value.toUpperCase())}
        ></input>
      </label>
    </form>
  );
}

export default GuessInput;
