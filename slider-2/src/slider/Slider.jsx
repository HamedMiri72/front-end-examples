import React, { useState } from 'react'
import "./Slider.css"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
export const Slider = ({data}) => {
  console.log(data)
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length -1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.lengh -1  : slide -1)
  }

  return (
    <div className='imageSlider'>
        <ArrowCircleLeftIcon className='arrow arrow-left' onClick= {prevSlide} />
        {data.map((item, indx) => {
            return <img src={item.src} alt={item.alt} key={indx} className={slide === indx ? "slide" : "slide slide-hidden"} />

        })}
        <ArrowCircleRightIcon className='arrow arrow-right' onClick={nextSlide}/>

        <span className='indicators'>
          {data.map((_, indx) => {
            return <button key={indx}  onClick={() => setSlide(indx)} className={slide === indx ? "indicator" : "indicator indicator-inactive"}></button>
          })}
        </span>
    </div>
  )
}
