import '../App.css';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';




function TypingEffectBox() {
  const [text, settext] = useState("\"Hello World\"");
  const [counter, setcounter] = useState(2);

  const Progress = useCallback(() => {
      let insert = "";
      for (let i = 0; i < counter; i++) {
        insert = insert+"L"
      }
      var splittedArray = textblock.split(/\r?\n/);
      settext(splittedArray);
      setcounter(counter+1);
  }, [counter]);

  useEffect(() => {
      const intervalID = setInterval(Progress, 50);
      return () => clearInterval(intervalID);
  }, [Progress])

    return (
      <div className="TypingEffectContainer">
        <p>{text}</p>
      </div>
    );
  }

const textblock = `
function TypingEffectBox() {
  const [text, settext] = useState("\"Hello World\"");
  const [counter, setcounter] = useState(2);

  const Progress = useCallback(() => {
      let insert = "";
      for (let i = 0; i < counter; i++) {
        insert = insert+"L"
      }
      settext(insert+"|");
      setcounter(counter+1);
  }, [counter]);

  useEffect(() => {
      const intervalID = setInterval(Progress, 50s);
      return () => clearInterval(intervalID);
  }, [Progress])

    return (
      <div className="TypingEffectContainer">
        <p>{text}</p>
      </div>
    );
  }
`;

export default TypingEffectBox;