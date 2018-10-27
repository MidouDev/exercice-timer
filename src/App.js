import React, { Component } from 'react';
import Header from './Header.jsx';
import './App.css';
import './bootstrap.min.css'
import Timer from './Timer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="mt-5">
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
