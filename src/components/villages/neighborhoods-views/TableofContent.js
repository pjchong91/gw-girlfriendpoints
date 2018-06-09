
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Summary from './Summary';
// import Header from './blocks/Header';
import PageTitle from './blocks/houses/PageTitle';
import Footer from './blocks/Footer';



class TableofContent extends Component {

 
    render() {
        // console.log(this.state,'toc');
      return (
        <div className="tableofContent">
        {/* <Header /> */}
        
        <Summary />
       

            <Link to ={{
                pathname: "/featurepage",
                state: {variableapple: 'wtf'
                }}}>
                <p>Feature Page</p>
            </Link>
            <Link to = "/pointspage">
                <p>Points Page</p>
            </Link>
                

        <Footer />
        </div>
      );
    }
  }
  
  export default TableofContent;
  