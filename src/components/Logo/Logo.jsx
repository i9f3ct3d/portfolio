import React, { useEffect, useRef } from 'react'
import BouncyLetter from '../BouncyLetter/BouncyLetter'
import { useNavigate } from 'react-router-dom'
import './Logo.css'

const Logo = ({ style, className }) => {

    const underlineRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            underlineRef.current.style.width = '87px'
        }, 1400)
    }, [])

    return (
        <div onClick={() => {
            navigate('/')
        }} style={style && style} className={'logo__full-div ' + className}>
            <BouncyLetter
                letter='S'
                className='logo__first-letter'
                timeout={0}
            />
            <BouncyLetter letterStyle={{
                position : 'relative'
            }} className='logo__rest-name' letter='u' timeout={200}>
                <span ref={underlineRef} className='underline'></span>
            </BouncyLetter>
            <BouncyLetter className='logo__rest-name' letter='s' timeout={400}></BouncyLetter>
            <BouncyLetter className='logo__rest-name' letter='h' timeout={600}></BouncyLetter>
            <BouncyLetter className='logo__rest-name' letter='a' timeout={800}></BouncyLetter>
            <BouncyLetter className='logo__rest-name' letter='n' timeout={1000}></BouncyLetter>
            <BouncyLetter className='logo__rest-name' letter='t' timeout={1200}></BouncyLetter>
            <BouncyLetter className='logo__rest-name' letter='a' timeout={1400}></BouncyLetter>
        </div>
    )
}

export default Logo