import React, { Component } from 'react';
import './App.css';
import Form from './containers/Form'
import List from './containers/List'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Let's Talk Kittens</h1>
          <Form />
          <List />
      </div>
    );
  }
}

export default App;
