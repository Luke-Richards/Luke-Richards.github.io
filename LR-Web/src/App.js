import logo from './logo.svg';
import './App.css';
import TypingEffectBox from './components/typingEffectBox';
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
      <TypingEffectBox/>
    </div>
  );
}

export default App;
