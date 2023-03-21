import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInputForm from '../GuessInputForm/';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });
  console.info({ answer });

  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuessAdd(tentativeGuess) {
    const nextGuess = [...guessList, tentativeGuess];
    setGuessList(nextGuess);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInputForm handleGuessAdd={handleGuessAdd} gameStatus={gameStatus} />

      {gameStatus === 'won' ? (
        <WonBanner
          numberOfGuesses={guessList.length}
          setAnswer={setAnswer}
          setGuessList={setGuessList}
          setGameStatus={setGameStatus}
        />
      ) : undefined}

      {gameStatus === 'lost' ? (
        <LostBanner
          answer={answer}
          setAnswer={setAnswer}
          setGuessList={setGuessList}
          setGameStatus={setGameStatus}
        />
      ) : undefined}
    </>
  );
}

export default Game;
