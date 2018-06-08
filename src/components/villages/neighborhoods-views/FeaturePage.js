
import React, { Component } from 'react';
// import AddPoints from './blocks/houses/AddPoints';
// import PointEvents from './blocks/houses/PointEvents';
import Highfives from './blocks/houses/Highfives';
import ButtonChangeColor from './blocks/houses/ButtonChangeColor';
import Header from './blocks/Header';
import PageTitle from './blocks/houses/PageTitle';
import Footer from './blocks/Footer';

class FeaturePage extends Component {

  
 
    render() {

      
      return (
        <div className="featurePage">
        
        <Header />
        <PageTitle title={'Feature Page'} subtitle={'All the page features exist here'}/>
        <Highfives />
        <ButtonChangeColor />
        <Footer />
      
        </div>
      );
    }
  }
  
  export default FeaturePage;
  