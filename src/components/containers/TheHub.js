import React, { Component } from 'react';
import PageTitle from './blocks/PageTitle';
import Header from './blocks/Header';
import Footer from './blocks/Footer';
import PointTotal from './blocks/PointTotal';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class TheHub extends Component {

  constructor(){
    super();
    this.state={
        // pointEvents:[],
        pointTotal: ''
    }


}

// getPointEvents(){

//   this.setState({pointEvents:this.props.eventList})
      
// }

getPoints(){
if (this.props.eventList === ''){
    return
} else {
    let arrayPoints = [];
    this.props.eventList.map(points =>{
    arrayPoints.push(parseInt(points.points));
    
    })
    //X And Y don't matter as variables....
    let pointSum;
    pointSum = arrayPoints.reduce((x,y) => x+y);
    
    
    this.setState({pointTotal:pointSum});
    
}

}

// componentWillMount(){
// //   this.getPointEvents();
  
  
//   }
  
  componentDidMount(){
      this.getPoints();
  }
 
    render() {
      console.log(this.props, 'props')
      console.log(this.state, 'state')
    
      return (
        <div className="TheHub">
            <Header />

            <PageTitle title={'The Hub'} subtitle={'Main summary viewed here and navigation'} />   
            
            <Link to = "/pointpage">
                <i className="fas fa-plus-square"></i> Points
            </Link>

            <PointTotal pointSum={this.state.pointTotal}/>
            
            <Footer />
        </div>
      );
    }
  }

  function mapStateToProps(state){
    return {
      eventList:state.PointEvents}
              
}
  
export default connect(mapStateToProps, null)(TheHub);
  