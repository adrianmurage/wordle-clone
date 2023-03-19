import React from 'react';
import Banner from '../Banner/Banner';
import ResetGameButton from '../ResetGameButton/ResetGameButton';

function WonBanner({
  numberOfGuesses,
  setAnswer,
  setGuessList,
  setGameStatus,
}) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in {` `}
        <strong>
          {numberOfGuesses === 1 ? '1 guess' : `${numberOfGuesses} guesses`}
        </strong>
      </p>
      <ResetGameButton
        setAnswer={setAnswer}
        setGuessList={setGuessList}
        setGameStatus={setGameStatus}
        status={'happy'}
      />
    </Banner>
  );
}

export default WonBanner;
