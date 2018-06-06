import React, { Component } from 'react';
import $ from 'jquery';

class ButtonChangeColor extends Component {

    state = {
        color: 'blue',
        text: 'Its a great day to be alive'
    }

    buttonChangeColor(){
        this.setState(function(){
          return ({
              color: 'red',
              text: 'Im having a great morning'
          })  
        }
           
               
                
           
        );
    }



    render() {
      return (
        <div className="buttonChangeColor">
            <h1>This Button Changes Color</h1>

            <button 
            onClick={this.buttonChangeColor.bind(this)}
            style={{color: this.state.color}}>{this.state.text}</button>
        

                
        </div>
      );
    }
  }
  
  export default ButtonChangeColor;