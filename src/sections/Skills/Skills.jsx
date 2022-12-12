import React, { forwardRef } from "react";
import Header from "../../components/Header/Header";
import SkillLeaves from "../../components/SkillLeaves/SkillLeaves";
import { SiCplusplus, SiMongodb } from "react-icons/si";
import { VscSymbolArray } from "react-icons/vsc";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandPython } from "react-icons/tb";
import "./Skills.css";
import SkillsRatingBars from "../../components/SkillsRatingBars/SkillsRatingBars";

const Skills = ({ }, ref) => {
    return (
        <div ref={ref} className="skills__container-div">
            <div className="skills__full-div">
                <span className="html_tags">{"< section >"}</span>
                <br />
                <span style={{ marginLeft: "30px" }} className="html_tags">
                    {"< h1 >"}
                </span>
                <Header
                    style={{
                        marginLeft: "60px",
                    }}
                    text="My Skills"
                />
                <span style={{ marginLeft: "30px" }} className="html_tags">
                    {"</ h1 >"}
                </span>
                <div className="skills__inner-div">
                    <div className="skills__rating-div">
                        <span className="html_tags">{"< ul >"}</span>
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
                        <span className="html_tags">{"</ ul >"}</span>
                    </div>
                    <div className="skill-leaves__container">
                        <SkillLeaves
                            diameter="100px"
                            text1={<span>BootStrap</span>}
                            text2={<span>Dart</span>}
                            delay={Math.floor(Math.random() * 5000 + 1)}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="200px"
                            text1={<span>C</span>}
                            text2={<span>JavaScript</span>}
                            delay={Math.floor(Math.random() * 5000 + 1)}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="250px"
                            text1={<span>HTML</span>}
                            text2={<span>React.js</span>}
                            delay={Math.floor(Math.random() * 5000 + 1)}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="300px"
                            text1={<span>C++</span>}
                            text2={<span>Node.js</span>}
                            delay={Math.floor(Math.random() * 5000 + 1)}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="250px"
                            text1={<span>CSS</span>}
                            text2={<span>Python</span>}
                            delay={Math.floor(Math.random() * 5000 + 1)}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="200px"
                            text1={<span>MongoDB</span>}
                            text2={<span>Git</span>}
                            delay={Math.floor(Math.random() * 5000 + 1)}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SkillLeaves
                            diameter="100px"
                            text1={<span>MySQL</span>}
                            text2={<span>Flutter</span>}
                            delay={Math.floor(Math.random() * 5000 + 1)}
                        />
                    </div>
                </div>
                <span className="html_tags">{"</ section >"}</span>
            </div>
        </div>
    );
};

export default forwardRef(Skills);
