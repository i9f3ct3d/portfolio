import React, { useEffect, useRef } from 'react'
import useOnScreen from '../../Hooks/useOnScreen'
import './SkillsRatingBars.css'

const SkillsRatingBars = ({skillName, icon, skillPercentage, style}) => {

    const colors = ['#08FDD8', '#FD2155', '#FFFFFF', '#D36DD5']

    const overlayRef = useRef()
    const isVisible = useOnScreen(overlayRef)

    useEffect(() => {
        if(isVisible){
            overlayRef.current.style.width = `${skillPercentage}%`
        }
    }, [isVisible])

  return (
    <div style = {style && style} className='skills-ratings-bars__full-div'>
        <div style = {{
            color : colors[(Math.floor((Math.random()*4) + 0))]
        }} className='skills-ratings-bars__icon-div'>
            {icon}
        </div>
        <div className='skills-ratings-bars__name-rating__div'>
            <p className='skills-ratings-bars__skill-name'>{skillName}</p>
            <div className='skills-ratings-bars__rating'>
                <div style ={{
                backgroundColor : colors[(Math.floor((Math.random()*4) + 0))]
            }} ref = {overlayRef} className='skills-ratings-bars__rating-overlay'/>
            </div>
        </div>
    </div>
  )
}

export default SkillsRatingBars