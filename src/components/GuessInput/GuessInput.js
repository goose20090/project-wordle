import React from 'react';

function GuessInput() {
  return (
    <form class="guess-input-wrapper">
      <label for="guess-input">
        Enter guess:
        <input
          id="guess-input"
          pattern={'[A-Z]{5}'}
          title="Your guess must be 5 characters long. Only letters allowed!"
      </label>
    </form>
  );
}

export default GuessInput;
