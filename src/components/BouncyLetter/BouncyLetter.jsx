import React, { memo, useEffect, useRef } from 'react'
import useOnScreen from '../../Hooks/useOnScreen'
import './BouncyLetter.css'

const BouncyLetter = ({letter, letterStyle, className, timeout, children}) => {

    const isHoveAnimationCompleted = useRef(true);
    const bouncyLetterRef = useRef()

    const isVisible = useOnScreen(bouncyLetterRef)

    const takeCareOfHoverAnimation = (ele) => {
        if(isHoveAnimationCompleted.current && !ele.classList.contains('bouncy_letter_hovered')){
            isHoveAnimationCompleted.current = false;
            ele.classList.add('bouncy_letter_hovered')

            setTimeout(() => {
                ele.classList.remove('bouncy_letter_hovered')
                isHoveAnimationCompleted.current = true
            }, 1000)
        }
    }
    
    useEffect(() => {
        if(!isVisible) return;

        let ele = bouncyLetterRef.current
        if(!ele) return;

        setTimeout(() => {
            ele.style.opacity = 1
            takeCareOfHoverAnimation(ele)
        }, timeout)
    }, [isVisible])

  return (
    <p ref  = {bouncyLetterRef} onMouseEnter={(e) => {
        takeCareOfHoverAnimation(e.target)
    }} style = {letterStyle && letterStyle} className= {`bouncy_letter ${className}`}>
        {letter}{children}
    </p>
  )
}

export default memo(BouncyLetter)