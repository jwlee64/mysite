import React, { Component } from 'react';
import Footer from './Footer';

import './homepage.css';

export default class HomePage extends Component{
    render(){
        return(
            <div className="page" id="homepage" style={{alignContent: "center"}}>
                <br/>
                <div style={{maxWidth: "1000px", margin: "0 auto 0 auto", backgroundColor: "#FFFFFFBB", padding: "3vh 0 5vh 0"}}>
                    <h1 className="pageHeader"> Home </h1>
                    <div style={{border: ".3rem solid #41b5c4", padding: "2vh", margin: "0 2vw 0 2vw"}}>
                        <h4 className="greyCaptionDark" style={{margin: "0 5vw 0 5vw", lineHeight: "2rem"}}>
                            <span className="accentText greyCaption">Hi! My name is Josiah Lee</span> 
                        </h4>
                        {/* <br/> */}
                        <h2>If your a company looking to hire, here is why I would be great working for you.</h2>
                        <h4 className="greyCaptionDark" style={{margin: "0 5vw 0 5vw", lineHeight: "2rem"}}>
                            <span className="accentText">_</span> I am <span className="accentText">SMART</span>. I currently have 3.7 GPA in one of the hardest most competitive majors at UCR. <span className="accentText">_</span> 
                        </h4>
                        <h4 className="greyCaptionDark" style={{margin: "0 5vw 0 5vw", lineHeight: "2rem"}}>
                            <span className="accentText">_</span>  I am a <span className="accentText">HARDWORKER</span>. I have worked hard in my life. While in college, to take the load off my parents I worked at Dominos Pizza for over a year.
                            It was hard work, and I put in sometimes 25+ hours a week, balancing my school, job, fitness, and friends, only through not wasting time and working hard. <span className="accentText">_</span> 
                        </h4>
                        <h4 className="greyCaptionDark" style={{margin: "0 5vw 0 5vw", lineHeight: "2rem"}}>
                            <span className="accentText">_</span>  I am a <span className="accentText">TEAMPLAYER</span>. I have worked in a variety of places and environments with incredibly different people from me and have connected 
                            with people across the globe. See my Travels page above for more information on where I have been. <span className="accentText">_</span>  
                        </h4>
                        <br/>
                        <h2>If your want to know a little more about me, click the links below, or in the navbar above!</h2>
                        <h4 className="greyCaptionDark" style={{margin: "0 5vw 0 5vw", lineHeight: "2rem"}}>
                            Currently, I am a senior in Computer Science at the University of California, Riverside. I have 
                            had <a href="/Resume" className="accentTextLinks" >THREE</a> Computer Science Jobs, where I have done a wide variety 
                            of projects in <a href="/Programming" className="accentTextLinks" >DIFFERENT LANGUAGES</a> and libraries. For fun I like to 
                            take <a href="/Photography" className="accentTextLinks" >PHOTOS</a>, play basketball, and <a href="/Travels" className="accentTextLinks" >TRAVEL</a>.  
                        </h4>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}