
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './blocks/PageTitle';
import Footer from './blocks/Footer';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from './../../actions/LoginUser';

class LoginPage extends Component {


    render() {
      console.log(this.props)
      return (
        <div className="loginPage">
          <PageTitle title={'Welcome to Girlfriend Points'} subtitle={'Sign in to use the app'} /> 
    
            <form>
              <label>Username</label>
              <input type="text" ref="username" />
              <br /><br />

              {/* PASSWORD FIELD: temporarily disabled */}
              {/* <label>Password</label>
              <input type="text" ref="password" />
              <br /><br /> */}

              <Link to = "/theHub">
                <input type="submit" onClick={()=> this.props.LoginUser()} />
              </Link>
            </form>
            <br /><br />
          <Footer />
        </div>
      );
    }
  }

  function matchDispatchToProps(dispatch){
    return bindActionCreators({LoginUser:LoginUser}, dispatch)
}


export default connect(null, matchDispatchToProps)(LoginPage);
   