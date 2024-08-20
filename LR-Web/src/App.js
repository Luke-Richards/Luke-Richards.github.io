import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Luke Richards';
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Luke Richards</code>
        </p>
      </header>
    </div>
  );
}

export default App;
