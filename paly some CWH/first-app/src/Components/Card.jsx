import React from 'react'
import "./card.css"

const Card = (apple) => {
  return (
    <div className='card'>
      <h1> {apple.title} </h1>
    <p> {apple.description }</p>
    </div>
  )
}

export default Card
