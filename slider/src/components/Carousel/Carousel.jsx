import React from 'react'
import "./Carousel.css"

const Carousel = ({data}) => {
  console.log(data);
  return (
    <div className='carousel'>
      {data.map((item, index) => {
        
        return <img src={item.src} alt={item.alt} key={index} className='slide'/>

      })}
    </div>
  )
}

export default Carousel
