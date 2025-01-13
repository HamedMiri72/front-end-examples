import React, { useState } from 'react'
import "./TypeEffect.css"

const TypeEffect = () => {

    const [resultData, setResultData] = useState("");

    const delayText = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord + " ");
        }, 75 * index);
    };


    const handleClickTypingEffect = (sentence) => {

        const words = sentence.split(" ");
        words.forEach((word, index) => {
            delayText(index, word);
        });
    };


  return (




    <div>

        <button onClick = {() => handleClickTypingEffect("HELLO WORLD AND GOOD MORNING")}>Start Typing</button>
        <p>{resultData}</p>

    </div>
  )
}

export default TypeEffect