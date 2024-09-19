import React from 'react';

function GuessList({ guesses }) {
  return (
    <div>
      {guesses.map(guess => (
        <li key={crypto.randomUUID()} className="guess">
          {guess}
        </li>
      ))}
    </div>
  );
}

export default GuessList;
