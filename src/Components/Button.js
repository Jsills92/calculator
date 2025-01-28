import React from 'react';

const Button = ({ label, onClick }) => (
  <button
    className={`button ${label === 'Clear' || label === '@jsills92' ? 'large' : ''} ${
      label === 'Clear' ? 'clear' : ''
    } ${label === '@jsills92' ? 'github' : ''}`}
    id={label}
    onClick={() => {
      if (label === '@jsills92') {
        window.open('https://github.com/jsills92', '_blank');
      } else {
        onClick(label);
      }
    }}
  >
    {label}
  </button>
);

export default Button;
