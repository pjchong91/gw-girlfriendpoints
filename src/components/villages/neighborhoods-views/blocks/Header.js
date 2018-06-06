import React, { Component } from 'react';
import Home from './houses/Home';
import $ from 'jquery';

class Header extends Component {




    render() {
      return (
        <div className="header">
            <h1>Header</h1>
        
            <Home />
            
                
        </div>
      );
    }
  }
  
  export default Header;