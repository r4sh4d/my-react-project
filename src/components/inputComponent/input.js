import React from 'react';

function Input(props) {
  return (
    <input className="search__input" type="text" placeholder={props.placeholder} />
  );
}

export default Input;