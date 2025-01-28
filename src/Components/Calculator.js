import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (label) => {
    if (label === '=') {
      // We'll handle equals logic later
      return;
    }
    setDisplayValue((prevValue) => (prevValue === '0' ? label : prevValue + label));
  };

  const handleClearClick = () => {
    setDisplayValue('0'); // Reset the display to '0'
  };

  const handleGithubClick = () => {
    window.open('https://github.com/jsills92', '_blank'); // Open GitHub in a new tab
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        {['7', '8', '9', '/'].map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
        {['4', '5', '6', '*'].map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
        {['1', '2', '3', '-'].map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
        {['0', '.', '=', '+'].map((label) => (
          <Button key={label} label={label} onClick={handleButtonClick} />
        ))}
        <Button label="Clear" onClick={handleClearClick} />
        <Button label="@jsills92" onClick={handleGithubClick} />
      </div>
    </div>
  );
};

export default Calculator;
