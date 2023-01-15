import React from 'react'
import './CustomInput.css'

const CustomInput = ({ type, placeholder, style }) => {

    if (type === 'textarea') {
        return (
            <div style={style && style} className='custom-input__div'>
                <textarea style = {{
                    padding : '20px'
                }} className='custom-input' placeholder={placeholder} required />
                <div className='custom-input_border' />
            </div>
        )
    }

    return (
        <div style={style && style} className='custom-input__div'>
            <input className='custom-input' placeholder={placeholder} required />
            <div className='custom-input_border' />
        </div>
    )
}

export default CustomInput