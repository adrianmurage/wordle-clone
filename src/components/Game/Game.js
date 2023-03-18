import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInputForm from '../GuessInputForm/';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([
    // { id: 'b190ad87-0bdf-4012-a78c-2364746519ed', userGuess: 'ADRIA' },
  ]);

  const numberOfGuesses = guessList.length;
  let lastGuess = undefined;
  if (numberOfGuesses > 0) {
    lastGuess = guessList[numberOfGuesses - 1].userGuess;
    console.log(lastGuess);
  }

  function handleGuessAdd(userGuess) {
    const guessResults = checkGuess(userGuess, answer);
    const nextGuess = [
      ...guessList,
      { id: crypto.randomUUID(), userGuess, guessResults },
    ];
    setGuessList(nextGuess);
  }

  function handleWin(userGuess, numOfGuesses) {
    if (userGuess === null) {
      return;
    }
    return userGuess === answer ? (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in {` `}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      </div>
    ) : undefined;
  }

  function handleLoose(numberOfGuesses) {
    if (numberOfGuesses >= 6) {
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      );
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInputForm handleGuessAdd={handleGuessAdd} handleWin={handleWin} />
      {handleWin(lastGuess, numberOfGuesses)}
      {handleLoose(numberOfGuesses)}
    </>
  );
}

export default Game;
