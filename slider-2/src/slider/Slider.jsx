import React from 'react'
import "./Slider.css"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
export const Slider = ({data}) => {
  console.log(data)
  return (
    <div className='imageSlider'>
        <ArrowCircleLeftIcon className='arrow arrow-left' />
        {data.map((item, indx) => {
            return <img src={item.src} alt={item.alt} key={indx} className='slide' />

        })}
        <ArrowCircleRightIcon className='arrow arrow-right'/>

        <span className='indicators'>
          {data.map((_, indx) => {
            return <button key={indx} className='indicator' onClick={null}></button>
          })}
        </span>
    </div>
  )
}
