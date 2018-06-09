import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {addPointEventZ} from '../../../../../actions';

class AddPoints extends Component {

  constructor(){
    super();
    this.state = {
      newPointEvent:{}
    }
  }

  handleSubmit(e){
    e.preventDefault();
    // this.props.addPointEventZ();

    this.setState({newPointEvent:{
        points: this.refs.points.value,
        event: this.refs.event.value,
        date: this.refs.date.value
    }}, function(){
      this.props.addPointEvent(this.state.newPointEvent)
     
    })


    }
  

    render() {
      
      return (
        <div className="addPoints">
            <h1>Girlfriend Points</h1>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <label>Points</label>
                    <input type="number" ref="points"/>
                    <br/><br/>

                    <label>Event</label>
                    <input type="text" ref="event" />
                    <br/><br/>

                    <label>Date</label>
                    <input type="text" ref="date" />
                    <br/><br/>

                    <input type="submit" />

                </form> 
        </div>
      );
    }
  }

//   function matchDispatchToProps(dispatch){
//     return bindActionCreators({addPointEventZ: addPointEventZ}, dispatch)
// }

  
  export default AddPoints;