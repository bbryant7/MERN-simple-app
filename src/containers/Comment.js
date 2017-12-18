import React, { Component } from "react";
import "../index.css";

export default class Comment extends Component {
  render() {
    return (
      <div className="post">
        <div className="authorbox">
          <div className="authorimage" />
          <h3> {this.props.author}</h3>
        </div>
        <div className ="commentarea">
        <div className="commentBox">
          <p> {this.props.text} </p>
        </div>
        <button> Update </button>
        <button> Delete </button>
        </div>
      </div>
    );
  }
}
