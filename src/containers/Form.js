import React, { Component } from "react";
import "../App.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { author: "", text: "" };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  handleTextBoxChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({ author: this.state.author, text: this.state.text });
    this.setState({ author: "", text: "" });

}
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="author-input"
            type="text"
            placeholder="Name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <textarea
            className="comment-box"
            type="text"
            maxLength="500"
            minLength="5"
            spellCheck="true"
            placeholder="Share your kitten related tips, tricks and stories..."
            value={this.state.text}
            onChange={this.handleTextBoxChange}
          />

          <button type="submit" value="Post" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
