import React, { useState } from 'react'
import "./Carousel.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({data}) => {
  console.log(data);

  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length -1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide -1)
  }


  return (
    <div className='carousel'>
      <ArrowBackIosIcon className='arrow arrow-left' onClick={prevSlide}/>
      {data.map((item, index) => {
        
        return <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"}/>

      })}

      <ArrowForwardIosIcon className='arrow arrow-right' onClick={nextSlide}/>
      <span className='indicators'>
        {data.map((_, index) =>{

          return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>

        })}
      </span>
    </div>
    
  )
}

export default Carousel
