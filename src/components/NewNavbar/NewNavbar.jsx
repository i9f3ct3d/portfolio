import React, { useEffect, useRef, useState } from 'react'
import './NewNavbar.css'
import Logo from '../Logo/Logo'
import myImg from '../../Images/myImg2.jpg'
import MyImage from '../MyImage/MyImage'
import NavLinks from '../NavLinks/NavLinks'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const NewNavbar = ({ }) => {

    const [isOpen, setIsOpen] = useState(false)

    const ref = useRef()
    const buttonRef = useRef()
    const myImgRef = useRef()
    const navbarContentDivRef = useRef()

    const changeNavbarState = () => {
        ref.current.classList.toggle('new-navbar__open')
        buttonRef.current.classList.toggle('new-navbar__hamburger-button__open')
        navbarContentDivRef.current.classList.toggle('new-navbar__content-div__open')
        setIsOpen(prev => !prev)
    }

    const navLinksClickHandler = () => {
        if(ref.current && window.innerWidth <= 1330) changeNavbarState()
    }

    return (
        <>
            <div ref={buttonRef} onClick={() => {
                changeNavbarState()
            }} className='new-navbar__hamburger-button__div'>
                <div className='new-navbar__hamburger-button' />
            </div>
            <div ref={ref} className='new-navbar__full-div'>
                <div className='new-navbar__back new-navbar__back1'></div>
                <div className='new-navbar__back new-navbar__back2'></div>
                <div className='new-navbar__back new-navbar__back3'></div>
                <div className='new-navbar__back new-navbar__back4'></div>

                <div ref = {navbarContentDivRef} className='new-navbar__content-div'>
                    <div className='new-navbar__content-inner__div'>
                        <div className='new-navbar__logo-image__div'>
                            <Logo
                                style={{
                                    background: 'transparent'
                                }}
                                theme='light'
                                className='new-navbar__logo'
                            />
                            <div className='new-navbar__my-image__div'>
                                <MyImage image={<img src={myImg} alt='me' className='new-navbar__my-image' />} />
                            </div>
                        </div>
                        <div className='new-navbar__navlinks-div'>
                            <NavLinks
                                text='HOME'
                                onClick={navLinksClickHandler}
                                style={{
                                    justifyContent: 'center'
                                }}
                            />
                            <NavLinks
                                text='ME SO-FAR'
                                style={{
                                    justifyContent: 'center',
                                    borderTop: 'none'
                                }}

                                to='/me-so-far'
                                onClick={navLinksClickHandler}
                            />
                            <NavLinks
                                text='MY SKILLS'
                                style={{
                                    justifyContent: 'center',
                                    borderTop: 'none'
                                }}

                                to='/skills'
                                onClick={navLinksClickHandler}
                            />
                            <NavLinks
                                text='PROJECTS'
                                style={{
                                    justifyContent: 'center',
                                    borderTop: 'none'
                                }}

                                to='/projects'
                                onClick={navLinksClickHandler}
                            />
                        </div>
                        <div className='new-navbar__social-link__container-div'>
                            <div onClick={() => {
                                window.open('https://www.facebook.com/sushanta.saren.73/')
                            }} className='new-navbar__social-link__div facebook__div'>
                                <BsFacebook
                                    className='new-navbar__social-icon'
                                />
                            </div>
                            <div onClick={() => {
                                window.open('https://www.linkedin.com/in/sushanta-saren/')
                            }} className='new-navbar__social-link__div linkedin__div'>
                                <BsLinkedin
                                    className='new-navbar__social-icon'
                                />
                            </div>
                            <div onClick={() => {
                                window.open('https://github.com/i9f3ct3d')
                            }} className='new-navbar__social-link__div github__div'>
                                <BsGithub
                                    className='new-navbar__social-icon'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewNavbar