
import React, { Component } from 'react';
import AddPoints from './blocks/houses/AddPoints';
import PointEvents from './blocks/houses/PointEvents';
import Header from './blocks/Header';
import PageTitle from './blocks/houses/PageTitle';
import Footer from './blocks/Footer';


class PointsPage extends Component {
constructor(){
    super();
    this.state={
        pointEvents:[]
    }
}

handleAddPointEvent(pointEvent){
    let currentPointEvents = this.state.pointEvents;
    // this.setState(
    //     currentPointEvents.push[newPointEvent]
    // )

    currentPointEvents.push(pointEvent);
    console.log(this.state);
}
 
    render() {
      return (
        <div className="pointsPage">
        <Header />
        <PageTitle title={'Points Page'} subtitle={'Add points and view previous point events here'} />
        <AddPoints addPointEvent={this.handleAddPointEvent.bind(this)}/>
        {/* <button onClick={this.handleAddPointEvent.bind(this)}>GRAB THINGS</button> */}
        <PointEvents />
        <Footer />
      
        </div>
      );
    }
  }
  
  export default PointsPage;
  