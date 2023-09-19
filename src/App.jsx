import React, { useState } from 'react';
import './App.module.css'; 
import { Button } from 'antd';


function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="Counter">
        <Button onClick={decrement}>-</Button>
        <span>{count}</span>
        <Button onClick={increment}>+</Button>
      </div>
      <Button type="primary" onClick={reset}>
        Reset
      </Button>
    </div>
  );
}

export default App;
