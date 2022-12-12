import './App.css';
import Intro from './sections/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './sections/AboutMe/AboutMe';
import Skills from './sections/Skills/Skills';
import { forwardRef, useEffect, useRef, useState } from 'react';
import Projects from './sections/Projects/Projects';
import WebSnap from './components/WebSnap/WebSnap';
import Modal from './components/Modal/Modal';
import { WebSnapContextProvider } from './context/webSnapContext'
import MeSoFar from './sections/MeSoFar/MeSoFar';

function App() {

  const skillRef = useRef()

  return (
    <WebSnapContextProvider>
    <div className="App">
      <Modal/>
      <WebSnap
        // webImg = {webImg}
      />
      {/* <button onClick={() => {
        skillRef.current.scrollIntoView({
          behavior : 'smooth'
        })
      }} >Click Me</button> */}
      <Navbar/>
      <Intro/>
      <br/>
      <AboutMe/>
      <br/>
      <br/>
      <Skills
        ref = {skillRef}
      />
      <br/>
      <Projects/>
      <br/>
      <MeSoFar/>
    </div>
    </WebSnapContextProvider>
  );
}

export default App;
