import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaGithubSquare } from 'react-icons/fa'
import "./WebSnap.css";
import { useWebSnap, useWebSnapGithubLink, useWebSnapGithubLinkUpdate, useWebSnapHostLinkUpdate, useWebSnapUpdate } from "../../context/webSnapContext";

const WebSnap = ({ }) => {
  const webSnap = useWebSnap();
  const webSnapUpdate = useWebSnapUpdate();
  const githubLink = useWebSnapGithubLink()
  const updateGithubLink = useWebSnapGithubLinkUpdate()
  const updateHostLink = useWebSnapHostLinkUpdate()

  const webSnapRef = useRef()

  useEffect(() => {
    if(webSnap){
      webSnapRef.current.classList.add('web-snap__full-div__visible')
    }else{
      webSnapRef.current.classList.remove('web-snap__full-div__visible')
    }
  } ,[webSnap])

  return (
    <div
      style={{
        visibility: !webSnap && "hidden",
      }}
      ref = {webSnapRef}
      className="web-snap__full-div"
    >
        <div className="web-snap__closer-div">
          <IoCloseOutline
            onClick={() => {
              webSnapUpdate(null);
              updateGithubLink("")
              updateHostLink("")
            }}
          />
        </div>
        <FaGithubSquare
          className="web-snap__github-icon"
          onClick={() => {
            window.open(githubLink)
          }}
        />
        <img className="web-snap__image" src={webSnap} alt="img" />
    </div>
  );
};

export default WebSnap;
