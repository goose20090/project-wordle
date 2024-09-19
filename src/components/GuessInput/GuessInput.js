import React from 'react';

function GuessInput() {
  return (
    <form class="guess-input-wrapper">
      <label for="guess-input">
        Enter guess:
        <input id="guess-input"></input>
      </label>
    </form>
  );
}

export default GuessInput;
