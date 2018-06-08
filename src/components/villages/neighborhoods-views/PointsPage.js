
import React, { Component } from 'react';
import AddPoints from './blocks/houses/AddPoints';
import PointEvents from './blocks/houses/PointEvents';
import Header from './blocks/Header';
import PageTitle from './blocks/houses/PageTitle';
import PointTotal from './blocks/houses/PointTotal';
import Footer from './blocks/Footer';



class PointsPage extends Component {
constructor(){
    super();
    this.state={
        pointEvents:[],
        pointTotal: ''
    }

    


}

getPointEvents(){
    this.setState({
        pointEvents:[
            {
                points: 50,
                event: 'lots of events',
                date: 'arbitrary date'
            },
            {
                points: 400,
                event: 'whydoesnothing work',
                date: 'sadsadtiems'
            }
           
        ]
    })
          
    }

getPoints(){
    if (this.state.pointEvents === ''){
        return
    } else {
        let arrayPoints = [];
        this.state.pointEvents.map(points =>{
        arrayPoints.push(points.points);
        
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
   //X And Y don't matter as variables....
   let pointSum;
   console.log(arrayPoints);
   pointSum = arrayPoints.reduce((x,y) => x+y);
   
   
   this.setState({pointTotal:pointSum});
//    console.log(this.state.pointTotal)
}


 
    render() {

    
      
      return (

        
        <div className="pointsPage">
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

 
  export default PointsPage;
  