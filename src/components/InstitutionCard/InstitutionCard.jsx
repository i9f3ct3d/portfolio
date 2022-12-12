import React, { useRef } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import './InstitutionCard.css'

const InstitutionCard = ({style, imgSrc, id, institutionName, timeSpan, desc, link}) => {

    const textDivRef = useRef()

    const institutionCardOnMouseEnterHandler = () => {
        setTimeout(() => {
            if(textDivRef.current.classList.contains('animate-text__div')) return;
            textDivRef.current.classList.add('animate-text__div')
            // textDivRef.current.style.transform = 'translateY(calc(-100% + 4.8rem))'
        }, 500)
    }

    const institutionCardOnMouseOutHandler = () => {
        if(!textDivRef.current.classList.contains('animate-text__div')) return;
        textDivRef.current.classList.remove('animate-text__div')
        // textDivRef.current.style.transform = 'translateY(0)'
    }

  return (
    <div
    id = {id}
    style = {style && style}
    // onMouseEnter={institutionCardOnMouseEnterHandler} 
    // onMouseLeave = {institutionCardOnMouseOutHandler} 
    className='institution-card__full-div'>
        <div className='institution-card__image-div'>
            <img src = {imgSrc} className='institution-card__image' alt = 'img'/>
        </div>
            <span className='institution-card__time'>{timeSpan}</span>
        <div ref = {textDivRef} className='institution-card__text-div'>
            <FaGraduationCap
                className='institution-card__icon'
            />
            <br/>
            <p className='institution-card__header'>{institutionName}</p>
            <br/>
            <br/>
            <p className='institution-card__desc'>{desc}</p>
            <br/>
            <button className='institution-card__button'>LEARN MORE</button>
            <br/>
            <br/>
        </div>
    </div>
  )
}

export default InstitutionCard