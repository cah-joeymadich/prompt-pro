import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import logo from '../../logo.svg';
import './TopNav.css';

class TopNav extends Component {
    render() {
        return (
            <Navbar className="Topnav" inverse fixedTop>
                <Grid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className="Topnav-title" href="/"><img src={logo} className="logo" alt="logo" /> {this.props.title}</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Grid>
            </Navbar>
        );
    }
}

export default TopNav;