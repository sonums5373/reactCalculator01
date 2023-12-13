import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleReset = () => {
    setInput('');
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input className='display' type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
          <button key={digit} onClick={() => handleButtonClick(digit.toString())}>
            {digit}
          </button>
        ))}
        {['+', '-', '*', '/', '0', 'C', '='].map((value) => (
          <button key={value} onClick={() => (value === 'C' ? handleReset() : value === '=' ? handleCalculate() : handleButtonClick(value))}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
