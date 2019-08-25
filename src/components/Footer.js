import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import './headandfeet.css'

export default class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <Grid style={{height: "100%"}} stackable>
                    <Grid.Row style={{height: "100%"}}>
                        <Grid.Column width={6}>
                            <div className="footerDiv" style={{border: "5px solid #4183c4", width: "20vh", margin: "5vh auto 5vh 5vh", float: "left"}}>
                                <h4 className="footerText" style={{bottom: "2px", right: "3px", textAlign: "right"}}>josiah lee design</h4>
                            </div>
                            <div className="footerDiv" style={{width: "30vh", float: "left"}}>
                                <h4 className="footerText" style={{bottom: "5px", left: "11px", textAlign: "left"}}><a href="mailto:josiahwlee@gmail.com">email  > josiahwlee@gmail.com</a></h4>
                                <h4 className="footerText" style={{bottom: 0, left: "11px", textAlign: "left"}}>phone  > 510 205 0835</h4>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <div className="footerDiv" style={{width: "100%", float: "right", textAlign: "right"}}>
                                <h4 className="footerText" style={{bottom: 0, float: "right"}}>
                                    <a className="footerLink" href="/">{"  Home  "}</a>| 
                                    <a className="footerLink" href="/Photography">{"  Photography  "}</a>| 
                                    <a className="footerLink" href="/Programming">{"  Programming  "}</a>| 
                                    <a className="footerLink" href="/Resume">{"  Resume  "}</a>| 
                                    <a className="footerLink" href="/Travels">{"  Travels  "}</a>
                                </h4>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}