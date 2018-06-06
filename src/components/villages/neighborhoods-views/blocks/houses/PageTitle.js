import React, { Component } from 'react';
import $ from 'jquery';

class PageTitle extends Component {




    render() {
      return (
        <div className="pageTitle">
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
         
        </div>
      );
    }
  }
  
  export default PageTitle;