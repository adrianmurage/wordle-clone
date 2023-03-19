import React from 'react';

function Button({ children, onClickHandler, status }) {
  return (
    <button className={`reset-button ${status}`} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
