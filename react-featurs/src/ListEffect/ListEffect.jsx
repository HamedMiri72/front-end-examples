import React, { useState } from 'react'
import "./ListEffect.css"

const ListEffect = () => {

    const [items, setItems] = useState([]);



    const delayItems = (index, nextItem) => {
        setTimeout(function () {
            setItems(prev => [...prev, nextItem]);
        }, 300 * index);
    };


    const handleClick = () => {
        const data = ["apple", "benana", "cherry", "data", "crumberry"];
        data.forEach((item, index) => {
            delayItems(index, item);

        });
    };


  return (



    <div>

        <button onClick={handleClick}>Start making a list</button>

        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>

    </div>
  )
}

export default ListEffect