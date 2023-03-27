import React, { forwardRef, memo, Suspense } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import './MyImage.css'

const MyImage = ({ image }, ref) => {

  return (
    <Suspense fallback={<></>}>
      <div className={'lazy-load__image-div ' + image.props.className} ref={ref}>
        <LazyLoadImage
          placeholderSrc='/logo512.png'
          height='100%'
          width='100%'
          ref={ref}
          src={image.props.src}
          alt={image.props.alt}
          effect='blur'
        />
      </div>
    </Suspense>

  )
}

export default memo(forwardRef(MyImage))