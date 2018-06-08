import React, {Component} from 'react';
import {connect} from 'react-redux';

class EventDetail extends Component{
    render() {
        if (!this.props.eventList){
            return (<p>Select an event</p>);
        }else {
            return (
                <div>
                    <li>{this.props.eventList.points}</li>
                    <li>{this.props.eventList.date}</li>
                </div>
            )
        }
       
    }
}

function mapStateToProps(state){
    return {eventList: state.activeEvent}
              
}


export default connect(mapStateToProps)(EventDetail);