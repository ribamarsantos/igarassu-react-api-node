import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    response: ''
  }
  componentDidMount() {
    this.fetchApi()
      .then(res => this.setState({ response: res.payload }))
      .catch(err => console.log(err));
  }

  fetchApi = async () => {
    const response = await fetch('/api/yo');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2> Greetings: {this.state.response} </h2>
        
      </div>
    );
  }
}

export default App;
