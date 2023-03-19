import React from 'react';
import Banner from '../Banner/Banner';
import ResetGameButton from '../ResetGameButton/ResetGameButton';

function LostBanner({ answer, setAnswer, setGuessList, setGameStatus }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <ResetGameButton
        setAnswer={setAnswer}
        setGuessList={setGuessList}
        setGameStatus={setGameStatus}
        status={'sad'}
      />
    </Banner>
  );
}

export default LostBanner;
