import React from 'react'
import "./Product.css"


const Product = (props) => {
  return (
    <div className='product-box'>
        <img src={props.image} alt="" />
        <div className='description'>
            <h2>{props.name}</h2>
            <p className='price'>{props.price}<span>{props.oldprice}</span></p>
            <p className='para'>{props.description}</p>
            <button className='btn'>But know</button>

        </div>

    </div>
  )
}

export default Product