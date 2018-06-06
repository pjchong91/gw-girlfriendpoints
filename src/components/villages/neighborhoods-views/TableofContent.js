
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Summary from './Summary';
import Header from './blocks/Header';
import PageTitle from './blocks/houses/PageTitle';
import Footer from './blocks/Footer';



class TableofContent extends Component {

 
    render() {
      return (
        <div className="tableofContent">
        <Header />
        
        <Summary />
       

            <Link to = "/featurepage">
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
  