import React, { Component } from "react";
import axios from "axios";
import List from "./containers/List";
import Form from "./containers/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getComments = this.getComments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getComments() {
    axios.get("http://localhost:3001/api/comments").then(res => {
      this.setState({ data: res.data });
    });
  }
  componentDidMount() {
    this.getComments();
  }

  handleSubmit(comment) {
    console.log("in app", this.state.data);
    let newComments = this.state.data.concat([comment]);
    this.setState({ data: newComments });
    axios.post("http://localhost:3001/api/comments", comment).catch(err => {
      console.error(err);
      this.setState({ data: comment });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="splash">
          <h1> Let's Talk Kittens </h1>
          <h2> Tips, Tricks and Stories for all things Kitten</h2>
        </div>
        <Form onSubmit={this.handleSubmit} />
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
