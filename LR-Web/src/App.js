import logo from './logo.svg';
import './App.css';
import TypingEffectBox from './components/TypingEffectBox';
import SiteHeader from './components/SiteHeader';
import HomepageItem from './components/HomepageItem';
import PageToc from './components/PageToc';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Luke Richards';
  }, []);

  const contentRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <div className='background-container'>
      </div>
      <div className='foreground-container'>
        <SiteHeader/>
        <div className='left-panel'>
        <PageToc/>
        </div>
        <div className='center-panel'>
          <HomepageItem title={"Title Defined"}>
            hello
            hello
            hello
            <TypingEffectBox/>
          </HomepageItem>
          <HomepageItem/>
          <HomepageItem title={"second last"}/>
          <HomepageItem/>
          
        </div>
        {/* <div className='content'>
          <div className='content'>
            <div className='homepageContent'>
            <div className='gradientTransition'></div>
            <p className='homepageContentInner'>hello world <TypingEffectBox/> </p>
            </div>
          </div>
          
        </div> */}
        
      </div>
      
      
    </div>
  );
}

export default App;
