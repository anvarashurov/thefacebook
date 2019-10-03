import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    // debugger
    e.preventDefault();
    debugger
    return this.props.login(this.state);
  }

  updateEmail(e) {
    // debugger
    e.preventDefault();
    return this.setState({ email: e.target.value })
  }

  updatePassword(e) {
    // debugger
    e.preventDefault();
    return this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className="login_container">
        <form className="login_form">
            <table>
              <tbody>
                <tr>
                  <td>
                    <span> 
                      Email or Phone
                    </span>
                  </td>
                  <td>
                    <span>
                      Password
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                  <input type="text" name="email" id="email" className="login_input_email" onChange={this.updateEmail} value={this.state.email}/>
                  </td>
                  <td>
                    <input type="password" name="password" id="password" className="login_password" onChange={this.updatePassword} value={this.state.password}/>
                  </td>
                  <td>
                  <input type="submit" id="login_button" value="Log In" onClick={this.handleLogin}/>
                  </td>
                </tr>
                <tr>
                  <td className="login_form_label_field"></td>
                  <td className="login_form_label_field">
                    <div>
                      <a href="#">Forgot account?</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);