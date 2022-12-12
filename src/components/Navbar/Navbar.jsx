import React from 'react'
import Logo from '../Logo/Logo'
import NavLinks from '../NavLinks/NavLinks'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className='navbar__full-div'>
            <Logo
              style = {{
                position : 'absolute',
                left : '0',
                top : '0'
              }}
            />
            <div className='navlinks__container'>
                <NavLinks
                  text= 'About Me'
                />
                <NavLinks
                  text= 'Me so-far'
                  style = {{
                    borderTop : 'none'
                  }}
                />
                <NavLinks
                  text= 'My skills'
                  style = {{
                    borderTop : 'none'
                  }}
                />
                <NavLinks
                  text= 'Projects'
                  style = {{
                    borderTop : 'none'
                  }}
                />
                <NavLinks
                  text= 'Contact'
                  style = {{
                    borderTop : 'none'
                  }}
                />
            </div>
        </div>
    </>
  )
}

export default Navbar