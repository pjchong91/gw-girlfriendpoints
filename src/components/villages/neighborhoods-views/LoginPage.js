
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './blocks/houses/PageTitle';
import Footer from './blocks/Footer';

class LoginPage extends Component {

 
    render() {
      return (
        <div className="loginPage">
        <PageTitle title={'Welcome to Girlfriend Points'} subtitle={'Sign in to use the app'} />
    
        <form>
            <label>Username</label>
            <input type="text" ref="username" />
            <br /><br />

            <label>Password</label>
            <input type="text" ref="password" />
            <br /><br />

            <Link to = "/tableofcontent">
                <input type="submit" />
            </Link>
        </form>

        <Footer />
        </div>
      );
    }
  }
  
  export default LoginPage;
  