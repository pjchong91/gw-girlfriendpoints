import React, { Component } from 'react';
import $ from 'jquery';

class ButtonChangeColor extends Component {
    constructor(){
        super();
        this.state = {
            color: 'purple',
            text: 'Its a great day to be alive'
        }
        
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

   
  
    componentDidMount(){
        setTimeout( () =>{
            this.setState({color: 'black'}),
        100000})
    }

    componentWillMount(){
        
            this.setState({color: 'orange'})
            
    }


    render() {
      return (
        <div className="buttonChangeColor">
            <h1>This Button Changes Color</h1>

            <button 
            onClick={this.buttonChangeColor.bind(this)}
            style={{color: this.state.color}}>{this.state.text}</button>
            <p>Eventually I would like to put favourite quotes or funnies here of Beb that make me laugh :)</p>
            <p>Like a quote shuffle - like QOD </p>
        

                
        </div>
      );
    }
  }
  
  export default ButtonChangeColor;