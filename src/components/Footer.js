import React, { Component } from 'react';
import $ from 'jquery';

class Footer extends Component {

    // state = {
    //     clicks: 0
    // }

    // updateButton(){
    //     this.setState(
    //         function(prevState){
    //             return (
    //             {clicks: prevState.clicks += 1}
    //             )
                
    //         },
    //     );
    // }



    render() {
      return (
        <div className="footer">
            <h1>Footer</h1>

            {/* <button onClick={this.updateButton.bind(this)}>{this.state.clicks}</button> */}
        
            <a className="github-link" href="https://github.com/pjchong91"><i class="fab fa-github"></i> @ P Chong </a>
                
        </div>
      );
    }
  }
  
  export default Footer;