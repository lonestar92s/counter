import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

addition = (event) =>{
this.setState({
  counter: this.state.counter + 1
  })
}

subtraction = (event) => {
  this.setState({
    counter: this.state.counter - 1
  })
}
 state = {
  counter: 0
}



  render() {
    return (
      <div>
      <h1>{this.state.counter}</h1>
      <button onClick={this.addition}>Add</button>
      <button onClick={this.subtraction}>Subtract</button>
      </div>
    )
  }
}


