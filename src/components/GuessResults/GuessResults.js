import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../../src/constants';
import { range } from '../../utils';

function GuessResults({ guessList }) {
  const guesses = [...guessList
  ];
  function renderLetters(index) {
    // console.log(!guesses[index]);

    const guessExists = guesses[index];

    if (!guessExists) {
      const emptyCells = range(numOfLettersPerWord).map((letterIndex) => (
        <span className="cell" key={letterIndex}></span>
      ));
      return emptyCells;
    }

    const results = guesses[index].guessResults;
    const lettersWithStatus = results.map((result, index) => (
      <span key={index} className={`cell ${result.status}`}>
        {result.letter}
      </span>
    ));

    return lettersWithStatus;
  }

  const numOfLettersPerWord = 5;
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <p className="guess" key={index}>
            {renderLetters(index)}
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessResults;
