import React, { Component } from 'react';

class SingularPointEvent extends Component {
  render() {
  
      return(

        <li className = "singularPointEvent">{this.props.pointEvents.points} - {this.props.pointEvents.event} - {this.props.pointEvents.date}</li>


    
      )
  
  }
}

export default SingularPointEvent;
