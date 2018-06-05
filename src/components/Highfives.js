import React, { Component } from 'react';
import $ from 'jquery';

class Highfives extends Component {

    state = {
        clicks: 0
    }

    updateButton(){
        this.setState(
            function(prevState){
                return (
                {clicks: prevState.clicks += 1}
                )
                
            },
        );
    }



    render() {
      return (
        <div className="highFives">
            <h1>Highfives</h1>

            <button onClick={this.updateButton.bind(this)}>{this.state.clicks}</button>
        

                
        </div>
      );
    }
  }
  
  export default Highfives;