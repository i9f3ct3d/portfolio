import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Intro from "./sections/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./sections/AboutMe/AboutMe";
import Skills from "./sections/Skills/Skills";
import { useRef } from "react";
import Projects from "./sections/Projects/Projects";
import WebSnap from "./components/WebSnap/WebSnap";
import Modal from "./components/Modal/Modal";
import { WebSnapContextProvider } from "./context/webSnapContext";
import MeSoFar from "./sections/MeSoFar/MeSoFar";
import ContactMe from "./sections/ContactMe/ContactMe";

function App() {
  const skillRef = useRef();
  const cursorRef = useRef()

  const onMouseMoveHandler = (e) => {
    if(cursorRef.current){
      cursorRef.current.style.left = e.clientX + "px"
      cursorRef.current.style.top = e.clientY + "px"
    }
  }

  

  return (
    <div onClick={() => {
      if(cursorRef.current){
        cursorRef.current.classList.add('expand')

        setTimeout(() => {
          cursorRef.current.classList.remove('expand')
        }, 500)
      }
    }} onMouseMove={(e) => {onMouseMoveHandler(e)}} className="App">
      {!window.matchMedia("(pointer: coarse)").matches && <div ref = {cursorRef} className="custom_cursor"/>}
      <div 
      className="base-background"
      >
      <WebSnapContextProvider>
        <Router>
          <Modal />
          <Navbar />
          <WebSnap />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Intro />
                  {/* <div
                    style = {{
                      width : '50%',
                      height : '2px',
                      backgroundColor : 'white'
                    }}
                  /> */}
                  <br />
                  <AboutMe />
                  <br/>
                  <br/>
                  <ContactMe />
                  
                  
                  {/* <br/>
                  <br/>
                  <br/>
                  <br/> */}
                </>
              }
            />
            <Route path="skills" element={<Skills ref={skillRef} />} />
            <Route path="projects" element={<Projects />} />
            <Route path="me-so-far" element={<MeSoFar />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </WebSnapContextProvider>
      </div>
    </div>
  );
}

export default App;
