import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProgrammingRow from './ProgrammingRow';

import mysite from './photos/mysite.jpeg';
import RCHIDash from './photos/RCHIDash.jpeg';
import RCHITable from './photos/RCHITable.jpeg';
import Footer from '../Footer';

export default class ProgrammingPage extends Component{
    render(){
        const text = {
            mysite: "The first example of something I built is this website! This website is built in React with different javascript libraries. Currently it is not live but I think it looks pretty nice! This was built mostly in React with Semantic-UI.",
            RCHIDash: "This is a Dashboard within the Riverside County Health Informatics WebApp, I made in React. Though this is also in React I believe it demonstrates a different design approach, and the very useful skill of data visualization. It also uses the Bootstrap and React Chartjs 2 libraries to their maximum. These dashboards were built for Riverside County to organize data on the homeless with the end goal of finding trends so as to better combat homelessness in Riverside County!",
            RCHITable: "This is another page in the Riverside County Health Informatics WebApp which gathers all of its data in Python. The data was aggregated and checked with Python scripts I wrote myself that scoured thousands of entries. That data was then imported into a backend database in SQLite within a Django Rest Framework. This demonstates my command of Python and some SQL to build a WebApp's backend.",
        }
        return(
            <div className="page" style={{"justifyContent": "left"}}>
                <br/>
                <h1 className="pageHeader"> Programming </h1> 
                <p className="greyCaption">A More in-depth look into my programming skills with pictures!</p>
                <br/>
                <Grid stackable divided style={{margin: "0 14px"}}>
                    <ProgrammingRow src={mysite} text={text.mysite} pside="left" keywords={["React", "Semantic-UI"]}/>
                    <ProgrammingRow src={RCHIDash} text={text.RCHIDash} pside="right" keywords={["Bootstrap", "Chart.js"]}/>
                    <ProgrammingRow src={RCHITable} text={text.RCHITable} pside="left" keywords={["Python", "SQL", "Django-Rest-Framework"]}/>
                </Grid>
                <Footer/>
            </div>
        );
    }
}