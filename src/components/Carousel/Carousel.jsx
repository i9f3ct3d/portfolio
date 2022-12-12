import React, { useEffect, useState } from 'react'
import './Carousel.css'

const Carousel = ({elementsArray}) => {

    useEffect(() => {
        if(elementsArray && elementsArray.length){
            divClickHandler(1)
        }
    }, [elementsArray])

    const changeStyle = (ele, newZIndex, newTransform) => {
      ele.style.zIndex = newZIndex;
      ele.style.transform = newTransform;
    };
  
    const divClickHandler = (index) => {
  
      let ele = document.getElementsByClassName(`div${index}`)[0];
      changeStyle(ele, elementsArray.length, "translate(50%, -50%) scale(1)");
  
      let left = index - 1;
      let right = index + 1;
      let zIndex = elementsArray.length - 1;
      let transform = 0.9;
  
      for (let i = left; i > 0; i--) {
        changeStyle(
          document.getElementsByClassName(`div${i}`)[0],
          zIndex,
          "translate(" + (50 - ((1 - transform) * 50)) + "%, -50%) scale(" + transform + ")"
        );
        zIndex--;
        transform -= 0.1;
      }
  
      zIndex = elementsArray.length - 1;
      transform = 0.9;
  
      for (let i = right; i <= elementsArray.length; i++) {
        changeStyle(
          document.getElementsByClassName(`div${i}`)[0],
          zIndex,
          "translate(" + (50 + ((1 - transform) * 50)) + "%, -50%) scale(" + transform + ")"
        );
        zIndex--;
        transform -= 0.1;
      }

      
    };
  
    return (
      <div className='carousel__container'>
        {/* <button onClick={() => {
            document.getElementsByClassName('div1')[0].style.transform = 'translate(45%, -50%) scale(0.9)'
        }} >Click Me</button> */}
        {elementsArray &&
          elementsArray.map((ele, i) => {
            return (
              <div
                className={`div div${i+1}`}
                key={i}
                onClick={(e) => {
                  divClickHandler(i + 1);
                }}
              >
                {ele}
              </div>
            );
          })}
      </div>
    );
}

export default Carousel