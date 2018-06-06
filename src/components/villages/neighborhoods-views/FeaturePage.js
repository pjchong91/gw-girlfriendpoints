
import React, { Component } from 'react';
import AddPoints from './blocks/houses/AddPoints';
import PointEvents from './blocks/houses/PointEvents';
import Highfives from './blocks/houses/Highfives';
import ButtonChangeColor from './blocks/houses/ButtonChangeColor';

class FeaturePage extends Component {

 
    render() {
      return (
        <div className="featurePage">
        <p>I am the feature page</p>
        <AddPoints />
        <PointEvents />
        <Highfives />
        <ButtonChangeColor />
      
        </div>
      );
    }
  }
  
  export default FeaturePage;
  