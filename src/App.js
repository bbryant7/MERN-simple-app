import React, { Component } from 'react';
import './App.css';
import Form from './containers/Form';
import List from './containers/List';
import Data from './data'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {data: []}
  }
  render() {
    return (
      <div className="App">
          <h1>Let's Talk Kittens</h1>
          <Form />
          < List data={Data} />
      </div>
    );
  }
}

export default App;
