import React, { Component } from 'react';

import './App.css';
import LoginPage from './components/containers/LoginPage';
// import FeaturePage from './components/villages/neighborhoods-views/FeaturePage';
import TheHub from './components/containers/TheHub';
// import TableofContent from './components/villages/neighborhoods-views/TableofContent';
import PointPage from './components/containers/PointPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import EventList from './components/containers/eventList';
class App extends Component {

 
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LoginPage}/>
            {/* {/* <Route path ="/featurepage" component={FeaturePage} /> */}
            <Route path ="/thehub" component={TheHub} />
            {/* <Route path = "/tableofcontent" component={TableofContent}/> */}
            <Route path = "/pointpage" component={PointPage}/>
          
          {/* <EventList /> */}
          
          </div>
          </Router>
    
      </div>
    );
  }
}

export default App;
