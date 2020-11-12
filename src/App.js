import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown/Countdown';
import Snowfall from 'react-snowfall';

class App extends Component {

  render() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
      <div className="App-header">
        <Snowfall />
        <h1 className="text">
        <Countdown date={`${year}-12-25T00:00:00`} />
        until Christmas!</h1>
      </div>
    );
  }
}

export default App;