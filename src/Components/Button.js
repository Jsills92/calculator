import React from 'react';

const getIdFromLabel = (label) => {
    // Convert spaces or special characters to dashes, and ensure it's a valid ID
    return label.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
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
