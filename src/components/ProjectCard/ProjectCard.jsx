import React from 'react'
import { useWebSnapGithubLinkUpdate, useWebSnapHostLinkUpdate, useWebSnapUpdate } from '../../context/webSnapContext'
import './ProjectCard.css'

const ProjectCard = ({img, webSnapImg, webSnapGithubLink, webSnapHostLink}) => {

  const updateWebSnap = useWebSnapUpdate()
  const updateGithubLink = useWebSnapGithubLinkUpdate()
  const updateHostLink = useWebSnapHostLinkUpdate()

  return (
    <div className='project-card__full-div'>
        <img className='project-card__image' alt = 'img' src = {img} />
        <div onClick = {() => {
            updateWebSnap(webSnapImg)
            updateGithubLink(webSnapGithubLink)
            updateHostLink(webSnapHostLink)
        }} className='project-card__button'>
            <div>VIEW</div>
            <div>PROJECT</div>
        </div>
    </div>
  )
}

export default ProjectCard