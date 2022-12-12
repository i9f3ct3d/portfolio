import React, { useEffect, useRef } from 'react'
import './IntroTags.css'

const IntroTags = ({text, style}) => {

    const textRef = useRef()

    useEffect(() => {
        if(textRef.current){
            textRef.current.style.transform = 'translateX(0)'
            textRef.current.style.opacity = 1
        }
    }, [])

  return (
    <div ref = {textRef} style = {style && style} className='intro-tags__full-div'>
        <p className = 'intro-tags__text'>{text}</p>
    </div>
  )
}

export default IntroTags