import React from 'react';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import Button from '../Button/Button';

function ResetGameButton({ setAnswer, setGuessList, setGameStatus, status }) {
  function resetGame() {
    setGameStatus('running');
    setGuessList([]);
    setAnswer(sample(WORDS));
  }
  return (
    <Button onClickHandler={resetGame} status={status}>
      Reset Game
    </Button>
  );
}

export default ResetGameButton;
