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
      <div className="splash"> </div>
      <h1> Lets Talk Kittens </h1>
      <h2> Tips tricks and giggles for all things Kitten</h2>
      <Form onSubmit={this.handleSubmit}/>
      <List data={ this.state.data }/>

      </div>
    )
  }
}

export default App;
