import React, { Component } from 'react';
import '../App.css';


export default class Form extends Component {
  render() {
    return (
      <div>
      <form>
        <textarea/>
        <input placeholder="User Name"/>
        <button>Submit</button>
      </form>
      </div>
    );
  }
}
