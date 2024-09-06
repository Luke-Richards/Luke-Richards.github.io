import '../App.css';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';




function TypingEffectBox() {
  const [text, settext] = useState("\"Hello World\"");
  const [lineCounter, setlineCounter] = useState(0);
  const [characterCounter, setCharacterCounter] = useState(0);
  
  const splittedArray = textblock.split(/\r?\n/).concat(textblock.split(/\r?\n/).concat(textblock.split(/\r?\n/)));

  const Progress = useCallback(() => {

      let insert = "";
      let i = 0
      if(lineCounter > 150){i = lineCounter - 150;}
      while(i < lineCounter) {
        insert = insert+splittedArray[i]+"\n";
        i++;
      }
      let currentLine = splittedArray[lineCounter].trim().split("");
      for(let i = 0; i < characterCounter && i < currentLine.length; i++){
        insert = insert+currentLine[i];
      }
      insert = insert+"|";
      
      settext(insert);

      setCharacterCounter(characterCounter+1);
      if(characterCounter >= splittedArray[lineCounter].trim().length){
        setCharacterCounter(0);
        if(lineCounter >= splittedArray.length-1){
          setlineCounter(0);
        }else{
          setlineCounter(lineCounter+1);
        }
      }
      
      

  }, [lineCounter, characterCounter]);

  useEffect(() => {
      const intervalID = setInterval(Progress, 20);
      return () => clearInterval(intervalID);
  }, [Progress])

    return (
      <div className="TypingEffectContainer">
        <p className="TypingEffectText">{text}</p>
      </div>
    );
  }

const textblock = String.raw`
function TypingEffectBox() {
  const [text, settext] = useState("\"Hello World\"");
  const [lineCounter, setlineCounter] = useState(0);
  const [characterCounter, setCharacterCounter] = useState(0);

  const Progress = useCallback(() => {

      var splittedArray = textblock.split(/\r?\n/);
      splittedArray.forEach(function(entry) {
        console.log(entry);

      });

      let insert = "";
      let i = 0
      if(lineCounter > 30){i = lineCounter - 30;}
      while(i < lineCounter) {
        insert = insert+splittedArray[i]+"\n";
        i++;
      }
      let currentLine = splittedArray[lineCounter].trim().split("");
      for(let i = 0; i < characterCounter && i < currentLine.length; i++){
        insert = insert+currentLine[i];
      }
      insert = insert+"|";
      
      settext(insert);

      setCharacterCounter(characterCounter+1);
      if(characterCounter >= splittedArray[lineCounter].trim().length){
        setCharacterCounter(0);
        if(lineCounter >= splittedArray.length-1){
          setlineCounter(0);
        }else{
          setlineCounter(lineCounter+1);
        }
      }
      
      

  }, [lineCounter, characterCounter]);

  useEffect(() => {
      const intervalID = setInterval(Progress, 20);
      return () => clearInterval(intervalID);
  }, [Progress])

    return (
      <div className="TypingEffectContainer">
        <p className="TypingEffectText">{text}</p>
      </div>
    );
  }
`;

export default TypingEffectBox;