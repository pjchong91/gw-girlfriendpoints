import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Header extends Component {


    render() {
      console.log(this.props)
      return (
        <div className="header">
            <h1>Header</h1>
            <p> is logged in</p>
            <Link to ="/theHub">
                <i className="fas fa-smile"></i>
                <p>ET go home</p>
            </Link>
            
                
        </div>
      );
    }
  }
  
  function mapStateToProps(state){
    return {loginUser: state.username}
              
}

export default connect(mapStateToProps, null)(Header);