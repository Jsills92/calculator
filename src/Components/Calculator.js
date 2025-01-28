import React, { useState } from 'react'; // Import should be at the top
import Button from './Button'; // Import other components at the top
import Display from './Display';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null); // Previous number
  const [operator, setOperator] = useState(null); // Current operator

  const handleButtonClick = (label) => {
    if (!isNaN(label) || label === '.') {
      // If it's a number or decimal, update the display
      if (label === '.' && displayValue.includes('.')) return; // Prevent multiple decimals
      setDisplayValue((prev) => (prev === '0' ? label : prev + label));
    } else if (['+', '-', '*', '/'].includes(label)) {
      // Handle operator buttons
      if (displayValue === '' && operator) {
        // If no number entered, replace the operator
        setDisplayValue(prev => prev.slice(0, -1) + label);
      } else {
        setPrevValue(displayValue); // Store the current value
        setOperator(label); // Store the operator
        setDisplayValue(''); // Clear display for the next input
      }
    } else if (label === '=') {
      // Perform the calculation
      if (prevValue && operator && displayValue) {
        const result = calculate(Number(prevValue), Number(displayValue), operator);
        setDisplayValue(result.toString());
        setPrevValue(null); // Reset previous value
        setOperator(null); // Reset operator
      } else {
        setDisplayValue('Error'); // If there's an invalid state, show an error
      }
    }
  };
  

  const handleClearClick = () => {
    setDisplayValue('0'); // Reset the display to '0'
    setPrevValue(null);
    setOperator(null);
  };

  const handleGithubClick = () => {
    window.open('https://github.com/jsills92', '_blank'); // Open GitHub in a new tab
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : 'Error'; // Handle division by zero
      default:
        return 0;
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        <Button 
          key="seven" 
          label="7" 
          id="seven" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="eight" 
          label="8" 
          id="eight" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="nine" 
          label="9" 
          id="nine" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="divide" 
          label="/" 
          id="divide" 
          onClick={handleButtonClick} 
        />
        
        <Button 
          key="four" 
          label="4" 
          id="four" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="five" 
          label="5" 
          id="five" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="six" 
          label="6" 
          id="six" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="multiply" 
          label="*" 
          id="multiply" 
          onClick={handleButtonClick} 
        />
        
        <Button 
          key="one" 
          label="1" 
          id="one" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="two" 
          label="2" 
          id="two" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="three" 
          label="3" 
          id="three" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="subtract" 
          label="-" 
          id="subtract" 
          onClick={handleButtonClick} 
        />
        
        <Button 
          key="zero" 
          label="0" 
          id="zero" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="decimal" 
          label="." 
          id="decimal" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="equals" 
          label="=" 
          id="equals" 
          onClick={handleButtonClick} 
        />
        <Button 
          key="add" 
          label="+" 
          id="add" 
          onClick={handleButtonClick} 
        />
        
        <Button 
          label="Clear" 
          id="button-clear" 
          onClick={handleClearClick} 
        />
        <Button 
          label="@jsills92" 
          id="button-github" 
          onClick={handleGithubClick} 
        />
      </div>
    </div>
  );
  

  /*return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        {['7', '8', '9', '/'].map((label) => (
          <Button 
            key={label} 
            label={label} 
            id={`button-${label}`} // Assign dynamic ID here
            onClick={handleButtonClick} 
          />
        ))}
        {['4', '5', '6', '*'].map((label) => (
          <Button 
            key={label} 
            label={label} 
            id={`button-${label}`} // Assign dynamic ID here
            onClick={handleButtonClick} 
          />
        ))}
        {['1', '2', '3', '-'].map((label) => (
          <Button 
            key={label} 
            label={label} 
            id={`button-${label}`} // Assign dynamic ID here
            onClick={handleButtonClick} 
          />
        ))}
        {['0', '.', '=', '+'].map((label) => (
          <Button 
            key={label} 
            label={label} 
            id={`button-${label}`} // Assign dynamic ID here
            onClick={handleButtonClick} 
          />
        ))}
        <Button label="Clear" id="button-clear" onClick={handleClearClick} />
        <Button label="@jsills92" id="button-github" onClick={handleGithubClick} />
      </div>
    </div>
  );*/ //this code above handles id's dynamically but is not passing FCC tests.
  
};

export default Calculator; // Ensure export is at the bottom


