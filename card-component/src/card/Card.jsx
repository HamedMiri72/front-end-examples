import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>

        <div className="cardBody">
            <img src={props.img} alt="" />
            <h2 className='cardTitle'>
               {props.title} 
            </h2>
            <p className='cardDesc'>
               {props.desc}
            </p>
        </div>

        <button className='btnCard'>View Recipe</button>

    </div>
  )
}

export default Card