import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import InstitutionCard from "../../components/InstitutionCard/InstitutionCard";
import "./MeSoFar.css";

const MeSoFar = () => {
    return (
        <div className="me-so-far__container-div">
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
                    text="Me So-far"
                    // textColor='#FD2155'
                />
                <span style={{ marginLeft: "30px" }} className="html_tags">
                    {"</ h1 >"}
                </span>
            </div>
            <br/>
            <div className="me-so-far__full-div">
                <div className="me-so-far__institution-card__container">
                    <InstitutionCard id="card_1" 
                        imgSrc='https://lh5.googleusercontent.com/p/AF1QipN-PoE3I4ukQ_Ag1yyYQwG0a0g4rp-e13Y_y2vX=w408-h305-k-no'
                        timeSpan='2005 - 2010'
                        institutionName='R.K. Children Paradise'
                        desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <InstitutionCard id="card_2" 
                        imgSrc='https://scontent.fccu13-4.fna.fbcdn.net/v/t1.18169-9/10402633_637400416345180_3757204598831636935_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T6XauEdQP7sAX_MnwWO&_nc_ht=scontent.fccu13-4.fna&oh=00_AfD32leIzfzUN3417ArSdxuDE4K6JZ2WL2xDEt0O2lBp8w&oe=63BE5675'
                        timeSpan='2010 - 2016'
                        institutionName='Kalyani University Experimental High School'
                        desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <InstitutionCard id="card_3" 
                        imgSrc = 'https://lh5.googleusercontent.com/p/AF1QipOXil4zblHJmjEYFNGCz7_ucOK1WfrFBaYyfXSc=w408-h306-k-no'
                        timeSpan='2016 - 2018'
                        institutionName='Chakdaha Ramlal Academy'
                        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <InstitutionCard id="card_4" 
                        imgSrc='https://directory.edugorilla.com/wp-content/uploads/sites/6/2017/09/fiitjee-limited-raj-nagar-ghaziabad-11.jpg'
                        timeSpan='2018 - 2019'
                        desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        institutionName='FIITJEE'
                    />
                    <InstitutionCard id="card_5" 
                        imgSrc='https://assets.telegraphindia.com/telegraph/2021/Aug/1629653572_23metnit_4col.jpg'
                        timeSpan='2019 - 2023'
                        desc = 'Currently pursuing my bachelor degree here in Computer Science and Engineering.'
                        institutionName='National Institute of Technology, Durgapur'
                    />
                    <InstitutionCard id="card_6" 
                        imgSrc='https://scontent.fccu13-3.fna.fbcdn.net/v/t39.30808-6/308637957_457241656434466_3479681913126078030_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=53QHrJ9H2hoAX_soe2T&_nc_ht=scontent.fccu13-3.fna&oh=00_AfDcC8i04_LnNkvdsg7CkDrRbu7eF_lUrFYZvuDF3xxwsg&oe=639B8B03'
                        timeSpan='2022'
                        institutionName='Eco Alarmist'
                        desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <InstitutionCard id="card_7" 
                        imgSrc='https://spo.iitk.ac.in/preparation/images/1.jpg'
                        timeSpan='2022'
                        institutionName='IIT Kanpur'
                        desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </div>
            </div>
            <div>
                <span className="html_tags">{"< section >"}</span>
            </div>
        </div>
    );
};

export default MeSoFar;
