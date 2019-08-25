import React, { Component } from 'react';
import { Grid, Image} from 'semantic-ui-react';
import resumePic from './resumeJPG.jpeg';

import './resumePage.css';
import Footer from '../Footer';

export default class ResumePage extends Component{
    render(){
        return(
            <div className="page" style={{"justifyContent": "left"}}>
                <br/>
                <h1 className="pageHeader"> Resume </h1> 
                <p className="greyCaption">Just my resume if you needed</p>
                <Grid>
                    <Grid.Row columns="two">
                        <Grid.Column width={10}>
                            <Image id="resume" bordered src={resumePic} />
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <br/>
                            <br/>
                            <p>This resume is updated as of July 17, 2019</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer/>
            </div>
        );
    }
}