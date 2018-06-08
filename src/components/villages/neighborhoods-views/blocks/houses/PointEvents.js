import React, { Component } from 'react';
import SingularPointEvent from './SingularPointEvent';
import PointTotal from './PointTotal';

class PointEvents extends Component {
  render() {

      //Take allPointEvents array from PointsPage and map each of the pointEvents
      let allPE = this.props.allPointEvents.map(pointEvents =>{
        return(
         
          <SingularPointEvent pointEvents={pointEvents} key={pointEvents.event}/>
        
        )
        
      })

     
      
  
   
    return (

      
      <div className="pointEvents">

      
        <h1>Display Events </h1>
        <ul>
        {allPE}
        </ul>

        
      </div>
    );
  }
}

export default PointEvents;
