import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'

import './headandfeet.css'

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

         
        const menu = this.state.width > 1000 ? (
                <Menu id="globalNav" stackable>
                    <Menu.Item
                    name='title'
                    id="logo"
                    onClick={this.handleItemClick} 
                    as={Link} to='/'
                    >
                        {/* <div style={{border: "5px solid #4183c4", width: "5vh", height:"5vh", margin: "5vh auto 5vh 5vh", float: "left", display: "inline-block"}}>
                            <p style={{color: "#4183c4",
    position: "absolute", bottom: "2px", right: "3px", textAlign: "right"}}>josiah lee design</p>
                        </div> */}
                        <h1>this is josiah lee</h1>
                    </Menu.Item>
                    <Menu.Item 
                    className="menuItem" 
                    name='photography' 
                    active={activeItem === 'photography'} 
                    onClick={this.handleItemClick} 
                    as={Link} to='/Photography'>
                        <p><Icon name="camera retro" size="large"/>Photography</p>
                    </Menu.Item>
                    <Menu.Item
                    className="menuItem" 
                    name='programming'
                    active={activeItem === 'programming'}
                    onClick={this.handleItemClick}
                    as={Link} to='/Programming'
                    >
                        <p><Icon name="computer" size="large"/>Programming</p>
                    </Menu.Item>
                    <Menu.Item
                    className="menuItem"
                    name='resume'
                    active={activeItem === 'resume'}
                    onClick={this.handleItemClick}
                    as={Link} to='/Resume'
                    >
                        <p><Icon name="newspaper outline" size="large"/>Resume</p>
                    </Menu.Item>
                    <Menu.Item
                    id="rightMostItem"
                    className="menuItem"
                    name='travel'
                    active={activeItem === 'travel'}
                    onClick={this.handleItemClick}
                    as={Link} to='/Travels'
                    >
                        <p><Icon name="plane" size="large"/>Travels</p>
                    </Menu.Item>
                </Menu>
            ) : (
                <Menu id="globalNav" vertical>
                    <Dropdown fluid selection text={<h1 id="logo">this is josiah lee</h1>} icon={<div id="menuIcon"><div className="bar"/><div className="bar"/><div className="bar"/></div>}>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/'>Home</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Photography'>Photography</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Programming'>Programming</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Resume'>Resume</Dropdown.Item>
                        <Dropdown.Item as={Link} to='/Travels'>Travels</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            )
        return menu;    
        
    }
}