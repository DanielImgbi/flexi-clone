import React from 'react';
import './Button.css'

interface Prop{
  name :string;
  handleClick: () => void;
}
const Button = ({name, handleClick}:Prop) => {

  return (
    <button className="my-btn px-4 py-2 text-white bg-primary" onClick={handleClick}>{name}</button>
  )
}

export default Button