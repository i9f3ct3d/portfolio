import React from 'react'
import './NavLinks.css'

const NavLinks = ({text, style}) => {
  return (
    <div style = {style && style} className='navlink__full-div'>
        {text}
    </div>
  )
}

export default NavLinks