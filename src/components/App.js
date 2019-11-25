import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import TopNav from './navigation/TopNav';
import './App.css';


class App extends Component {
  render() {
    return (
      <section className="App">
        <TopNav title="React App"/>
        <Jumbotron>
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
        </Jumbotron>
      </section>
    );
  }
}

export default App;
