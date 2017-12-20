import React, { Component } from 'react';
import Comment from './Comment'
import '../App.css';

export default class List extends Component {
  render() {
    let forumList = this.props.data.map(comment => {
      return(
        <Comment
          author={comment.author}
          text={comment.text}
          key={comment['_id']}/>
      )
    })
    return (
      <div>
        {forumList}
      </div>
    );
  }
}
