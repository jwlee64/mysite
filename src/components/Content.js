import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import PhotographyPage from './photography/PhotographyPage';
import ResumePage from './resume/ResumePage';
import ProgrammingPage from './programming/ProgrammingPage';
import TravelsPage from './travels/TravelsPage';


export default class Content extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/Photography' component={PhotographyPage}/>
                <Route exact path='/Resume' component={ResumePage}/>
                <Route exact path='/Programming' component={ProgrammingPage}/>
                <Route exact path='/Travels' component={TravelsPage}/>
            </Switch>
        );
    }
}