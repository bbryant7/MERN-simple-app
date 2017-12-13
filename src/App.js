import React, { Component } from 'react';
import axios from 'axios';
import List from './containers/List';
import Form from './containers/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getComments = this.getComments.bind(this);

  }
  getComments() {
    axios.get('http://localhost:3001/api/comments')
      .then(res => {
        this.setState({ data: res.data });
      })
  }
  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      <div  className='App'>
      <h1> Lets talk kittens </h1>
      <List data={ this.state.data }/>
      <Form />
      </div>
    )
  }
}

export default App;
