import React from 'react';

function GuessInputForm({ handleGuessAdd, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleNewGuess(event) {
    event.preventDefault();
    handleGuessAdd(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleNewGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus === 'running' ? false : true}
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const nextTentativeGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextTentativeGuess);
        }}
        pattern="\w{5,5}"
        title="The word must be a 5 letter word"
      />
    </form>
  );
}

export default GuessInputForm;
