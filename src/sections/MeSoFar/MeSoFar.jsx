import React, { memo, useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import InstitutionCard from "../../components/InstitutionCard/InstitutionCard";
import useOnScreen from "../../Hooks/useOnScreen";
import "./MeSoFar.css";

const MeSoFar = () => {

    const [animate, setAnimate] = useState(false)
    const institutionCardContainerRef = useRef()

    const isVisible = useOnScreen(institutionCardContainerRef)

    useEffect(() => {
        if(isVisible && !animate){
            setAnimate(true)
        }
    }, [isVisible])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className="me-so-far__container-div">
            <div>
                <span style={{transform : 'translateX(-10px)', display : 'block'}} className="html_tags">{"< section >"}</span>
                <span style={{ marginLeft: "0px" }} className="html_tags">
                    {"< h1 >"}
                </span>
                <Header
                    style={{
                        marginLeft: "20px",
                    }}
                    textStyle={{
                        fontFamily: 'Roboto',
                        fontSize: '5rem'
                    }}
                    text="Me So-far"
                />
                <span style={{ marginLeft: "0px" }} className="html_tags">
                    {"</ h1 >"}
                </span>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="me-so-far__full-div">
                <div ref = {institutionCardContainerRef} className="me-so-far__institution-card__container">
                            <InstitutionCard id="card_1"
                                imgSrc='https://lh5.googleusercontent.com/p/AF1QipN-PoE3I4ukQ_Ag1yyYQwG0a0g4rp-e13Y_y2vX=w408-h305-k-no'
                                timeSpan='2005 - 2010'
                                institutionName='R.K. Children Paradise'
                                desc="Spent my nursery days here and continued studying upto 4th standard."
                                delay={0}
                                animate = {animate}
                            />
                            <InstitutionCard id="card_2"
                                imgSrc='https://scontent.fccu13-4.fna.fbcdn.net/v/t1.18169-9/10402633_637400416345180_3757204598831636935_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T6XauEdQP7sAX_MnwWO&_nc_ht=scontent.fccu13-4.fna&oh=00_AfD32leIzfzUN3417ArSdxuDE4K6JZ2WL2xDEt0O2lBp8w&oe=63BE5675'
                                timeSpan='2010 - 2016'
                                institutionName='Kalyani University Experimental High School'
                                desc="Joined to complete my secondary schooling here at K.U.E.H.S."
                                delay={200}
                                animate = {animate}
                            />
                            <InstitutionCard id="card_3"
                                imgSrc='https://lh5.googleusercontent.com/p/AF1QipOXil4zblHJmjEYFNGCz7_ucOK1WfrFBaYyfXSc=w408-h306-k-no'
                                timeSpan='2016 - 2018'
                                institutionName='Chakdaha Ramlal Academy'
                                desc="Again transitioned to C.R.L.A. to continue my study on higher secondary level."
                                delay={400}
                                animate = {animate}
                            />
                            <InstitutionCard id="card_4"
                                imgSrc='https://directory.edugorilla.com/wp-content/uploads/sites/6/2017/09/fiitjee-limited-raj-nagar-ghaziabad-11.jpg'
                                timeSpan='2018 - 2019'
                                desc="Took a one-year break to freshen up and show up for JEE with new energy and a clear state of mind."
                                institutionName='FIITJEE'
                                delay={600}
                                animate = {animate}
                            />
                            <InstitutionCard id="card_5"
                                delay={800}
                                imgSrc='https://assets.telegraphindia.com/telegraph/2021/Aug/1629653572_23metnit_4col.jpg'
                                timeSpan='2019 - 2023'
                                desc='Currently pursuing my bachelor degree in Computer Science and Engineering from here. And this has been the spiciest phase of my life.'
                                institutionName='National Institute of Technology, Durgapur'
                                animate = {animate}
                            />
                            <InstitutionCard id="card_6"
                                delay={1000}
                                imgSrc='https://scontent.fccu13-3.fna.fbcdn.net/v/t39.30808-6/308637957_457241656434466_3479681913126078030_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=53QHrJ9H2hoAX_soe2T&_nc_ht=scontent.fccu13-3.fna&oh=00_AfDcC8i04_LnNkvdsg7CkDrRbu7eF_lUrFYZvuDF3xxwsg&oe=639B8B03'
                                timeSpan='2022'
                                institutionName='Eco Alarmist'
                                animate = {animate}
                                desc="Joined as a Web Development Internee at summer to complete my summer internship program."
                                isWork={true}
                            />
                            <InstitutionCard id="card_7"
                                delay={1200}
                                imgSrc='https://spo.iitk.ac.in/preparation/images/1.jpg'
                                timeSpan='2022'
                                institutionName='IIT Indore'
                                animate = {animate}
                                desc="I appeared for a research internship as well in the same time span of summer."
                                isWork={true}
                            />
                </div>
            </div>
            <div>
                <span style={{transform : 'translateX(-10px)', display : 'block'}} className="html_tags">{"< section >"}</span>
            </div>
        </div>
    );
};

export default memo(MeSoFar);
