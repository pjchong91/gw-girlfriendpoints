
import React, { Component } from 'react';
import AddPoints from './blocks/houses/AddPoints';
import PointEvents from './blocks/houses/PointEvents';
import Highfives from './blocks/houses/Highfives';
import ButtonChangeColor from './blocks/houses/ButtonChangeColor';
import PageTitle from './blocks/houses/PageTitle';
import PointTotal from './blocks/houses/PointTotal';

class Summary extends Component {
constructor(){
  super();



}
  
 
    render() {
      return (
        <div className="summary">
        <PageTitle title={'The Hub'} subtitle={'Main summary viewed here and navigation'} />

        <ul className="thingsforsummary">
          
            <PointTotal pointTotal={'apples'}/>
            
            <li>TOTAL FIVES</li>
        </ul>
      
        </div>
      );
    }
  }
  
  export default Summary;
  