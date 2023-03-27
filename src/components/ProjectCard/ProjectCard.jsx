import React, { lazy, memo, Suspense } from 'react'
import { useWebSnapGithubLinkUpdate, useWebSnapHostLinkUpdate, useWebSnapUpdate } from '../../context/webSnapContext'
import './ProjectCard.css'
const MyImage = lazy(() => import('../MyImage/MyImage'))

const ProjectCard = ({ img, webSnapImg, webSnapGithubLink, webSnapHostLink }) => {

  const updateWebSnap = useWebSnapUpdate()
  const updateGithubLink = useWebSnapGithubLinkUpdate()
  const updateHostLink = useWebSnapHostLinkUpdate()

  return (
    <div className='project-card__full-div'>
      <Suspense fallback={<></>}>
        <MyImage
          image={<img className='project-card__image' alt='img' src={img} />}
        />
      </Suspense>
      <div onClick={() => {
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

export default memo(ProjectCard)