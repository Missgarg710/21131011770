import React, { useState } from 'react';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResponseData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponseData(null);
    }
  };

  return (
    <div>
      <h1>API Calls Example</h1>
      <button onClick={() => fetchData('http://20.244.56.144/test/primes')}>Fetch Prime Numbers</button>
      <button onClick={() => fetchData('http://20.244.56.144/test/fibonacci')}>Fetch Fibonacci Numbers</button>
      <button onClick={() => fetchData('http://20.244.56.144/test/even')}>Fetch Even Numbers</button>
      <button onClick={() => fetchData('http://20.244.56.144/test/random')}>Fetch Random Numbers</button>
      {error && <div>Error: {error}</div>}
      {responseData && <div>Data: {JSON.stringify(responseData)}</div>}
    </div>
  );
}

export default App;
