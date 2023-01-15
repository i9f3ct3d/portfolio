import React, { forwardRef, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import SkillLeaves from "../../components/SkillLeaves/SkillLeaves";
import { SiCplusplus, SiMongodb } from "react-icons/si";
import { VscSymbolArray } from "react-icons/vsc";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandPython } from "react-icons/tb";
import "./Skills.css";
import SkillsRatingBars from "../../components/SkillsRatingBars/SkillsRatingBars";
import useOnScreen from "../../Hooks/useOnScreen";

const Skills = ({ }, ref) => {

    const rightBorderRef = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if(isVisible){
            if(rightBorderRef && rightBorderRef.current){
                rightBorderRef.current.style.transform = 'translateY(0)'
                rightBorderRef.current.style.opacity = '1'
            }
        }
    }, [isVisible])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div ref={ref} className="skills__container-div">
            <div className="skills__full-div">
                <span style = {{transform : 'translateX(-10px)', display : 'block'}} className="html_tags">{"< section >"}</span>
                {/* <br /> */}
                <span style={{ marginLeft: "0px" }} className="html_tags">
                    {"< h1 >"}
                </span>
                <Header
                    style={{
                        marginLeft: "20px",
                    }}
                    text="My Skills"
                    textStyle = {{
                    fontFamily : 'Roboto',
                    fontSize : '5rem'
                }}
                />
                <span style={{ marginLeft: "20px" }} className="html_tags">
                    {"</ h1 >"}
                </span>
                <div className="skills__inner-div">
                    <div className="skills__rating-div">
                        <span style = {{transform : 'translateX(-10px)', display : 'block'}} className="html_tags desc_html_tags">{'<p>'}</span>
                            <p className="skills__desc">
                                Since the beginning of my journey as a Computer Science and Engineering student I tried stacking up some lovely tech skills and most of them are listed here. Some of them are from my college and others are learnt from online educational websites.
                                From my skill set you can probably assume that I quite much inclined towards development and want to build my career on that.
                            </p>
                        <span style = {{transform : 'translateX(-10px)', display : 'block'}} className="html_tags desc_html_tags">{'</p>'}</span>
                        <div ref = {rightBorderRef} className="skills__rating-div__right-border"/>
                        {/* <span className="html_tags">{"< ul >"}</span> */}
                        <SkillsRatingBars
                            style={{
                                marginLeft: "20px",
                            }}
                            icon={<SiCplusplus />}
                            skillName="C/ C++"
                            skillPercentage={95}
                        />
                        <SkillsRatingBars
                            style={{
                                marginLeft: "20px",
                            }}
                            icon={<VscSymbolArray />}
                            skillName="Data Structures & Algorithms"
                            skillPercentage={90}
                        />
                        <SkillsRatingBars
                            style={{
                                marginLeft: "20px",
                            }}
                            icon={<FaReact />}
                            skillName="React.js"
                            skillPercentage={85}
                        />
                        <SkillsRatingBars
                            style={{
                                marginLeft: "20px",
                            }}
                            icon={<FaNodeJs />}
                            skillName="Node.js"
                            skillPercentage={85}
                        />
                        <SkillsRatingBars
                            style={{
                                marginLeft: "20px",
                            }}
                            icon={<AiOutlineHtml5 />}
                            skillName="HTML"
                            skillPercentage={90}
                        />
                        <SkillsRatingBars
                            style={{
                                marginLeft: "20px",
                            }}
                            icon={<FaCss3Alt />}
                            skillName="CSS"
                            skillPercentage={85}
                        />
                        <SkillsRatingBars
                            style={{
                                marginLeft: "20px",
                            }}
                            icon={<SiMongodb />}
                            skillName="MongoDB"
                            skillPercentage={75}
                        />
                        <SkillsRatingBars
                            style={{
                                marginLeft: "20px",
                            }}
                            icon={<TbBrandPython />}
                            skillName="Python"
                            skillPercentage={70}
                        />
                    </div>
                    <div className="skill-leaves__container">
                        <SkillLeaves
                            diameter="100px"
                            text1={<span>BootStrap</span>}
                            text2={<span>Dart</span>}
                            delay = {0}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="200px"
                            text1={<span>C</span>}
                            text2={<span>JavaScript</span>}
                            delay = {700}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="250px"
                            text1={<span>HTML</span>}
                            text2={<span>React.js</span>}
                            delay = {1400}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="300px"
                            text1={<span>C++</span>}
                            text2={<span>Node.js</span>}
                            delay = {2100}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="250px"
                            text1={<span>CSS</span>}
                            text2={<span>Python</span>}
                            delay = {2800}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="200px"
                            text1={<span>MongoDB</span>}
                            text2={<span>Git</span>}
                            delay = {3500}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="100px"
                            text1={<span>MySQL</span>}
                            text2={<span>Flutter</span>}
                            delay = {4200}
                        />
                    </div>
                </div>
                <span style = {{transform : 'translateX(-10px)', display : 'block'}} className="html_tags">{"</ section >"}</span>
            </div>
        </div>
    );
};

export default forwardRef(Skills);
