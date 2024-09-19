import React from 'react';

function Banner({ happy, guessNum }) {
  let bannerMood = happy ? 'happy' : 'sad';
  return (
    <div className={`${bannerMood} banner`}>
      <p>
        {happy ? (
          <>
            {' '}
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guessNum} guesses</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default Banner;
