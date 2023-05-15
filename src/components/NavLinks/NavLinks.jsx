import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

const NavLinks = ({text, style, onClick, to}) => {
  return (
    <NavLink to = {to ? to : '/'} style = {style && style} onClick = {() => {
      onClick && onClick()
    }} className='navlink__full-div'>
        {({isActive}) => <div style = {{display : 'inline-flex', color : isActive && '#000', WebkitTextStroke : isActive && '0px white'}}>{text}</div>}
    </NavLink>
  )
}

export default memo(NavLinks)