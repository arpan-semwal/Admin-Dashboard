import React from 'react'
import "../styles/Card.css"
const Cards = ({  title , value , subtext}) => {
  return (
    <div className='cards'>
       <div>
        
        <h4 className='card-title'>{title}</h4>
       </div>

       <p className='card-value'>{value}</p>
       {subtext && <p className='card-subtext'>{subtext}</p>}
    </div>
  )
}

export default Cards