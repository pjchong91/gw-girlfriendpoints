import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/villages/neighborhoods-views/blocks/Footer';
import LoginPage from './components/villages/neighborhoods-views/LoginPage';
import FeaturePage from './components/villages/neighborhoods-views/FeaturePage';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LoginPage}/>
            <Route path ="/featurepage" component={FeaturePage} />
          </div>
          </Router>
        {/* <LoginPage /> */}
        {/* <FeaturePage /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
