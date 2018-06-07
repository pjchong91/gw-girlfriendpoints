import React, { Component } from 'react';

class SingularPointEvent extends Component {
  render() {
    console.log('EPEP', this.props.pointEvents.points)
    // console.log('bebsosmort',this.props.points)
      return(
       

        

        <li className = "singularPointEvent">{this.props.pointEvents.points} - {this.props.pointEvents.event} - {this.props.pointEvents.date}</li>


      
    
      )
  
  }
}

export default SingularPointEvent;
