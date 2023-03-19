import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInputForm from '../GuessInputForm/';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuessAdd(tentativeGuess) {
    const nextGuess = [...guessList, tentativeGuess];
    setGuessList(nextGuess);

    if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    } else if (tentativeGuess === answer) {
      setGameStatus('won');
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInputForm handleGuessAdd={handleGuessAdd} gameStatus={gameStatus} />
      {/* {gameStatus === 'won'? gameStatus: gameStatus} */}
      {gameStatus === 'won' ? (
        <WonBanner numberOfGuesses={guessList.length} />
      ) : undefined}
      {gameStatus === 'lost' ? <LostBanner answer={answer} /> : undefined}
    </>
  );
}

export default Game;
