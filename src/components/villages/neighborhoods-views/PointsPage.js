
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

getPointEvents(){
    this.setState({
        pointEvents:[
            {
                points: 'falala',
                event: 'lots of events',
                date: 'arbitrary date'
            },
            {
                points: 'omfg',
                event: 'whydoesnothing work',
                date: 'sadsadtiems'
            }
           
        ]
    })
          
    }
   


componentWillMount(){
this.getPointEvents();
}


handleAddPointEvent(pointEvent){
    let currentPointEvents = this.state.pointEvents;

    currentPointEvents.push(pointEvent);

   this.setState({pointEvents:currentPointEvents});

}



 
    render() {

        
      
      return (

        
        <div className="pointsPage">
        <Header />
        <PageTitle title={'Points Page'} subtitle={'Add points and view previous point events here'} />
        <AddPoints addPointEvent={this.handleAddPointEvent.bind(this)} />
        <PointEvents allPointEvents = {this.state.pointEvents}/>
        <Footer />
      
        </div>
      );
    }
  }
  
  export default PointsPage;
  