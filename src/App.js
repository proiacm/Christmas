import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown/Countdown';
import Snowfall from 'react-snowfall';
import LottieAnimation from './Lottie';
import home from './Animation/xmas.json';
import Footer from './Footer/Footer';

class App extends Component {

  render() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
      <div className='App'>
        <div className="App-header">
          <Snowfall color='#FFFFFF'/>
          <div className="text">
          <Countdown date={`${year}-12-25T00:00:00`} />
          until Christmas!</div>
          <LottieAnimation lotti={home} height={200} width={300} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;