import React from 'react'
import './Button.css'

const Button = ({text, onClick}) => {
  return (
    <button className='button__full-div'>
        {text}
        <div className='button__background'/>
    </button>
  )
}

export default Button