import React from 'react';
import './Button.css';

const Button = ({ fetchImages }) => (
  <button type="button" className = 'Button' onClick={fetchImages}>
    Load more...
  </button>
);

export default Button;