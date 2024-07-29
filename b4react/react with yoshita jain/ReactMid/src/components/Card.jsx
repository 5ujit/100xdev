import React from 'react'
import "./Card.css"
const Card = (props={title,discription}) => {
  return (
    <div className='Card'>
        <h1>{props.title}</h1>
        <p>{props.decsription}</p>
      
    </div>
  )
}

export default Card
