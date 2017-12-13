import React, { Component } from 'react';
import '../App.css';


export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {author: '', text:''};
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e){
    this.setState({author: e.target.value})
    console.log(e.target.value)
  }

  handleTextBoxChange(e){
    this.setState({text:e.target.value})
    console.log(e.target.value)
  }

  handleSubmit(e){
    console.log("yayyy kittens!")
  }
  render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
        <input
          type='text'
          placeholder="User Name"
          value={this.state.author}
          onChange={this.handleAuthorChange} />
        <textarea
          type='text'
          placeholder='kittens...'
          value={this.state.text}
          onChange={this.handleTextBoxChange} />

        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}
