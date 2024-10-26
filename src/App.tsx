import React, { useState, useEffect } from 'react';
import { logInfo, logError } from './logUtils';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {

    logInfo('App component rendered');
  }, []);

  const handleClick = () => {
    try {
      // Код, который может вызвать ошибку
      const result = 1 / 0;
    } catch (error: any) { // Adding 'any' type to allow assigning unknown type to error
      setError(error);
      logError('Error occurred: ' + error.message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
}

export default App;