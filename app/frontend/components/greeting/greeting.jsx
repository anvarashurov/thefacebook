import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import Link


class Greeting extends React.Component {

  render() {
    let outcome;

    if (typeof this.props.currentUser !== 'undefined') {
      // debugger
      outcome = (
        <div>
          <h1> Welcome! {this.props.currentUser.username} </h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      )
    } else {
      // debugger
      outcome = (
        <div>
          <Link to="/signup">Sign up</Link> <br />
          <Link to="/login">Sign in</Link>
        </div>
      )
    }
    return (
      <h1>{outcome}</h1>
    )
  }
  // return <h1>Hello</h1>;
}

export default withRouter(Greeting);