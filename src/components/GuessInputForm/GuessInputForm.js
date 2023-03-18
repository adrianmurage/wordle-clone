import React from 'react';

function GuessInputForm({ handleGuessAdd, isDisabled }) {
  const [userGuess, setUserGuess] = React.useState('');

  function handleNewGuess(event) {
    event.preventDefault();
    handleGuessAdd(userGuess);
    // console.log({ userGuess });
    setUserGuess('');
  }

  // console.log(isDisabled);

  return (
    <form className="guess-input-wrapper" onSubmit={handleNewGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isDisabled}
        required
        id="guess-input"
        type="text"
        value={userGuess}
        onChange={(event) => {
          const nextUserGuess = event.target.value.toUpperCase();
          setUserGuess(nextUserGuess);
        }}
        pattern="\w{5,5}"
        title="The word must be a 5 letter word"
      />
    </form>
  );
}

export default GuessInputForm;
