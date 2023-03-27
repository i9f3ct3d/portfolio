import React, { memo, useEffect, useRef } from 'react'
import BouncyLetter from '../../components/BouncyLetter/BouncyLetter'
import Button from '../../components/Button/Button'
import IntroTags from '../../components/IntroTags/IntroTags'
import myImg from '../../Images/myImg2.jpg'
import useOnScreen from '../../Hooks/useOnScreen'
import { BiRightArrowAlt } from 'react-icons/bi'
import './Intro.css'
import MyImage from '../../components/MyImage/MyImage'

const Intro = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const imageRef = useRef()
    const imageBorderRef = useRef()
    const isImageVisible = useOnScreen(imageRef)

    useEffect(() => {
        if (isImageVisible) {
            imageRef.current.style.transform = 'scale(1)'
            imageRef.current.style.opacity = '1'
            imageBorderRef.current.style.transform = 'translateY(0)'
            imageBorderRef.current.style.opacity = '1'
        } else {
            imageRef.current.style.transform = 'scale(0.5)'
            imageRef.current.style.opacity = '0'
            imageBorderRef.current.style.transform = 'translateY(-70%)'
            imageBorderRef.current.style.opacity = '0'
        }
    }, [isImageVisible])

    return (
        <div className='intro__full-div'>
            <div className='scroll-down__indicator scroll-down__indicator1'><span>SCROLL DOWN</span><BiRightArrowAlt /></div>
            <div className='scroll-down__indicator scroll-down__indicator2'><span>SCROLL DOWN</span><BiRightArrowAlt /></div>
            <div className='intro__text-div'>
                <BouncyLetter
                    letter='H'
                    className='intro_text'
                    timeout={0}
                />
                <BouncyLetter
                    letter='i'
                    className='intro_text'
                    timeout={200}
                />
                <BouncyLetter
                    letter=','
                    className='intro_text'
                    timeout={200}
                />
                <div style={{
                    width: '10px',
                    height: '1px'
                }} />
                <BouncyLetter
                    letter='I'
                    className='intro_text'
                    timeout={400}
                />
                <BouncyLetter
                    letter="'"
                    className='intro_text'
                />
                <BouncyLetter
                    letter='m'
                    className='intro_text'
                    timeout={600}
                />
                <div style={{
                    width: '10px',
                    height: '10px',
                    display: 'inline-block'
                }} />
                <BouncyLetter
                    letter='S'
                    className='intro_text'
                    timeout={800}
                />
                <BouncyLetter
                    letter='u'
                    className='intro_text'
                    timeout={1000}
                />
                <BouncyLetter
                    letter='s'
                    className='intro_text'
                    timeout={1200}
                />
                <BouncyLetter
                    letter='h'
                    className='intro_text'
                    timeout={1400}
                />
                <BouncyLetter
                    letter='a'
                    className='intro_text'
                    timeout={1600}
                />
                <BouncyLetter
                    letter='n'
                    className='intro_text'
                    timeout={1800}
                />
                <BouncyLetter
                    letter='t'
                    className='intro_text'
                    timeout={2000}
                />
                <BouncyLetter
                    letter='a'
                    className='intro_text'
                    timeout={2200}
                />
                <br />
                <br />
                <div className='intro-tags__container'>
                    <IntroTags
                        text={
                            <>
                                <span className='intro-page__tags__text' style={{
                                    color: '#FD2155'
                                }}>{"</>"}</span>
                                <span className='intro-page__tags__text'> Software Engineer</span>
                            </>
                        }

                        style={{
                            transform: 'translateY(-40px)'
                        }}
                    />
                    <IntroTags
                        text={
                            <>
                                <span className='intro-page__tags__text' style={{
                                    color: 'cyan'
                                }}>{"</>"}</span>
                                <span className='intro-page__tags__text'> Web Developer</span>
                            </>
                        }

                        style={{
                            transform: 'translateX(-40px)'
                        }}
                    />
                    <IntroTags
                        text={
                            <>
                                <span className='intro-page__tags__text' style={{
                                    color: 'whiteSmoke'
                                }}>{"</>"}</span>
                                <span className='intro-page__tags__text'> Problem Solver</span>
                            </>
                        }
                        style={{
                            transform: 'translateY(40px)'
                        }}
                    />
                </div>
                <br />
                <br />
                <Button
                    text='Contact Me'
                    onClick={() => {

                        const ele = document.getElementById('contact-me__id')
                        ele && ele.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}
                />
            </div>
            <div className='intro-page__image-div'>
                <MyImage
                    ref={imageRef}
                    image={
                        <img  className='intro-page__image' src={myImg} alt='my pic' />
                    }
                />
                <div ref={imageBorderRef} className='intro-page__image-div__left-border' />
            </div>
        </div>
    )
}

export default memo(Intro)