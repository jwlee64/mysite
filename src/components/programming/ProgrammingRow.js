import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class ProgrammingPage extends Component{
    keywordsToHead = (keywords) => {
        let str = "";

        str += keywords[0];

        for (let i = 1; i < keywords.length; i++){
            str = `${str} + ${keywords[i]}`;
        }

        return str;
    } 

    render(){
        const { src, text, pside, keywords } = this.props;
        const kw = this.keywordsToHead(keywords);
        const PRHeader = {
            border: "1px solid #41b5c4",
            padding: "1vh 1vw"
        }
        return(
            pside === "left" ? (
                <Grid.Row columns="two" divided >
                    <Grid.Column width={8}>
                        <Image src={src} bordered style={{margin: "0 3vw 0 3vw", width: "calc(100% - 6vw)"}}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h1 className="accentText" style={PRHeader}>{kw}</h1>
                        <p style={{ margin: "5vh"}}>
                            {text}    
                        </p>
                    </Grid.Column>
                </Grid.Row>
            ) : (
                <Grid.Row columns="two" divided >
                    <Grid.Column width={8}>
                        <h1 className="accentText" style={PRHeader}>{kw}</h1>
                        <p style={{ margin: "5vh"}}>
                            {text}    
                        </p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image src={src} bordered style={{margin: "0 3vw 0 3vw", width: "calc(100% - 6vw)"}}/>
                    </Grid.Column>
                </Grid.Row>
            )
        );
    }
}
