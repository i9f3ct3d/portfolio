import React, { forwardRef, memo, useEffect } from 'react'
import useOnScreen from '../../../Hooks/useOnScreen'
import './AboutMeText.css'

const AboutMeText = ({text, children, style, themeColor}, ref) => {

    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if(isVisible){
            ref.current.classList.add('about-me__text-visible')
        }else{
            ref.current.classList.remove('about-me__text-visible')
        }
    }, [isVisible])

  return (
    <p style = {style && style} ref = {ref} className='about-me__text'>{children}<div style = {{borderTopColor : themeColor}} className='about-me__text-chat-point'></div></p>
  )
}

export default memo(forwardRef(AboutMeText))