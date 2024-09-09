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
      <div className='backgroundContainer'>
      </div>
      <div className='foregroundContainer'>
        <header className="App-header">
          <p>
            <code>Luke Richards</code>
          </p>
        </header>
        <div className='content'>
          <TypingEffectBox/>
          <div className='content'>
            <div className='homepageContent'>
            <div className='gradientTransition'></div>
            <p className='homepageContentInner'>hello world            asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
            </div>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
