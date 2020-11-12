import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown/Countdown';

class App extends Component {

  render() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
      <div className="App">
        <h3 className="title">Christmas is coming in:</h3>
        <Countdown date={`${year}-12-25T00:00:00`} />
      </div>
    );
  }
}

export default App;