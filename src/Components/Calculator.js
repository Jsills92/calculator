import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [expression, setExpression] = useState(''); // The full expression being built

  const handleButtonClick = (label) => {
    if (!isNaN(label) || label === '.') {
      // Handle numbers and decimals
      if (label === '.' && displayValue.includes('.')) return; // Prevent multiple decimals
      setDisplayValue((prev) => (prev === '0' ? label : prev + label));
      setExpression((prev) => (prev === '0' ? label : prev + label));
    } else if (['+', '-', '*', '/'].includes(label)) {
      // Handle operators
      const lastChar = expression.slice(-1);
      const secondLastChar = expression.slice(-2, -1);

      // Remove unnecessary operators if there are three or more consecutive ones
      if (['+', '-', '*', '/'].includes(lastChar)) {
        if (['+', '-', '*', '/'].includes(secondLastChar)) {
          setExpression((prev) => prev.slice(0, -2) + label); // Remove last two operators
        } else if (label === '-' && (expression === '' || ['+', '-', '*', '/'].includes(lastChar))) {
          setExpression((prev) => prev + label); // Treat as a negative sign
        } else {
          setExpression((prev) => prev.slice(0, -1) + label); // Replace the last operator
        }
      } else {
        setExpression((prev) => prev + label); // Add operator to expression
      }

      setDisplayValue(label); // Update the display
    } else if (label === '=') {
      // Handle "="
      if (expression) {
        try {
          const cleanedExpression = expression.replace(/(\*|\/|\+|)+$/, ''); // Remove trailing operators
          const result = evaluate(cleanedExpression); // Evaluate the cleaned expression
          setDisplayValue(result.toString());
          setExpression(result.toString()); // Reset expression to the result
        } catch (error) {
          setDisplayValue('Error');
          setExpression(''); // Clear the expression on error
        }
      }
    } else if (label === 'Clear') {
      // Handle clear
      setDisplayValue('0');
      setExpression('');
    }
  };

  const handleGithubClick = () => {
    window.open('https://github.com/jsills92', '_blank');
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        <Button label="7" id="seven" onClick={handleButtonClick} />
        <Button label="8" id="eight" onClick={handleButtonClick} />
        <Button label="9" id="nine" onClick={handleButtonClick} />
        <Button label="/" id="divide" onClick={handleButtonClick} />
        
        <Button label="4" id="four" onClick={handleButtonClick} />
        <Button label="5" id="five" onClick={handleButtonClick} />
        <Button label="6" id="six" onClick={handleButtonClick} />
        <Button label="*" id="multiply" onClick={handleButtonClick} />
        
        <Button label="1" id="one" onClick={handleButtonClick} />
        <Button label="2" id="two" onClick={handleButtonClick} />
        <Button label="3" id="three" onClick={handleButtonClick} />
        <Button label="-" id="subtract" onClick={handleButtonClick} />
        
        <Button label="0" id="zero" onClick={handleButtonClick} />
        <Button label="." id="decimal" onClick={handleButtonClick} />
        <Button label="=" id="equals" onClick={handleButtonClick} />
        <Button label="+" id="add" onClick={handleButtonClick} />
        
        <Button label="Clear" id="button-clear" onClick={handleButtonClick} />
        <Button label="@jsills92" id="button-github" onClick={handleGithubClick} />
      </div>
    </div>
  );
};

export default Calculator;
