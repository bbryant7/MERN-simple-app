import React, { Component } from 'react';

export default class Comment extends Component {

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <h4> {this.props.author}</h4>
        <p> {this.props.text} </p>
      </div>
    )
  }
}
