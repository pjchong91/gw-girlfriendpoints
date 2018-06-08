import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addPointEventZ} from '../../actions';
import EventDetail from './eventDetail';

class EventList extends Component{

    createEventList(){
        console.log(this.props.eventList, 'hellothisisjoe');
        return this.props.eventList.map((event)=>{
            return (
                <div>
                    <li onClick={()=> this.props.addPointEventZ(event)}>{event.event}</li> 
                   
                </div>
            );
        });
    }
    render(){
        
        return(
            <ul>
               {this.createEventList()}
               <hr/>
                    <EventDetail />
               {/* <button onClick={() => this.props.addPointEventZ()}/> */}
            </ul>

        )
    }
}

function mapStateToProps(state){
    return {eventList: state.PointEvents}
              
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({addPointEventZ: addPointEventZ}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(EventList);