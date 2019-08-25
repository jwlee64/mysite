import React, { Component } from 'react';
import { Modal, Image, Header, Grid } from 'semantic-ui-react';
import './photographyPage.css';

export default class PhotoSquare extends Component{
    render(){
        const trigger =  <img alt={this.props.name} src={this.props.img} style={{"margin-left": -75-this.props.offset }} className="photosquare" />;    
        return(
            <div className="photosquareContainer">
                <Modal closeIcon size="large" trigger={trigger} style={{maxHeight: "80vh", overflowY: "scroll", transform: "translate(0,-8vh)"}} >
                    <Modal.Header>{this.props.text && this.props.text.header}</Modal.Header>
                    <Modal.Content>
                        <Grid>
                            <Grid.Row columns='two' divided>
                                <Grid.Column width={12}>
                                    <Image bordered style={{maxWidth: "100%", maxHeight: "100%"}} src={this.props.imgFull ? this.props.imgFull : this.props.img} />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Header style={{color: "#BBB"}}>{this.props.text && this.props.text.place}</Header>
                                    <p>{this.props.text && this.props.text.body}</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>    
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}