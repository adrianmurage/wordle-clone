import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../../src/constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResults({ guessList, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess key={index} value={guessList[index]} answer={answer}/>
        ))}
      </div>
    </>
  );
}

export default GuessResults;
