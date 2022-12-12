import React from 'react'
import { useWebSnap, useWebSnapHostLink, useWebSnapUpdate } from '../../context/webSnapContext'
import './Modal.css'

const Modal = () => {

  const webSnap = useWebSnap()
  const updateWebSnap = useWebSnapUpdate()
  const hostLink = useWebSnapHostLink()

  return (
    <div onClick={() => {
        updateWebSnap(null)
    }} style = {{display : webSnap && 'block'}} className='modal__full-div'>
      <a className='modal-link' href = {hostLink}>{hostLink}</a>
    </div>
  )
}

export default Modal