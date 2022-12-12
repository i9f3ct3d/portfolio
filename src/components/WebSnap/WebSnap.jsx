import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaGithubSquare } from 'react-icons/fa'
import "./WebSnap.css";
import { useWebSnap, useWebSnapGithubLink, useWebSnapGithubLinkUpdate, useWebSnapHostLink, useWebSnapHostLinkUpdate, useWebSnapUpdate } from "../../context/webSnapContext";

const WebSnap = ({ }) => {
  const webSnap = useWebSnap();
  const webSnapUpdate = useWebSnapUpdate();
  const githubLink = useWebSnapGithubLink()
  const updateGithubLink = useWebSnapGithubLinkUpdate()
  const updateHostLink = useWebSnapHostLinkUpdate()

  return (
    <div
      style={{
        visibility: !webSnap && "hidden",
      }}
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
