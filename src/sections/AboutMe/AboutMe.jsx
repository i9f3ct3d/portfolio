import React, { memo, useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import LottieAnimation from '../../components/LottieAnimation/LottieAnimation'
import useOnScreen from '../../Hooks/useOnScreen'
import lottie_aboutme from '../../Images/Comp 1.json'
import './AboutMe.css'
import AboutMeText from './components/AboutMeText'

const AboutMe = () => {

    const lottieDivRef = useRef();
    const topTextRef = useRef()
    const midTextRef = useRef()
    const bottomTextRef = useRef()
    const isVisible = useOnScreen(midTextRef)
    const lottieRef = useRef()

    useEffect(() => {
        if(isVisible){
            lottieDivRef.current.classList.add('lottie-animation__div-visible');
        }else{
            lottieDivRef.current.classList.remove('lottie-animation__div-visible');
        }
    }, [isVisible])

  return (
    <div className='about-me__full-div'>
        <span style = {{transform : 'translateX(-10px)', display : 'block'}} className='html_tags'>{'< section >'}</span>
        {/* <br/> */}
        <span style={{marginLeft : '0px'}} className='html_tags'>{'< h1 >'}</span>
            <Header
                style = {{
                    marginLeft : '20px'
                }}
                textStyle = {{
                    fontFamily : 'Roboto',
                    fontSize : '5rem'
                }}
                text = 'Me, Myself & I'
            />
        <span style={{marginLeft : '0px'}} className='html_tags'>{'</ h1 >'}</span>
        <div className='about-me__text-lottie__div'>
            <div className='about-me__text-div'>
                    <span className='html_tags'>{'< li >'}</span>
                    <AboutMeText ref = {topTextRef}>Hey👋, I'm a senior Computer Science and Engineering student at National Institute of Technology, Durgapur and this is where my love story with coding began.</AboutMeText>
                    <span className='html_tags'>{'</ li >'}</span>
                    <br/>
                    <span className='html_tags'>{'< li >'}</span>
                    <AboutMeText ref = {midTextRef} themeColor = '#FEA400' style = {{color : '#FEA400', borderColor : '#FEA400'}}>Talking about myself I'm an adequately organized and kind of a moody guy. Apart from coding and all other working stuffs I am a guy who loves to spend leisure time gaming, watching movies, roaming around with friends and ahh! at the end partying.</AboutMeText>
                    <span className='html_tags'>{'</ li >'}</span>
                    <br/>
                    <span className='html_tags'>{'< li >'}</span>
                    <AboutMeText ref = {bottomTextRef} themeColor = '#D36DD5' style = {{color : '#D36DD5', borderColor : '#D36DD5'}}>Currently I have a job offer from Microsoft as a Software Engineer and want to see myself working there with positive people. Other than that since my love and passion remain biased towards the technical fields I want to keep myself focused on that.</AboutMeText>
                    <span className='html_tags'>{'</ li >'}</span>
            </div>
            <div ref = {lottieDivRef} className='lottie-animation__div'>
                <div className='lottie-wrapper__div'>
                    <LottieAnimation
                        lotti={lottie_aboutme}
                        height = '100%'
                        width = '100%'
                        className = 'lottie-animation'
                        ref = {lottieRef}
                    />
                </div>
                <div className='lottie-animation__div-bottom-shade'/>
            </div>
        </div>
        <span className='html_tags'>{'</ section >'}</span>
    </div>
  )
}

export default memo(AboutMe)