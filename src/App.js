import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { lazy, useRef, Suspense } from "react";
import { WebSnapContextProvider } from "./context/webSnapContext";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";

const WebSnap = lazy(() => import("./components/WebSnap/WebSnap"))
const ContactMe = lazy(() => import("./sections/ContactMe/ContactMe"))
const AboutMe = lazy(() => import("./sections/AboutMe/AboutMe"))
const Intro = lazy(() => import("./sections/Intro/Intro"))
const Skills = lazy(() => import("./sections/Skills/Skills"))
const Projects = lazy(() => import("./sections/Projects/Projects"))
const MeSoFar = lazy(() => import("./sections/MeSoFar/MeSoFar"))

function App() {
  const skillRef = useRef();
  const cursorRef = useRef()

  const onMouseMoveHandler = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = e.clientX + "px"
      cursorRef.current.style.top = e.clientY + "px"
    }
  }



  return (
    <div onClick={() => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('expand')

        setTimeout(() => {
          cursorRef.current.classList.remove('expand')
        }, 500)
      }
    }} onMouseMove={(e) => { onMouseMoveHandler(e) }} className="App">
      {!window.matchMedia("(pointer: coarse)").matches && <div ref={cursorRef} className="custom_cursor" />}
      <div
        className="base-background"
      >
        <WebSnapContextProvider>
          <Router>
            <Modal />
            <Navbar />
            <Suspense fallback={<></>}>
              <WebSnap />
            </Suspense>
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<>Loading...</>}>
                    <Intro />
                    <br />
                    <AboutMe />
                    <br />
                    <br />
                    <ContactMe />
                  </Suspense>
                }
              />
              <Route path="skills" element={<Suspense fallback={<>Loading...</>}><Skills ref={skillRef} /></Suspense>} />
              <Route path="projects" element={<Suspense fallback={<>Loading...</>}><Projects /></Suspense>} />
              <Route path="me-so-far" element={<Suspense fallback={<>Loading...</>}><MeSoFar /></Suspense>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </WebSnapContextProvider>
      </div>
    </div>
  );
}

export default App;
