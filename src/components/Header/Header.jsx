import React, { useEffect, useState } from 'react'
import BouncyLetter from '../BouncyLetter/BouncyLetter'
import './Header.css'

const Header = ({text, style, textColor}) => {

    const [letterArray, setLetterArray] = useState([]);

    const convertTextToBouncyLetter = (text) => {

        for(let i = 0 ; i < text.length ; i++){
            setLetterArray((prev) => [...prev, text[i]])
        }
    }

    useEffect(() => {
        if(text && text.length && letterArray.length === 0){
            convertTextToBouncyLetter(text)
        }
    }, [text])

  return (
    <div style = {style && style} className='header__full-div'>
        {
            letterArray && letterArray.map((letter, i) => {
                if(i >= text.length) return <div key = {i}></div>
                if(letter == ' ') return <div key = {i} style={{
                width: '10px',
                height : '1px',
                display: 'inline-block'
            }} />
                return <BouncyLetter
                    key = {i}
                    letter = {letter}
                    className = 'header_text'
                    timeout={i * 200}
                    letterStyle = {{
                        color : textColor && textColor
                    }}
                />
            })
        }
    </div>
  )
}

export default Header