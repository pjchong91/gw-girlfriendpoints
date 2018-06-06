import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/villages/neighborhoods-views/blocks/Footer';
import LoginPage from './components/villages/neighborhoods-views/LoginPage';
import FeaturePage from './components/villages/neighborhoods-views/FeaturePage';
import $ from 'jquery';

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <LoginPage />
        <FeaturePage />
        <Footer />
      </div>
    );
  }
}

export default App;
