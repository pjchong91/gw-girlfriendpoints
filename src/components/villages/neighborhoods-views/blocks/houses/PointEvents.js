import React, { Component } from 'react';
import SingularPointEvent from './SingularPointEvent';

class PointEvents extends Component {
  render() {

  
      let allPE = this.props.allPointEvents.map(pointEvents =>{
        return(
          // 
          <SingularPointEvent pointEvents={pointEvents} key={pointEvents.event}/>
            // <SingularPointEvent pointEvent={this.pointEvents} key={this.pointEvents.event}/>
            // console.log('bananas', pointEvents.event)
        )
        
      })
    //Take allPointEvents array from PointsPage and map each of the pointEvents
  
   
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
