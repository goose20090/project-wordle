import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(guess);
  }
  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">
        Enter guess:
        <input
          id="guess-input"
          pattern={'[A-Z]{5}'}
          title="Your guess must be 5 characters long. Only letters allowed!"
          value={guess}
          onChange={e => setGuess(e.target.value.toUpperCase())}
        ></input>
      </label>
    </form>
  );
}

export default GuessInput;
