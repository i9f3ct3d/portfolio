import React, { memo, useEffect, useRef, useState } from 'react'
import useOnScreen from '../../Hooks/useOnScreen'
import './SkillsRatingBars.css'

const SkillsRatingBars = ({skillName, icon, skillPercentage, style}) => {

    const colors = ["#FD2155", "#E4EE89", "#80D8F6", "#FEA400", "#D36DD5"];
    const [index, setIndex] = useState(-1)

    const overlayRef = useRef()
    const isVisible = useOnScreen(overlayRef)

    useEffect(() => {
        if(index === -1){
            setIndex((Math.floor((Math.random()*5) + 0)))
        }

        if(isVisible){
            overlayRef.current.style.width = `${skillPercentage}%`
        }
    }, [isVisible])

  return (
    <div style = {style && style} className='skills-ratings-bars__full-div'>
        <div style = {{
            color : colors[index]
        }} className='skills-ratings-bars__icon-div'>
            {icon}
        </div>
        <div className='skills-ratings-bars__name-rating__div'>
            <p className='skills-ratings-bars__skill-name'>{skillName}</p>
            <div className='skills-ratings-bars__rating'>
                <div style ={{
                backgroundColor : colors[index]
            }} ref = {overlayRef} className='skills-ratings-bars__rating-overlay'/>
            </div>
        </div>
    </div>
  )
}

export default memo(SkillsRatingBars)