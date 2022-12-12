import React, { useEffect, useRef } from 'react'
import BouncyLetter from '../BouncyLetter/BouncyLetter'
import './Logo.css'

const Logo = ({style}) => {

    const underlineRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            underlineRef.current.style.width = '87px'
        }, 1400)
    }, [])

  return (
    <div style = {style && style} className='logo__full-div'>
        <BouncyLetter
            letter= 'S'
            className = 'logo__first-letter'
            timeout = {0}
        />
        <BouncyLetter className='logo__rest-name' letter='u' timeout={200}></BouncyLetter>
        <BouncyLetter className='logo__rest-name' letter='s' timeout={400}></BouncyLetter>
        <BouncyLetter className='logo__rest-name' letter='h' timeout={600}></BouncyLetter>
        <BouncyLetter className='logo__rest-name' letter='a' timeout={800}></BouncyLetter>
        <BouncyLetter className='logo__rest-name' letter='n' timeout={1000}></BouncyLetter>
        <BouncyLetter className='logo__rest-name' letter='t' timeout={1200}></BouncyLetter>
        <BouncyLetter className='logo__rest-name' letter='a' timeout={1400}></BouncyLetter>
        <div ref = {underlineRef} className='underline'></div>
    </div>
  )
}

export default Logo