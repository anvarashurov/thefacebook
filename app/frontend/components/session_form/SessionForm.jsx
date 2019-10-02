import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.updatePassword = this.updatePassword.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.processForm(this.state);
  }

  updateUsername(e) {
    e.preventDefault();
    return this.setState({ username: e.target.value })
  }

  updatePassword(e) {
    e.preventDefault();
    return this.setState({ password: e.target.value })
  }

  render() {

    let buttonText;

    if (this.props.formType === 'signup') {
      buttonText = "Sign up";
    } else {
      buttonText = "Sing in";
    }

    return (
      <div>
        <h1>{buttonText}</h1>
        <form onClick={this.handleSubmit}>
          <input type="text" onChange={this.updateUsername} value={this.state.username} />
          <input type="password" onChange={this.updatePassword} value={this.state.password} />
          <button>{buttonText}</button>
        </form>
        <Link to="/signin">Sign In</Link>
        <Link to="signup">Sign Up</Link>
      </div>
    )

  }
}

export default SessionForm;