
import React, { Component } from 'react';
import AddPoints from './blocks/AddPoints';
import PointEvents from './blocks/PointEvents';
import Header from './blocks/Header';
import PageTitle from './blocks/PageTitle';
import PointTotal from './blocks/PointTotal';
import Footer from './blocks/Footer';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class PointPage extends Component {
constructor(){
    super();
    this.state={
        pointEvents:[],
        pointTotal: ''
    }

    


}

getPointEvents(){

      this.setState({pointEvents:this.props.eventList})
          
    }

getPoints(){
    if (this.state.pointEvents === ''){
        return
    } else {
        let arrayPoints = [];
        this.state.pointEvents.map(points =>{
        arrayPoints.push(parseInt(points.points));
        
        })
        //X And Y don't matter as variables....
        let pointSum;
        pointSum = arrayPoints.reduce((x,y) => x+y);
        
        
        this.setState({pointTotal:pointSum});
        
    }
   
}
   


componentWillMount(){
this.getPointEvents();


}

componentDidMount(){
    this.getPoints();
}



handleAddPointEvent(pointEvent){
    let currentPointEvents = this.state.pointEvents;

    currentPointEvents.push(pointEvent);

   this.setState({pointEvents:currentPointEvents});

 
   let arrayPoints = [];
   this.state.pointEvents.map(points =>{
    
   arrayPoints.push(parseInt(points.points));
   
   })
  //  X And Y don't matter as variables....
   let pointSum;
   pointSum = arrayPoints.reduce((x,y) => x+y);
   
   
   this.setState({pointTotal:pointSum});
}



 
    render() {
      console.log(this.state,'state')
      return (

        
        <div className="pointPage">
            <Header />
            <PageTitle title={'Points Page'} subtitle={'Add points and view previous point events here'} />
            <PointTotal pointSum = {this.state.pointTotal} />
            <AddPoints addPointEvent={this.handleAddPointEvent.bind(this)} />
            <PointEvents allPointEvents = {this.state.pointEvents}  />
            <Footer />
      
        </div>
      );
    }
  }

 
  function mapStateToProps(state){
    return {
      eventList: state.PointEvents,
      TotalPoints: state.TotalPoints
    }
              
}

export default connect(mapStateToProps, null)(PointPage);
  