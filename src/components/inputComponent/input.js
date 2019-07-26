import React from 'react';

function Input(props) {
  return (
    <input className="input-field" type="text" placeholder={props.placeholder} />
  );
}

export default Input;