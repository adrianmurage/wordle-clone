import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter ? letter : undefined}</span>;
}

function Guess({ value, answer }) {
  const results = checkGuess(value, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={value ? results[num].letter : undefined}
            status={value ? results[num].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default Guess;
