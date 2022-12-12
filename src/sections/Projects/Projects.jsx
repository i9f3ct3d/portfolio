import React, { lazy, Suspense, useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import useOnScreen from '../../Hooks/useOnScreen'
import PostifyImg from '../../Images/postifyImg.png'
import GifssyImg from '../../Images/gifssyImg.png'
import PortfolioImg from '../../Images/portfolioImg.png'
import ClassroomImg from '../../Images/classroomImg.png'
import ChathereImg from '../../Images/chathereImg.jpg'
import GifssyWeb from '../../Images/gifssyWeb.png'
import PostifyWeb from '../../Images/postifyWeb.png'
import PorfolioWeb from '../../Images/portfolioWeb.png'
import ChathereWeb from '../../Images/chathereWeb.jpg'
import ClassroomWeb from '../../Images/classroomWeb.png'
import './Projects.css'
// const GifssyWeb = lazy(() => import('../../Images/gifssyWeb.png'))
// import useWebSnap from '../../Hooks/useWebSnap'

const Projects = ({}) => {

    const gridRef = useRef();
    const isVisible = useOnScreen(gridRef)

    useEffect(() => {
        if(isVisible){
            if(gridRef.current.classList.contains('animated')) return;
            gridRef.current.classList.add('animated')
        }else{
            if(!gridRef.current.classList.contains('animated')) return;
            gridRef.current.classList.remove('animated')
        }
    }, [isVisible])

    return (
        <div className='projects__container-div'>
            <div>
                <span className="html_tags">{"< section >"}</span>
                <br />
                <span style={{ marginLeft: "30px" }} className="html_tags">
                    {"< h1 >"}
                </span>
                <Header
                    style={{
                        marginLeft: "60px",
                    }}
                    text="My Works"
                />
                <span style={{ marginLeft: "30px" }} className="html_tags">
                    {"</ h1 >"}
                </span>
            </div>
            <div className='projects__full-div'>
                    <div ref = {gridRef} className='projects__grid-container'>
                        <div className='project project1'>
                            <ProjectCard
                                img = {PostifyImg}
                                webSnapImg = {PostifyWeb}
                                webSnapHostLink = 'https://postify-sushanta.vercel.app/'
                                webSnapGithubLink = 'https://github.com/i9f3ct3d/POSTIFY-frontend'
                            />
                        </div>
                        <div className='project project2'>
                            <ProjectCard
                                img = {ClassroomImg}
                                webSnapImg = {ClassroomWeb}
                                webSnapGithubLink = 'https://github.com/ArnabPratimSaha/classroom_frontend'
                                webSnapHostLink= 'https://github.com/ArnabPratimSaha/classroom_frontend'
                            />
                        </div>
                        <div className='project project3'>
                         <ProjectCard
                            img = {PortfolioImg}
                            webSnapImg = {PorfolioWeb}
                            webSnapHostLink = '#'
                            webSnapGithubLink = '#'
                         />
                        </div>
                        <div className='project project4'>
                        {/* <Suspense fallback = {<></>}> */}
                        <ProjectCard
                                img = {GifssyImg}
                                // onButtonClick = {() => {setWebImg('GIFSSY_WEB_IMG')}}
                                webSnapImg = {GifssyWeb}
                                webSnapGithubLink = 'https://github.com/i9f3ct3d/GIFssY'
                                webSnapHostLink='https://gifssy.vercel.app/'
                            />
                            {/* </Suspense> */}
                        </div>
                        <div className='project project5'>
                            <ProjectCard
                                img = {ChathereImg}
                                webSnapImg = {ChathereWeb}
                                webSnapGithubLink = 'https://github.com/i9f3ct3d/Chathere-apk'
                                webSnapHostLink= 'https://github.com/i9f3ct3d/Chathere-apk'
                                // onButtonClick = {() => {setWebImg('CHATHERE_WEB_IMG')}}
                            />
                        </div>
                    </div>
            </div>
            <div>
                <span className="html_tags">{"< section >"}</span>
            </div>
        </div>
    )
}

export default Projects