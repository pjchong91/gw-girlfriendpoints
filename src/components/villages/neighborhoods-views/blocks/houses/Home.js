//This icon will guie people back to the main page[Tableof Content]
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



        

class Home extends Component {


    render() {
      return (
        <div className="home">
            <Link to ="/tableofcontent">
                <i className="fas fa-smile"></i>
                <p>ET go home</p>
            </Link>
     
        </div>
      );
    }
  }
  
  export default Home;