import React from 'react';

const getIdFromLabel = (label) => {
    switch (label) {
      case '/':
        return 'divide';
      case '*':
        return 'multiply';
      case '-':
        return 'subtract';
      case '+':
        return 'add';
      case '.':
        return 'decimal';
      case '=':
        return 'equals';
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        // For other cases, sanitize the label to handle non-alphanumeric characters
        return label.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    }
  };
  
  
  
  const Button = ({ label, onClick }) => (
    <button
      className={`button ${label === 'Clear' || label === '@jsills92' ? 'large' : ''} ${
        label === 'Clear' ? 'clear' : ''
      } ${label === '@jsills92' ? 'github' : ''}`}
      id={getIdFromLabel(label)} // Assign a sanitized id
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
