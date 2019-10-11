import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleLogin(e) {
    // e.preventDefault();
    // this.props.history.push(`users/${currentUser.id}/`)
    return this.props.login(this.state);
  }

  handleDemoLogin(e) {
    // e.preventDefault();
    return this.props.login({ email: "demouser@gmail.com", password: "000000" });
    // this.props.history.push(`users/${currentUser.id}/`)
  }

  handleErrors(){
    let errors = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>
    })
    return (<div className="session_errors">
      {errors}
    </div>
    )
    // const options = ['First', 'Last', 'Email', 'Gender', 'Password'];
    // const index = ['first_name', 'last_name', 'email', 'gender', 'password'];
    // let errors = this.props.errors.forEach((error) => {
    //     let i = options.indexOf(error.split(" ")[0]);
    //     if( i >= 0 ) {
    //       document.getElementById(index[i]).style.border = "1px solid red";
    //     }      
    // })
  }

  updateEmail(e) {
    e.preventDefault();
    return this.setState({ email: e.target.value })
  }

  updatePassword(e) {
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
                      <p>Email or Phone</p> 
                    </span>
                  </td>
                  <td>
                    <span>
                      <p>Password</p>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="email" className="login_input_email" onChange={this.updateEmail} value={this.state.email} required/>
                  </td>
                  <td>
                    <input type="password" name="password" className="login_input_password" onChange={this.updatePassword} value={this.state.password} required/>
                  </td>
                  <td>
                    <input type="submit" id="login_button" value="Log In" className="login_button" onClick={this.handleLogin}/>
                  </td>
                  <td>
                  <input type="submit" id="demo_button" value="Demo" className="login_button" onClick={this.handleDemoLogin} />
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
        {this.handleErrors()}
      </div>
    )
  }
}

export default withRouter(LoginForm);