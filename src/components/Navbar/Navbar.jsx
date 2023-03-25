import React, { memo, useEffect, useRef } from 'react'
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'
import Logo from '../Logo/Logo'
import NavLinks from '../NavLinks/NavLinks'
import myImg from '../../Images/myImg2.jpg'
import './Navbar.css'
import useOnScreen from '../../Hooks/useOnScreen'

const Navbar = () => {

  const imageRef = useRef()
  const isVisible = useOnScreen(imageRef)
  const navbarRef = useRef()

  useEffect(() => {
    if (isVisible && imageRef.current) {
      imageRef.current.classList.add('navbar__image-div__visible')
    }
  }, [isVisible])

  const navLinksClickHandler = () => {
    if(navbarRef.current && window.innerWidth <= 1330) hamburgerButtonClickHandler()
  }

  const hamburgerButtonClickHandler = () => {
    console.log('clicked');
      if(navbarRef.current){
        navbarRef.current.style.transitionDelay = '0ms, 0ms, 500ms, 500ms, 0ms'
        navbarRef.current.style.transform = 'scaleY(1) scaleX(1)';
        navbarRef.current.style.right = '0'
        navbarRef.current.style.top = '0'
        navbarRef.current.style.zIndex = '10'
        navbarRef.current.style.opacity = '1'
      }
    }
    
    const navbarCloseHandler = () => {
      if(navbarRef.current){
        navbarRef.current.style.transitionDelay = '500ms, 500ms, 0ms, 0ms, 500ms'
        navbarRef.current.style.transform = 'scaleY(' + (32 / window.innerHeight) + ') scaleX(' + (40 / window.innerWidth) + ')';
        navbarRef.current.style.right = '10px'
        navbarRef.current.style.top = '10px'
        navbarRef.current.style.zIndex = '9'
        navbarRef.current.style.opacity = '0'
    }
  }

  return (
    <>
      <div onClick={() => {
        // if(navbarRef.current) navbarRef.current.style.display = 'flex'
        hamburgerButtonClickHandler()
      }} className='hamburger-button__div'>
        <div className='hamburger-button hamburger-button1'/>
      </div>


      <div ref = {navbarRef} style = {{
        transform : 'scaleY(' + (32 / window.innerHeight) + ') scaleX(' + (40 / window.innerWidth) + ')'
      }} className='navbar__full-div'>
        <div onClick = {() => {
          navbarCloseHandler();
        }} className='navbar__cross-icon__div'>
        </div>
        <div className='navbar__logo__full-div'>
          <Logo
            className='navbar__logo'
          />
          <div ref={imageRef} className='navbar__image-div'>
            <div className='navbar__image-border' />
            <img src={myImg} alt='me' className='navbar__image' />
          </div>
        </div>
        <div className='navlinks__container'>
        <div>
          <NavLinks
            text='HOME'
            onClick={navLinksClickHandler}
          />
          <NavLinks
            text='ME SO-FAR'
            style={{
              borderTop: 'none'
            }}

            to='/me-so-far'
            onClick={navLinksClickHandler}
          />
          <NavLinks
            text='MY SKILLS'
            style={{
              borderTop: 'none'
            }}

            to='/skills'
            onClick={navLinksClickHandler}
          />
          <NavLinks
            text='PROJECTS'
            style={{
              borderTop: 'none'
            }}

            to='/projects'
            onClick={navLinksClickHandler}
          />
          </div>
        </div>
        <div className='social-link__container'>
          <div onClick = {() => {
            window.open('https://www.facebook.com/sushanta.saren.73/')
          }} className='social-link__div facebook__div'>
            <BsFacebook
              className='social-icon'
            />
          </div>
          <div onClick={() => {
            window.open('https://www.linkedin.com/in/sushanta-saren/')
          }} className='social-link__div linkedin__div'>
            <BsLinkedin
              className='social-icon'
            />
          </div>
          <div onClick={() => {
            window.open('https://github.com/i9f3ct3d')
          }} className='social-link__div github__div'>
            <BsGithub
              className='social-icon'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Navbar)