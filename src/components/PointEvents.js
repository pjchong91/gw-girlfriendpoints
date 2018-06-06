import React, { Component } from 'react';

class PointEvents extends Component {
  render() {
    return (
      <div className="pointEvents">
        <h1>Display Events </h1>
        <li>For example: POINTS, EVENT, DATE</li>
        <li>POINTS, EVENT, DATE </li>

        <p>With different background colors or icons for cash in vs cash out -- icon might bbetter for A11Y</p>
      </div>
    );
  }
}

export default PointEvents;
