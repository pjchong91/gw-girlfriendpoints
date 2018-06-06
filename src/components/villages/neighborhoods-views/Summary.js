
import React, { Component } from 'react';
import AddPoints from './blocks/houses/AddPoints';
import PointEvents from './blocks/houses/PointEvents';
import Highfives from './blocks/houses/Highfives';
import ButtonChangeColor from './blocks/houses/ButtonChangeColor';
import PageTitle from './blocks/houses/PageTitle';

class Summary extends Component {

 
    render() {
      return (
        <div className="summary">
        <PageTitle title={'The Hub'} subtitle={'Main summary viewed here and navigation'} />

        <ul className="thingsforsummary">
            <li>TOTAL POINTS</li>
            <li>TOTAL FIVES</li>
        </ul>
      
        </div>
      );
    }
  }
  
  export default Summary;
  