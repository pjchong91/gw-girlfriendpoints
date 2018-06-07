import React, { Component } from 'react';

import './App.css';
import LoginPage from './components/villages/neighborhoods-views/LoginPage';
import FeaturePage from './components/villages/neighborhoods-views/FeaturePage';
import Summary from './components/villages/neighborhoods-views/Summary';
import TableofContent from './components/villages/neighborhoods-views/TableofContent';
import PointsPage from './components/villages/neighborhoods-views/PointsPage';
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
            <Route path ="/summary" component={Summary} />
            <Route path = "/tableofcontent" component={TableofContent}/>
            <Route path = "/pointspage" component={PointsPage}/>
          </div>
          </Router>
    
      </div>
    );
  }
}

export default App;
