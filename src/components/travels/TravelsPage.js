import React, { Component } from 'react';
import { Grid, Image} from 'semantic-ui-react';

import Footer from '../Footer';

export default class TravelsPage extends Component{
    render(){
        return(
            <div className="page">
                <br/>
                <h1 className="pageHeader"> Travels </h1> 
                <p className="greyCaption">Here's where I've been and where I'll go</p>
                <Grid>
                    <Grid.Row columns="one">
                        <Grid.Column>
                        <h3>Sorry havent finished this page yet</h3>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer/>
            </div>
        );
    }
}