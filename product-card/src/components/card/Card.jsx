import React from 'react'
import "./Card.css"
import Product from '../product/Product'
import image1 from "../../Assests/image1.jpg"
import image2 from "../../Assests/image2.jpg"
import image3 from "../../Assests/image3.jpg"

const Card = () => {
  return (
    <div className='product'>
        <Product image = {image1} name = "burger1" price = "$5.5" oldprice = "$4.5" description = "the bese classsic burger you ever had"/>
        <Product image = {image2}/>
        <Product image = {image3}/>
    </div>
  )
}

export default Card