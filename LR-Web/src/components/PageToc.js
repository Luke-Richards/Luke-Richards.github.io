import '../App.css';
import { useEffect, useRef, useState } from 'react';





function PageToc(page) {
  useEffect(() => {
    //this class toc-entry is not to be confused with pagetoc-entry. toc-entry is for when a header wants to be detected by the table of contents
      const items = Array.from(document.getElementsByClassName("toc-entry"))
      .map((item) => ({
        text: item.innerHTML,
      }))
      setTocEntries(items);
    }, []);
  
    const [tocEntries, setTocEntries] = useState([])

  return (
    <div className='pagetoc-container'>
      <div className='pagetoc-header'>On this page</div>
      {tocEntries.map((entry) => (

        <div className='pagetoc-entry'> 
          {entry.text}  
        </div>

        ))
      }
    </div>
  );

}

export default PageToc;