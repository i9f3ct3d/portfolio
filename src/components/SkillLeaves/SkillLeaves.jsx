import React, { memo, useEffect, useRef } from 'react'
import './SkillLeaves.css'

const SkillLeaves = ({text1, text2, diameter, delay}) => {

  const colors = ["#0BD2B4", "#0BD2B4", "#0BD2B4", "#0BD2B4", "#0BD2B4"];

  const divRef1 = useRef()
  const textRef1 = useRef()
  const divRef2 = useRef()
  const textRef2 = useRef()

  useEffect(() => {
    if(delay !== undefined || delay !== null){
      setTimeout(() => {
        if(divRef1.current) divRef1.current.style.animation = 'rotate 2s linear infinite'
        if(textRef1.current) textRef1.current.style.animation = 'rotateText 2s linear infinite'
        if(divRef2.current) divRef2.current.style.animation = 'rotate 2s linear infinite'
        if(textRef2.current) textRef2.current.style.animation = 'rotateText 2s linear infinite'
      }, (delay + 500))
    }
  }, [delay])

  return (
    <>
      <div ref={divRef1} style = {{width : diameter}} className='skill-leaves__full-div skill-leaves__full-div-right'>
          <span ref = {textRef1} style = {{color : colors[(Math.floor((Math.random()*5) + 0))]}} className='skill-leaves__text skill-leaves__text-right'>{text1}</span>
      </div>
      <div ref={divRef2} style = {{width : diameter}} className='skill-leaves__full-div skill-leaves__full-div-left'>
          <span ref = {textRef2} style = {{color : colors[(Math.floor((Math.random()*5) + 0))]}} className='skill-leaves__text skill-leaves__text-left'>{text2}</span>
      </div>
    </>
  )
}

export default memo(SkillLeaves)