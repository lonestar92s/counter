import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
 
handleClick = (event) =>{
this.setState({
  counter: this.state.counter + 1
})
}
 state = {
  counter: 0
 }

  render() {
    return (
      <div>
      <h1>{this.state.counter}</h1>
      <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}


