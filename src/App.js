import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddPoints from './components/AddPoints';
import PointEvents from './components/PointEvents';
import Highfives from './components/Highfives';
import ButtonChangeColor from './components/ButtonChangeColor';
import Footer from './components/Footer';
import $ from 'jquery';

class App extends Component {

 


  render() {
    return (
      <div className="App">
        <AddPoints /> 
        <PointEvents />
        <Highfives />
        <ButtonChangeColor />
        <Footer />
      </div>
    );
  }
}

export default App;
