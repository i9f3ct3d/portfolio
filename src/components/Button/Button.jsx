import React, { memo } from 'react'
import './Button.css'

const Button = ({text, onClick, style}) => {
  return (
    <button onClick = {() => {
      onClick && onClick()
    }} style = {style && style} className='button__full-div'>
        {text}
        <div className='button__background'/>
    </button>
  )
}

export default memo(Button)