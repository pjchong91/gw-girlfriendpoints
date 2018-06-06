import React, { Component } from 'react';
import $ from 'jquery';

class AddPoints extends Component {

    // state = {
    //     points: this.props.points,
    //     event: this.props.event,
    //     date: this.props.date
    // }



    render() {
      return (
        <div className="addPoints">
            <h1>Girlfriend Points</h1>
                <form>
                    <label>Points</label>
                    <input type="text" ref="points">{this.props.points}</input>
                    <br/><br/>

                    <label>Event</label>
                    <input type="text" ref="event">{this.props.event}</input>
                    <br/><br/>

                    <label>Date</label>
                    <input type="text" ref="date">{this.props.date}</input>
                    <br/><br/>

                    <input type="submit"/>

                </form>


                
        </div>
      );
    }
  }
  
  export default AddPoints;