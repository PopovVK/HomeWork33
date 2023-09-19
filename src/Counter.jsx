import React, { useState } from 'react';
import styles from './Counter.module.css'; // Імпорт CSS-модуля

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div className={styles.Counter}> {/* Використання класу з CSS-модуля */}
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
