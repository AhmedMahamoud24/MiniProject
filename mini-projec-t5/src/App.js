import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [fruits, setFruits] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:3000/api/Fruits')
      .then(response => {
        setFruits(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleRefresh = () => {
    axios.get('http://localhost:3000/api/Fruits')
      .then(response => {
        setFruits(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  return (
    <div>
      <h1>Fruits List</h1>
      <button onClick={handleRefresh}>Refresh</button>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;