
import React, { Component } from 'react';


class PointTotal extends Component {

   
    
  
    render() {
        

    // console.log(pointSum,'omfg');
      return (
        <div className="PointTotal">
        
<p>You currently have:</p>
       
        <p>{this.props.pointSum} POINTS</p>
      
        </div>
      );
    }
  }
  
  export default PointTotal;
  