import React, { useState } from 'react'

import "./LetterEffect.css"

const LetterEffect = () => {

    const [resultData, setResultData] = useState("");

    const delayChar = (index, nextChar) => {
        setTimeout(function () {
            setResultData(prev=> prev + nextChar);
        }, 75*index);
    
    };

    const handleClick = (sentence) => {
        const chars = sentence.split(" ");
        chars.forEach((char, index) => {
            delayChar(index, char);

        });
    }



  return (
    <div>
        <hr />

        <button onClick={() => handleClick("write it by letter and animation!")}>start typing</button>
        <p>{resultData}</p>
    </div>
  )
}

export default LetterEffect