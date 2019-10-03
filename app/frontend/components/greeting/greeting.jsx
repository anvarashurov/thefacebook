import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Header from './header';
import SignupFormContainer from '../signup/SignupFormContainer';

// import Link


class Greeting extends React.Component {

  render() {

    let outcome;
    
    if (typeof this.props.currentUser !== 'undefined') {
      outcome = (
        <div>
          <h1> Welcome! {this.props.currentUser.username} </h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      )
    } 
    else {
      outcome = (
        <div className="landing_page">
          <Header />
          <SignupFormContainer />
          <div className="create_page_message">
            <p>
              <a href="#">Create a Page</a>  for a celebrity, band or business.
            </p> 
          </div>
        </div>
      )
    }
    return (
      <div>{outcome}</div>
    )
  }
}

export default withRouter(Greeting);