import React, { useEffect, useRef } from 'react'
import './SkillLeaves.css'

const SkillLeaves = ({text1, text2, diameter, delay}) => {

  const colors = ['#08FDD8', '#FD2155', '#FFFFFF']

  const divRef1 = useRef()
  const textRef1 = useRef()
  const divRef2 = useRef()
  const textRef2 = useRef()

  useEffect(() => {
    if(delay !== undefined || delay !== null){
      setTimeout(() => {
        divRef1.current.style.animation = 'rotate 5s linear infinite'
        textRef1.current.style.animation = 'rotateText 5s linear infinite'
        divRef2.current.style.animation = 'rotate 5s linear infinite'
        textRef2.current.style.animation = 'rotateText 5s linear infinite'
      }, delay)
    }
  }, [delay])

  return (
    <>
      <div ref={divRef1} style = {{width : diameter}} className='skill-leaves__full-div skill-leaves__full-div-right'>
          <span ref = {textRef1} style = {{color : colors[(Math.floor((Math.random()*3) + 0))]}} className='skill-leaves__text skill-leaves__text-right'>{text1}</span>
      </div>
      <div ref={divRef2} style = {{width : diameter}} className='skill-leaves__full-div skill-leaves__full-div-left'>
          <span ref = {textRef2} style = {{color : colors[(Math.floor((Math.random()*3) + 0))]}} className='skill-leaves__text skill-leaves__text-left'>{text2}</span>
      </div>
    </>
  )
}

export default SkillLeaves