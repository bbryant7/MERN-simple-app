import React, { Component } from 'react';
import axios from 'axios';
import List from './containers/List';
import Form from './containers/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getComments = this.getComments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  handleSubmit(comment){
    axios.post('http://localhost:3001/api/comments', comment)
      .then(res => {
        this.getComments()
      })
      .catch(error => {
        console.log(error)
      })

  }
  render() {
    return (
      <div  className='App'>
      <h1> Lets talk kittens </h1>
      <List data={ this.state.data }/>
      <Form onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;
