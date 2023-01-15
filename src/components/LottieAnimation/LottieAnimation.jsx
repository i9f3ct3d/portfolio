
import {memo,forwardRef, useEffect, useState} from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({ lotti, width, height , isStopped , isloop , speed, style} , ref) => {

  const [modSpeed , setModSpeed] = useState(1);
    
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      clearCanvas : true,
    },
    
  };

  useEffect(()=>{

    speed && setModSpeed(speed)

  },[speed])

  return (

    // <>
      <Lottie style = {style && style} speed={modSpeed} isClickToPauseDisabled = {true} isStopped = {isStopped ? isStopped : false} ref={ref} options={defaultOptions} height={height} width={width} />
    // </>
    
  );
};

export default memo(forwardRef(LottieAnimation));