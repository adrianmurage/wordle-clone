import React from 'react';

// text input should be controlled by react state
// when the form is submitted:
//    - the entered value should be logged to the console
//    - the input should be reset to an empty string
// the user input should be converted to UPPERCASE
// the user input should have a minimum and maximum length of 5
function GuessInputForm() {
  const [userGuess, setUserGuess] = React.useState('');

  function handleNewGuess(event) {
    event.preventDefault();
    console.log({ userGuess });
    setUserGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleNewGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
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
