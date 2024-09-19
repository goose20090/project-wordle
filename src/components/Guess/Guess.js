import React from 'react';

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.split('').map(char => (
        <span className="cell" key={crypto.randomUUID()}>
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
