import React from 'react'
import "./Cards.css"
import imageSrc from'./img/images.png'
const Cards = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
    <img 
      src={imageSrc} 
      alt="Card Image" 
      style={{ border: "2px solid green", paddingRight: "2px", width:"418px" }} 
    />
        <h1>{props.title}</h1>
        <h3>{props.desciption}</h3>
      
    </div>
  )
}

export default Cards
