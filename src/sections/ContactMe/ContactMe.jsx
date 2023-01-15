import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import Button from '../../components/Button/Button'
import './ContactMe.css'

const ContactMe = () => {
    return (
        <div id = 'contact-me__id' className="contact-me__container-div">
            <div style = {{
                transform : 'translateX(-15px)'
            }} className='html_tags'>{'< section >'}</div>
            <br/>
            <div className='contact-me__header-div'>
                <p className='contact-me__header'>Contact</p>
            </div>
            <div className='contact-me__inner-div'>
                <div className='contact-me__form-div'>
                    <div className='contact-me__text-div'>
                    <p style = {{transform : 'translateX(-10px)'}} className='html_tags'>{'< p >'}</p>
                        <p className='contact-me__text'>
                            As I said earlier I am going to be a university graduate in a few months and currently I'm interested in exploring new technologies as well as applying them in projects. If there is something where I could be a helping hand please feel free to contact me.
                        </p>
                    <p style = {{transform : 'translateX(-10px)'}} className='html_tags contact-me__html-tag__p'>{'</ p >'}</p>
                    </div>
                    <CustomInput
                        placeholder='Name'
                        style={{
                            gridArea: '2 / 1 / 3 / 2',
                            marginTop : '10px'
                        }}
                    />
                    <CustomInput
                        placeholder='Email'
                        style={{
                            gridArea: '2 / 2 / 3 / 3',
                            marginTop : '10px'
                        }}
                    />
                    <br />
                    <CustomInput
                        type='textarea'
                        placeholder='Message'
                        style={{
                            height: '10rem',
                            gridArea : '3 / 1 / 4 / 3'
                        }}
                    />
                    <div className='contact-me__button-div'>
                        <Button
                            text='Contact Me'
                            style = {{
                                gridArea : '4 / 2 / 5 / 3',
                            }}
                        />
                    </div>
                </div>
                <div className='contact-me__map-div'>
                <iframe title = 'map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.8512886645556!2d88.54472177113453!3d23.127396532248355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8c39b3bc95ac5%3A0xe763f8602ec8b0da!2sPayradanga!5e0!3m2!1sen!2sin!4v1670947700543!5m2!1sen!2sin" width="100%" height="100%" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {
                window.innerWidth < 700 &&
            <>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </>    }
            <div style = {{
                transform : 'translateX(-15px)'
            }} className='html_tags'>{'< section >'}</div>
        </div>
    )
}

export default ContactMe