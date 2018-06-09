import React, { Component } from 'react';
import PageTitle from './blocks/PageTitle';
import Footer from './blocks/Footer';
import { Link } from 'react-router-dom';


class TheHub extends Component {
 
    render() {
      return (
        <div className="TheHub">
            <PageTitle title={'The Hub'} subtitle={'Main summary viewed here and navigation'} />   
            
            <Link to = "/pointpage">
                <i className="fas fa-plus-square"></i> Points
            </Link>
            
            <Footer />
        </div>
      );
    }
  }
  
  export default TheHub;
  