import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      showImage: false,
    };   
  }

  toogle = () => {
    this.setState ({
      showImage: !this.state.showImage,
    });    
  } 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <button type="button" onClick={this.toogle}>
            { this.state.showImage ? "Esconder":"Mostrar" }
          </button>
          {this.state.showImage && (
            <img src={logo} className="App-logo" alt="logo" />
          )} 
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
