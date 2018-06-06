
import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class LoginPage extends Component {

 
    render() {
      return (
        <div className="loginPage">
        <p>I am the login page</p>
        <Link to = "/featurepage">
            <p>IM THE LOGIN NOW</p>
        </Link>
      
        </div>
      );
    }
  }
  
  export default LoginPage;
  