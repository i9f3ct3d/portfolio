import React from 'react'
import Header from '../../components/Header/Header'
import LottieAnimation from '../../components/LottieAnimation/LottieAnimation'
import lottie_aboutme from '../../Images/Comp 1.json'
import './AboutMe.css'

const AboutMe = () => {

  return (
    <div className='about-me__full-div'>
        <span className='html_tags'>{'< section >'}</span>
        <br/>
        <span style={{marginLeft : '30px'}} className='html_tags'>{'< h1 >'}</span>
            <Header
                style = {{
                    marginLeft : '50px'
                }}
                text = 'Me, Myself & I'
            />
        <span style={{marginLeft : '30px'}} className='html_tags'>{'</ h1 >'}</span>
        <div className='about-me__text-lottie__div'>
            <div className='about-me__text-div'>
                {/* <div className='intro-tags__full-div'> */}
                    <span className='html_tags'>{'< li >'}</span>
                    <p className = 'about-me__text'>Hey👋, I'm a senior Computer Science and Engineering student at National Institute of Technology, Durgapur and this is where my love story with coding began.</p>
                    <span className='html_tags'>{'</ li >'}</span>
                    <br/>
                    <span className='html_tags'>{'< li >'}</span>
                    <p className = 'about-me__text'>Talking about myself I'm an adequately organized and kind of a moody guy. Apart from coding and all other working stuffs I am a guy who loves to spend leisure time gaming, watching movies, roaming around with friends and ahh! at the end partying.</p>
                    <span className='html_tags'>{'</ li >'}</span>
                    <br/>
                    <span className='html_tags'>{'< li >'}</span>
                    <p className = 'about-me__text'>Currently I have a job offer from Microsoft as a Software Engineer and want to see myself working there with positive people. Other than that since my love and passion remain biased towards the technical fields I want to keep myself focused on that.</p>
                    <span className='html_tags'>{'</ li >'}</span>

                {/* </div> */}
            </div>
            <div className='lottie-animation__div'>
                <LottieAnimation
                    lotti={lottie_aboutme}
                    height = '100%'
                    width = '100%'
                />
            </div>
        </div>
        <span className='html_tags'>{'</ section >'}</span>
    </div>
  )
}

export default AboutMe