import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Navbar className="App-nav" inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a className="App-nav-title" href="/"><img src={logo} className="App-logo" alt="logo" /> React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </section>
    );
  }
}

export default App;
